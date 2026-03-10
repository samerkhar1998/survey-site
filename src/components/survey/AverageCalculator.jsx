import React, { useState } from "react";
import PolygonIcon from "../../assets/Polygon 1.svg";

export default function AverageCalculator({ answers }) {
  const [showAverage, setShowAverage] = useState(false);

  const calculateAverage = () => {
    const validAnswers = Object.values(answers).filter(v => v !== null);
    if (validAnswers.length === 0) return 0;
    return validAnswers.reduce((a, b) => a + b, 0) / validAnswers.length;
  };

  const average = calculateAverage();

  const scaleColors = [
    { value: 1, color: '#B1937E', fontSize: '0.5rem',label: 'לא מודע' },
    { value: 2, color: 'rgba(0, 160, 191, 0.6)', fontSize: '0.5rem', label: 'מודע' },
    { value: 3, color: '#00A0BF', fontSize: '0.5rem', label: 'יוזמה ממוקדת' },
    { value: 4, color: '#A8D1BA', fontSize: '0.5rem', label: 'אינטגרציה' },
    { value: 5, color: '#79BF98', fontSize: '0.5rem', label: 'קיימות' },
  ];

  // Calculate polygon position (percentage)
  const getPolygonPosition = () => {
    if (average === 0) return 50;
    // Map 1-5 across the center of each of the 5 color bars.
    // Using 10%..90% keeps the indicator centered inside the track (works regardless of track width).
    return 10 + ((average - 1) / 4) * 80;
  };

  return (
    <div 
      className="w-full p-4 md:px-4 md:pt-[2.7rem] md:pb-[2.5rem]"
      style={{ backgroundColor: 'rgba(91, 75, 67, 0.1)' }}
    >
      {/* Calculate button */}
      <div className="flex justify-center mb-4 md:mb-6">
        <button
          onClick={() => setShowAverage(true)}
          className="flex items-center justify-center font-normal rounded text-[0.625rem] md:text-[1rem] w-[7.5rem] h-[1.7875rem] md:h-[2.3rem]"
          style={{ 
            backgroundColor: '#0A476D', 
            color: '#FFFFFF',
          }}
        >
          חשב ממוצע
        </button>
      </div>

      {/* Average scale - always visible */}
      <div className="relative">
        {/* Numbers - above polygon */}
        <div className="flex justify-center" style={{ direction: 'ltr' }}>
          {scaleColors.map((item) => (
            <div
              key={item.value}
              className="text-center font-normal text-[0.625rem] md:text-[1rem] w-[3.375rem] md:w-[4.375rem]"
              style={{ 
                color: '#797979',
              }}
            >
              {item.value}
            </div>
          ))}
        </div>

        {/* Polygon indicator - between numbers and colors */}
        {showAverage && (
          <div className="flex justify-center" style={{ direction: 'ltr' }}>
            <div className="relative h-[0.325rem] w-[16.875rem] md:w-[21.875rem]">
              <img
                src={PolygonIcon}
                alt="indicator"
                className="absolute transform -translate-x-1/2"
                style={{ left: `${getPolygonPosition()}%`, width: '0.75rem', height: '0.625rem' }}
              />
            </div>
          </div>
        )}

        {/* Color bars - attached */}
        <div className="flex justify-center" style={{ direction: 'ltr' }}>
          {scaleColors.map((item) => (
            <div
              key={item.value}
              className="h-[0.375rem] w-[3.375rem] md:w-[4.375rem]"
              style={{ 
                backgroundColor: item.color,
              }}
            />
          ))}
        </div>

        {/* Labels - below color bars */}
        <div className="flex justify-center mt-1" style={{ direction: 'ltr' }}>
          {scaleColors.map((item) => (
            <div
              key={item.value}
              className="text-center text-[0.75rem] md:text-[1rem] w-[3.375rem] md:w-[4.375rem]"
              style={{ 
                color: '#0A476D',
              }}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Average value display - only shows after clicking */}
        {showAverage && (
          <div className="text-center mt-1">
            <span className="font-bold text-[0.75rem] md:text-[1rem]" style={{ color: '#0A476D' }}>
              ממוצע: {average.toFixed(1)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
