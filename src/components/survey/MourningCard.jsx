import React from "react";

export default function MourningCard({ title, sections }) {
  return (
    <div 
      className="p-6"
      style={{ 
        backgroundColor: '#79BF98',
        borderRadius: '24px',
        width: '340px',
        minHeight: '283px'
      }}
    >
      {/* Title */}
      <h3 className="text-right text-lg font-black mb-4" style={{ color: '#0A476D', fontFamily: 'FbScorpion, sans-serif', fontSize:'0.975rem', fontWeight:'900' }}>
        {title}
      </h3>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className={index > 0 ? 'mt-4' : ''}>
          <p className="text-right font-bold mb-1" style={{ color: '#0A476D', fontSize: '0.75rem', fontFamily: 'FbScorpion, sans-serif' }}>
            {section.label}
          </p>
          {Array.isArray(section.content) ? (
            <ul className="text-right text-sm list-disc list-inside space-y-1" style={{ fontSize:'0.75rem', color: '#FFFFFF', fontFamily: 'FbScorpion, sans-serif' }} dir="rtl">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-right text-sm" style={{ fontSize:'0.75rem',color: '#FFFFFF', fontFamily: 'FbScorpion, sans-serif' }}>
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}