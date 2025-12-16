import React from "react";

export default function QuestionSectionHeader({ title }) {
  return (
    <div 
      className="w-full flex items-center justify-right"
      style={{ 
                    backgroundColor: '#0A476D',
                    height: '30px',
                    width: '100%',
                  
                  }}
    >
      <span className="text-sm font-bold" style={{ color: '#FFFFFF',fontSize:'0.75rem', marginRight:'25px' }}>
        {title}
      </span>
    </div>
  );
}