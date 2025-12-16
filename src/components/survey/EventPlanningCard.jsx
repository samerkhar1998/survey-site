import React from "react";

export default function EventPlanningCard({ title, sections }) {
  return (
    <div 
      className="p-6"
      style={{ 
        backgroundColor: 'rgba(121, 191, 152, 0.1)',
        borderRadius: '24px',
        width: '340px',
        minHeight: '283px'
      }}
    >
      {/* Title */}
      <h3 className="text-right text-lg font-bold mb-6" style={{ lineHeight:'0.9375rem',color: '#0A476D', fontFamily: 'FbScorpion, sans-serif', fontSize:'0.875rem' }}>
        {title}
      </h3>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className={index > 0 ? 'mt-3' : ''}>
          <p className="text-right font-bold mb-2" style={{ color: '#79BF98', fontSize: '0.75rem', fontFamily: 'FbScorpion, sans-serif', lineHeight:'0.9375rem' }}>
            {section.label}
          </p>
          <ul className="text-right text-sm list-disc list-inside space-y-2" style={{ lineHeight:'0.9375rem',color: '#5B4B43', fontFamily: 'FbScorpion, sans-serif', fontSize:'0.75rem' }} dir="rtl">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}