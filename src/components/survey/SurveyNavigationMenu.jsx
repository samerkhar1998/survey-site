import React, { useState } from "react";

export default function SurveyNavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "intro", label: "מקדמה", bold: true },
    { id: "section1", label: "פרק 1" },
    { id: "section2", label: "פרק 2" },
    { id: "section3", label: "פרק 3" },
    { id: "section4", label: "פרק 4" },
    { id: "section5", label: "פרק 5" },
    { id: "section6", label: "פרק 6" },
    { id: "summary", label: "סיכום" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu popup */}
      {isOpen && (
        <div 
          className="fixed bottom-32 right-6 bg-white shadow-2xl rounded-lg overflow-hidden z-50"
          style={{ width: '350px', maxHeight: '70vh', overflowY: 'auto' }}
        >
          {menuItems.map((item, index) => (
            <div key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="w-full px-6 py-4 text-right hover:bg-gray-50 transition-colors"
                style={{ 
                  color: '#0A476D',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'normal',
                  fontSize: '16px'
                }}
              >
                {item.label}
              </button>
              {index < menuItems.length - 1 && (
                <div className="border-b border-gray-200" />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-20 h-20 rounded-full shadow-2xl flex items-center justify-center z-50 transition-all hover:scale-105"
        style={{
          backgroundColor: isOpen ? '#0A476D' : '#FFFFFF',
          color: isOpen ? '#FFFFFF' : '#0A476D'
        }}
      >
        <span className="text-lg font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>
          תפריט
        </span>
      </button>
    </>
  );
}