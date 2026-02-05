import React from "react";

export default function CulturalEventCard({ title, subtitle, purpose, responsibleParties, notes }) {
  return (
    <div 
      className="p-6 rounded-lg shadow-md flex-shrink-0"
      style={{
        backgroundColor: 'rgba(121, 191, 152, 0.1)',
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

      {/* Subtitle (if exists) */}
      {subtitle && (
        <p
          className="text-right mb-4 font-bold text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
          style={{ color: '#0A476D' }}
        >
          {subtitle}
        </p>
      )}

      {/* Purpose (מטרה) */}
      {purpose && (
        <div className="mt-4">
          <p
            className="text-right font-bold mb-1 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
            style={{ color: '#79BF98' }}
          >
            מטרה:
          </p>
          {Array.isArray(purpose) ? (
            <ul
              className="text-right list-disc list-outside pr-4 space-y-1 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem] font-normal"
              style={{ color: '#5B4B43' }}
              dir="rtl"
            >
              {purpose.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p
              className="text-right font-normal text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
              style={{ color: '#5B4B43' }}
            >
              {purpose}
            </p>
          )}
        </div>
      )}

      {/* Responsible Parties (גורמים אחראים לביצוע) */}
      {responsibleParties && (
        <div className="mt-4">
          <p
            className="text-right font-bold mb-1 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
            style={{ color: '#79BF98' }}
          >
            גורמים אחראים לביצוע:
          </p>
          {Array.isArray(responsibleParties) ? (
            <ul
              className="text-right list-disc list-outside pr-4 space-y-1 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem] font-normal"
              style={{ color: '#5B4B43' }}
              dir="rtl"
            >
              {responsibleParties.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p
              className="text-right font-normal text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
              style={{ color: '#5B4B43' }}
            >
              {responsibleParties}
            </p>
          )}
        </div>
      )}

      {/* Notes (דגשים תרבותיים והערות) */}
      {notes && (
        <div className="mt-4">
          <p
            className="text-right font-bold mb-1 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
            style={{ color: '#79BF98' }}
          >
            דגשים תרבותיים והערות:
          </p>
          {Array.isArray(notes) ? (
            <ul
              className="text-right list-disc list-outside pr-4 space-y-1 text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem] font-normal"
              style={{ color: '#5B4B43' }}
              dir="rtl"
            >
              {notes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p
              className="text-right font-normal text-[0.75rem] md:text-[1rem] leading-[0.9375rem] md:leading-[1.5rem]"
              style={{ color: '#5B4B43' }}
            >
              {notes}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
