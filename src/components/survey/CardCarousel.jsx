import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CardCarousel({ children }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      // Check if we can scroll left (not at the far left/end)
      const canLeft = Math.abs(scrollLeft) < Math.abs(maxScrollLeft) - 5;
      setCanScrollLeft(canLeft);

      // Check if we can scroll right (not at the start/beginning)
      const canRight = Math.abs(scrollLeft) > 5;
      setCanScrollRight(canRight);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        ref.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [children]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {/* Desktop arrows */}
      <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10" style={{ left: '-40px' }}>
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="p-2"
        >
          <ChevronLeft
            className="w-8 h-8"
            style={{ color: canScrollLeft ? '#5B4B43' : 'rgba(91, 75, 67, 0.2)' }}
          />
        </button>
      </div>
      <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10" style={{ right: '-40px' }}>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="p-2"
        >
          <ChevronRight
            className="w-8 h-8"
            style={{ color: canScrollRight ? '#5B4B43' : 'rgba(91, 75, 67, 0.2)' }}
          />
        </button>
      </div>

      {/* Scrollable container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ 
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {React.Children.map(children, (child) => (
          <div 
            className="flex-shrink-0 flex items-stretch"
            style={{ scrollSnapAlign: 'start', width: '340px', minHeight: '283px' }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}