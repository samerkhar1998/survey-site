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
    { value: 1, color: '#B1937E', fontSize: '0.5rem',label: 'לא בשל כלל' },
    { value: 2, color: 'rgba(0, 160, 191, 0.6)', fontSize: '0.5rem', label: 'לא בשל' },
    { value: 3, color: '#00A0BF', fontSize: '0.5rem', label: 'בשל בינוני' },
    { value: 4, color: '#A8D1BA', fontSize: '0.5rem', label: 'בשל' },
    { value: 5, color: '#79BF98', fontSize: '0.5rem', label: 'בשל מאד' },
  ];

  // Calculate polygon position (percentage)
  const getPolygonPosition = () => {
    if (average === 0) return 50;
    // Map 1-5 to percentage across the 5 color bars (270px total width)
    const percentage = ((average - 1) / 4) * 100;
    return percentage;
  };

  return (
    <div 
      className="w-full p-4"
      style={{ backgroundColor: 'rgba(91, 75, 67, 0.1)' }}
    >
      {/* Calculate button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowAverage(true)}
          className="flex items-center justify-center font-normal rounded"
          style={{ 
            backgroundColor: '#0A476D', 
            color: '#FFFFFF',
            width: '7.5rem',
            height: '1.7875rem',
            fontSize: '0.625rem'
          }}
        >
          חשב ממוצע
        </button>
      </div>

      {/* Average scale - always visible */}
      <div className="relative">
        {/* Numbers - above polygon */}
        <div className="flex justify-center mb-1" style={{ direction: 'ltr' }}>
          {scaleColors.map((item) => (
            <div
              key={item.value}
              className="text-center font-normal"
              style={{ 
                color: '#797979',
                width: '3.375rem',
                fontSize: '0.625rem'
              }}
            >
              {item.value}
            </div>
          ))}
        </div>

        {/* Polygon indicator - between numbers and colors */}
        {showAverage && (
          <div 
            className="flex justify-center relative"
            style={{ direction: 'ltr' }}
          >
            <div style={{ width: '270px' }} className="relative" style={{ width: '0.75rem', height: '0.625rem' }}>
              <img
                src={PolygonIcon}
                alt="indicator"
                className="absolute transform -translate-x-1/2"
                style={{ left: `${getPolygonPosition()}%`, width: '12px', height: '10px' }}
              />
            </div>
          </div>
        )}

        {/* Color bars - attached */}
        <div className="flex justify-center" style={{ direction: 'ltr' }}>
          {scaleColors.map((item) => (
            <div
              key={item.value}
              style={{ 
                backgroundColor: item.color,
                width: '3.375rem',
                height: '0.375rem'
              }}
            />
          ))}
        </div>

        {/* Labels - below color bars */}
        <div className="flex justify-center mt-1" style={{ direction: 'ltr' }}>
          {scaleColors.map((item) => (
            <div
              key={item.value}
              className="text-center text-xs"
              style={{ 
                color: '#0A476D',
                width: '54px'
              }}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Average value display - only shows after clicking */}
        {showAverage && (
          <div className="text-center mt-1">
            <span className="font-bold" style={{ color: '#0A476D', fontSize: '0.75rem' }}>
              ממוצע: {average.toFixed(1)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
