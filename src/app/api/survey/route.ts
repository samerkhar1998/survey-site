// app/api/survey/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { surveySections } from "@/app/surveySchema";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// server-side Supabase client
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false },
});

// Build a flat list of allowed question IDs to validate payload
const allowedQuestionIds = surveySections
  .flatMap((section) => section.questions)
  .map((q) => q.id);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { answers, meta } = body as {
      answers: Record<string, unknown>;
      meta?: Record<string, unknown>;
    };

    if (!answers || typeof answers !== "object") {
      return NextResponse.json(
        { error: "Missing or invalid answers" },
        { status: 400 }
      );
    }

    // Basic validation: only allow known question IDs
    const cleanedAnswers: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(answers)) {
      if (allowedQuestionIds.includes(key)) {
        cleanedAnswers[key] = value;
      }
    }

    // If nothing valid was sent:
    if (Object.keys(cleanedAnswers).length === 0) {
      return NextResponse.json(
        { error: "No valid answers provided" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("survey_responses").insert({
      answers: cleanedAnswers,
      meta: meta ?? {},
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save survey" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}