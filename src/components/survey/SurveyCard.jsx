import React from "react";

export default function SurveyCard({ title, subtitle, sections }) {
  return (
    <div 
      className="p-5"
      style={{ 
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: '24px',
        width: '340px',
        minHeight: '283px'
      }}
    >
      {/* Title */}
      <h3 className="text-right text-base font-black" style={{ color: '#0A476D', fontWeight:'900', fontSize:'0.9375rem', lineHeight:'1rem' }}>
        {title}
      </h3>
      
      {subtitle && (
        <p className="text-right text-sm mt-1" style={{ color: '#0A476D', fontWeight:'700', fontSize:'0.75rem', lineHeight:'0.9375rem' }}>
          {subtitle}
        </p>
      )}

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="mt-3">
          <p className="text-right font-bold" style={{ color: '#79BF98', fontWeight:'700', fontSize:'0.75rem', lineHeight:'0.9375rem' }}>
            {section.label}
          </p>
          {Array.isArray(section.content) ? (
            <ul className="text-right text-sm list-disc list-inside mt-1" style={{ color: '#5B4B43', fontWeight:'700', fontSize:'0.75rem', lineHeight:'0.9375rem'  }} dir="rtl">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-right text-sm mt-1" style={{ color: '#5B4B43', fontWeight:'400', fontSize:'0.75rem', lineHeight:'0.9375rem'  }}>
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}