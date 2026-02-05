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
      <h3
        className="text-right font-black mb-6 text-[0.9375rem] md:text-[1.1875rem] leading-[1rem] md:leading-[1.5rem]"
        style={{ color: '#0A476D' }}
      >
        {title}
      </h3>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className={index > 0 ? 'mt-3' : ''}>
          <p
            className="text-right font-bold mb-2 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
            style={{ color: '#79BF98' }}
          >
            {section.label}
          </p>
          <ul
            className="text-right list-disc list-outside pr-4 space-y-2 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
            style={{ color: '#5B4B43' }}
            dir="rtl"
          >
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
