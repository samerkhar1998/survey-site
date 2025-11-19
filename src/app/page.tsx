// app/page.tsx
"use client";

import { FormEvent, useState } from "react";
import { surveySections, Question } from "./surveySchema";

type AnswersState = Record<string, string>;

export default function SurveyPage() {
  const [answers, setAnswers] = useState<AnswersState>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (question: Question, value: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers,
          meta: {
            // here you can add extra info if needed
            language: "he",
          },
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "שגיאה בשמירת הטופס");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "משהו השתבש");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 text-gray-900">
        <div className="max-w-xl w-full bg-white shadow-md rounded-lg p-8 text-center">
          <h1 className="text-2xl font-semibold mb-4">תודה רבה!</h1>
          <p className="text-gray-700">
            המענה שלך נשמר במערכת. ניתן לסגור את הדף.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex justify-center bg-slate-50 py-8 text-gray-900">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-right">
          סקר חוויית רווחה מותאמת תרבותית
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {surveySections.map((section) => (
            <section key={section.id} className="border-t pt-6 first:border-t-0 first:pt-0">
              <h2 className="text-xl font-semibold mb-4 text-right">
                {section.title}
              </h2>

              <div className="space-y-4">
                {section.questions.map((q) => (
                  <QuestionField
                    key={q.id}
                    question={q}
                    value={answers[q.id] ?? ""}
                    onChange={handleChange}
                  />
                ))}
              </div>
            </section>
          ))}

          {error && (
            <p className="text-red-600 text-sm text-right">{error}</p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2 rounded-md bg-blue-600 text-white font-semibold disabled:opacity-60"
            >
              {submitting ? "שולח..." : "שליחה"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

type QuestionFieldProps = {
  question: Question;
  value: string;
  onChange: (question: Question, value: string) => void;
};

function QuestionField({ question, value, onChange }: QuestionFieldProps) {
  const isScale = question.type === "scale";

  return (
    <div className="flex flex-col gap-1 text-right">
      <label className="font-medium">
        {question.label}
        {question.required && <span className="text-red-500 mr-1">*</span>}
      </label>

      {question.description && (
        <p className="text-xs text-gray-500">{question.description}</p>
      )}

      {isScale ? (
        <div className="flex flex-row-reverse justify-between mt-1">
          {Array.from(
            { length: (question.max ?? 5) - (question.min ?? 1) + 1 },
            (_, i) => (question.min ?? 1) + i
          ).map((num) => (
            <label key={num} className="flex flex-col items-center mx-1">
              <input
                type="radio"
                name={question.id}
                value={num}
                checked={value === String(num)}
                onChange={(e) => onChange(question, e.target.value)}
                className="mb-1"
              />
              <span className="text-xs">{num}</span>
            </label>
          ))}
        </div>
      ) : (
        <textarea
          className="border rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          value={value}
          onChange={(e) => onChange(question, e.target.value)}
        />
      )}
    </div>
  );
}
