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
      <h3
        className="text-right font-black text-[0.9375rem] md:text-[1.1875rem] leading-[1rem] md:leading-[1.5rem]"
        style={{ color: '#0A476D' }}
      >
        {title}
      </h3>
      
      {subtitle && (
        <p
          className="text-right mt-1 font-bold text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
          style={{ color: '#0A476D' }}
        >
          {subtitle}
        </p>
      )}

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="mt-3">
          <p
            className="text-right font-bold text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
            style={{ color: '#79BF98' }}
          >
            {section.label}
          </p>
          {Array.isArray(section.content) ? (
            <ul
              className="text-right list-disc list-outside pr-4 mt-1 font-bold text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
              style={{ color: '#5B4B43' }}
              dir="rtl"
            >
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p
              className="text-right mt-1 font-normal text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
              style={{ color: '#5B4B43' }}
            >
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
