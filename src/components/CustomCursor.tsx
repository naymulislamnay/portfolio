'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnterHover = () => setCursorVariant('hover');
    const mouseLeaveHover = () => setCursorVariant('default');

    if (!isMobile) {
      // Add event listeners only on desktop
      window.addEventListener('mousemove', mouseMove);

      // Add hover effects to interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-hover');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', mouseEnterHover);
        el.addEventListener('mouseleave', mouseLeaveHover);
      });

      return () => {
        window.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('resize', checkMobile);
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', mouseEnterHover);
          el.removeEventListener('mouseleave', mouseLeaveHover);
        });
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      scale: 1.5,
    }
  };

  const followerVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.2,
    }
  };

  return (
    <>
      <div
        className={`cursor ${cursorVariant === 'hover' ? 'cursor-hover' : ''}`}
        style={{
          left: `${variants[cursorVariant as keyof typeof variants].x}px`,
          top: `${variants[cursorVariant as keyof typeof variants].y}px`,
          transform: `scale(${variants[cursorVariant as keyof typeof variants].scale})`,
        }}
      />
      <div
        className={`cursor-follower ${cursorVariant === 'hover' ? 'cursor-follower-hover' : ''}`}
        style={{
          left: `${followerVariants[cursorVariant as keyof typeof followerVariants].x}px`,
          top: `${followerVariants[cursorVariant as keyof typeof followerVariants].y}px`,
          transform: `scale(${followerVariants[cursorVariant as keyof typeof followerVariants].scale})`,
        }}
      />
    </>
  );
}