import React from "react";

export default function CulturalEventCard({ title, subtitle, purpose, responsibleParties, notes }) {
  return (
    <div 
      className="p-6 rounded-lg shadow-md flex-shrink-0"
      style={{
        backgroundColor: 'rgba(121, 191, 152, 0.1)',
        width: '340px',
        minHeight: '283px',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {/* Title */}
      <h3 className="text-right text-lg font-black mb-4" style={{ color: '#0A476D', fontSize:'0.75rem', lineHeight:'0.9375rem', fontWeight:'900' }}>
        {title}
      </h3>

      {/* Subtitle (if exists) */}
      {subtitle && (
        <p className="text-right text-sm mb-4" style={{ color: '#0A476D',fontSize:'0.75rem', lineHeight:'0.9375rem', fontWeight:'700' }}>
          {subtitle}
        </p>
      )}

      {/* Purpose (מטרה) */}
      {purpose && (
        <div className="mt-4">
          <p className="text-right font-bold mb-1" style={{ color: '#79BF98', fontSize:'0.75rem', lineHeight:'0.9375rem', fontWeight:'700' }}>
            מטרה:
          </p>
          {Array.isArray(purpose) ? (
            <ul className="text-right text-sm list-disc list-inside space-y-1" style={{ color: '#5B4B43',fontSize:'0.75rem', lineHeight:'0.9375rem', fontWeight:'400'  }} dir="rtl">
              {purpose.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-right text-sm" style={{ color: '#5B4B43', fontSize:'0.75rem', lineHeight:'0.9375rem', fontWeight:'400'  }}>
              {purpose}
            </p>
          )}
        </div>
      )}

      {/* Responsible Parties (גורמים אחראים לביצוע) */}
      {responsibleParties && (
        <div className="mt-4">
          <p className="text-right font-bold mb-1" style={{ color: '#79BF98', fontSize:'0.75rem', lineHeight:'0.9375rem', fontWeight:'700'  }}>
            גורמים אחראים לביצוע:
          </p>
          {Array.isArray(responsibleParties) ? (
            <ul className="text-right text-sm list-disc list-inside space-y-1" style={{ color: '#5B4B43',fontSize:'0.75rem', lineHeight:'0.9375rem', fontWeight:'400'  }} dir="rtl">
              {responsibleParties.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-right text-sm" style={{ color: '#5B4B43' }}>
              {responsibleParties}
            </p>
          )}
        </div>
      )}

      {/* Notes (דגשים תרבותיים והערות) */}
      {notes && (
        <div className="mt-4">
          <p className="text-right font-bold mb-1" style={{ color: '#79BF98', fontSize:'0.75rem', lineHeight:'0.9375rem', fontWeight:'700'  }}>
            דגשים תרבותיים והערות:
          </p>
          {Array.isArray(notes) ? (
            <ul className="text-right text-sm list-disc list-inside space-y-1" style={{ color: '#5B4B43' }} dir="rtl">
              {notes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-right text-sm" style={{ color: '#5B4B43',fontSize:'0.75rem', lineHeight:'0.9375rem', fontWeight:'400'  }}>
              {notes}
            </p>
          )}
        </div>
      )}
    </div>
  );
}