import React, { useState } from "react";
import QuestionSectionHeader from "./QuestionSectionHeader";
import QuestionBlock from "./QuestionBlock";
import AverageCalculator from "./AverageCalculator";

export default function QuestionSection({ title, questions, onAverageChange }) {
  const [answers, setAnswers] = useState({});

  const calculateAverage = (currentAnswers) => {
    const validAnswers = Object.values(currentAnswers).filter(v => v !== null);
    if (validAnswers.length === 0) return 0;
    return validAnswers.reduce((a, b) => a + b, 0) / validAnswers.length;
  };

  const handleSelect = (questionIndex, value) => {
    const newAnswers = {
      ...answers,
      [questionIndex]: value
    };
    setAnswers(newAnswers);
    if (onAverageChange) {
      onAverageChange(calculateAverage(newAnswers));
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <QuestionSectionHeader title={title} />

      {/* Questions */}
      <div className="mt-2">
        {questions.map((question, index) => (
          <div key={index} style={{marginBottom: index < questions.length - 1 ? '4px' : '0' }}>
            <QuestionBlock
              questionNumber={index + 1}
              questionText={question}
              selectedValue={answers[index]}
              onSelect={(value) => handleSelect(index, value)}
            />
          </div>
        ))}
      </div>

      {/* Average Calculator */}
      <div className="mt-1">
        <AverageCalculator answers={answers} />
      </div>
    </div>
  );
}