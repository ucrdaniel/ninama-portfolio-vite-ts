import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      setScrollProgress(progress);
    };

    // Initial calculation
    updateScrollProgress();

    // Use requestAnimationFrame for smooth updates
    let rafId: number;
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateScrollProgress);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-1.5 bg-bg z-[60]"
      style={{ 
        transform: 'translateZ(0)', // Force hardware acceleration
        willChange: 'transform'
      }}
    >
      <div 
        className="h-full bg-accent origin-left transition-transform duration-150 ease-out"
        style={{ 
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: 'left'
        }}
      />
    </div>
  );
}
