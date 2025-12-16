import React from "react";

export default function QuestionBlock({ questionNumber, questionText, selectedValue, onSelect }) {
  const handleClick = (value) => {
    if (selectedValue === value) {
      onSelect(null); // Undo selection
    } else {
      onSelect(value);
    }
  };

  return (
    <div 
      className="w-full p-4"
      style={{ backgroundColor: 'rgba(10, 71, 109, 0.05)' }}
    >
      {/* Question text */}
      <p className="text-right text-sm mb-4" style={{ color: '#0A476D', marginRight:'25px', fontSize: '0.75rem' }}>
        {questionNumber}. {questionText}
      </p>

      {/* Number buttons */}
      <div className="flex justify-center gap-3">
        {[1, 2, 3, 4, 5].map((num) => {
          const isSelected = selectedValue === num;
          
          return (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="w-10 h-10 flex items-center justify-center transition-colors duration-200 rounded text-sm font-normal"
              style={{
                backgroundColor: isSelected ? '#0A476D' : '#D9D9D9',
                color: isSelected ? '#FFFFFF' : '#0A476D',
                width: '3.375rem',
                height: '2.3125rem',
                gap: '0.625rem',
                fontSize: '0.75rem'
              }}
              onMouseEnter={(e) => {
                if (!isSelected && window.innerWidth >= 768) {
                  e.currentTarget.style.backgroundColor = '#0A476D';
                  e.currentTarget.style.color = '#000000';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = '#D9D9D9';
                  e.currentTarget.style.color = '#0A476D';
                }
              }}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
}