// app/surveySchema.ts

export type QuestionType = "scale" | "text";

export type Question = {
  id: string;               // key to save in DB
  label: string;            // question text (Hebrew)
  description?: string;     // small helper text
  type: QuestionType;
  required?: boolean;
  min?: number;             // for scale questions
  max?: number;
};

export type Section = {
  id: string;
  title: string;
  questions: Question[];
};

export const surveySections: Section[] = [
  {
    id: "holidays",
    title: "חגים ומועדים משמעותיים",
    questions: [
      {
        id: "q_holiday_diversity",
        label:
          "עד כמה לך השנה הארגון כולל חגים וימים משמעותיים של כלל התרבויות בארגון?",
        type: "scale",
        min: 1,
        max: 5,
        required: true,
      },
      {
        id: "q_holiday_activities",
        label:
          "עד כמה פעילויות סביב חגים מתוכננות כך שכלל העובדים יכולים להשתתף ולהרגיש נוח?",
        type: "scale",
        min: 1,
        max: 5,
        required: true,
      },
      {
        id: "q_holiday_free_text",
        label: "אם תרצה/י, ספר/י על חוויה חיובית או מאתגרת שקשורה לחגים בארגון.",
        type: "text",
        required: false,
      },
    ],
  },

  // 🔴 Here you’ll later add more sections/questions based on the PDF
];