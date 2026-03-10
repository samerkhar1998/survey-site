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
      <h3
        className="text-right font-black mb-4 text-[0.9375rem] md:text-[1.1875rem] leading-[1rem] md:leading-[1.5rem]"
        style={{ color: '#0A476D' }}
      >
        {title}
      </h3>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className={index > 0 ? 'mt-4' : ''}>
          <p
            className={`text-right mb-1 leading-[0.9375rem] md:leading-[1.5rem] ${
              section.isAppearanceLabel
                ? 'font-black text-[0.9375rem] md:text-[1.1875rem]'
                : 'font-bold text-[0.75rem] md:text-[1rem]'
            }`}
            style={{
              color: '#0A476D',
            }}
          >
            {section.label}
          </p>
          {Array.isArray(section.content) ? (
            <ul
              className="text-right list-disc list-outside pr-4 space-y-1 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
              style={{ color: '#FFFFFF' }}
              dir="rtl"
            >
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p
              className="text-right text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
              style={{ color: '#FFFFFF' }}
            >
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
