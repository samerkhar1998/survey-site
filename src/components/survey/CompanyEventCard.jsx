import React from "react";

export default function CompanyEventCard({ title, goal, highlights, eventType }) {
  return (
    <div 
      className="p-6"
      style={{ 
        borderRadius: '24px',
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        width: '340px',
        minHeight: '283px'
      }}
    >
      {/* Title */}
      <h3
        className="text-right font-black mb-4 text-[0.9375rem] md:text-[1.1875rem] leading-[1rem] md:leading-[1.5rem]"
        style={{ color: '#0A476D' }}
      >
        {title}
      </h3>

      {/* מטרה */}
      <p className="text-right font-bold mt-4 text-[0.75rem] md:text-[1rem]" style={{ color: '#79BF98' }}>
        מטרה:
      </p>
      <p className="text-right mt-1 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]" style={{ color: '#5B4B43' }}>
        {goal}
      </p>

      {/* דגשים לביצוע */}
      <p className="text-right font-bold mt-4 text-[0.75rem] md:text-[1rem]" style={{ color: '#79BF98' }}>
        דגשים לביצוע:
      </p>
      {Array.isArray(highlights) ? (
        <ul
          className="text-right list-disc list-outside pr-4 mt-1 space-y-1 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
          style={{ color: '#5B4B43' }}
          dir="rtl"
        >
          {highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-right mt-1 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]" style={{ color: '#5B4B43' }}>
          {highlights}
        </p>
      )}

      {/* סוג האירוע */}
      <p className="text-right font-bold mt-4 text-[0.75rem] md:text-[1rem]" style={{ color: '#79BF98' }}>
        סוג האירוע:
      </p>
      <p className="text-right mt-1 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]" style={{ color: '#5B4B43' }}>
        {eventType}
      </p>
    </div>
  );
}
