import React from "react";

export default function LifeEventCard({ title, sections }) {
  return (
    <div 
      className="p-6"
      style={{ 
        backgroundColor: '#0A476D',
        borderRadius: '24px',
        width: '340px',
        minHeight: '283px'
      }}
    >
      {/* Title */}
      <h3 className="text-right text-lg font-black mb-4" style={{ color: '#79BF98', fontWeight:'900', fontSize:'0.9375rem', lineHeight:'1rem' }}>
        {title}
      </h3>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className={index > 0 ? 'mt-4' : ''}>
          <p className="text-right font-bold mb-1" style={{ color: '#79BF98', fontSize: '0.75rem'}}>
            {section.label}
          </p>
          {Array.isArray(section.content) ? (
            <ul className="text-right text-sm list-disc list-inside space-y-1" style={{ color: '#FFFFFF', fontSize: '0.75rem' }} dir="rtl">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-right text-sm" style={{ color: '#FFFFFF', fontSize: '0.75rem' }}>
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}