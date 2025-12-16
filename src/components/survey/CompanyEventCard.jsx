import React from "react";

export default function CompanyEventCard({ title, goal, highlights, eventType }) {
  return (
    <div 
      className="p-6 mb-4"
      style={{ 
        borderRadius: '24px',
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        width: '340px',
        minHeight: '283px'
      }}
    >
      {/* Title */}
      <h3 className="text-right text-base font-bold mb-4" style={{ color: '#0A476D', fontWeight:'900', fontSize:'0.9375rem', lineHeight:'1rem'  }}>
        {title}
      </h3>

      {/* מטרה */}
      <p className="text-right font-bold mt-4" style={{ color: '#79BF98', fontSize: '0.75rem' }}>
        מטרה:
      </p>
      <p className="text-right text-sm mt-1" style={{ color: '#5B4B43', fontSize:'0.75rem' }}>
        {goal}
      </p>

      {/* דגשים לביצוע */}
      <p className="text-right font-bold mt-4" style={{ color: '#79BF98', fontSize: '0.75rem' }}>
        דגשים לביצוע:
      </p>
      {Array.isArray(highlights) ? (
        <ul className="text-right text-sm list-disc list-inside mt-1 space-y-1" style={{ color: '#5B4B43', fontSize:'0.75rem', lineHeight:'0.9375rem' }} dir="rtl">
          {highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-right text-sm mt-1" style={{ color: '#5B4B43', fontSize:'0.75rem' }}>
          {highlights}
        </p>
      )}

      {/* סוג האירוע */}
      <p className="text-right font-bold mt-4" style={{ color: '#79BF98', fontSize: '0.75rem' }}>
        סוג האירוע:
      </p>
      <p className="text-right text-sm mt-1" style={{ color: '#5B4B43', fontSize:'0.75rem' }}>
        {eventType}
      </p>
    </div>
  );
}