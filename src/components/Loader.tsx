'use client';

import { useState, useEffect } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState('Initializing');

  const loadingSteps = [
    'Initializing',
    'Loading assets',
    'Preparing components',
    'Setting up animations',
    'Almost ready',
    'Welcome!'
  ];

  useEffect(() => {
    let stepIndex = 0;
    
    // Update loading text based on progress
    const textInterval = setInterval(() => {
      if (stepIndex < loadingSteps.length - 1) {
        setLoadingText(loadingSteps[stepIndex]);
        stepIndex++;
      }
    }, 500);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setLoadingText('Welcome!');
          // Hide loader after completion
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        // Faster progress at the beginning, slower at the end
        const increment = prev < 50 ? Math.random() * 20 : Math.random() * 8;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-all duration-700 ${progress >= 100 ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo/Name */}
        <div className="mb-8">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 animate-pulse">
              NAYMUL
            </span>
          </h1>
          <p className="text-gray-400 text-sm uppercase tracking-[0.3em] opacity-80">MERN Stack Developer</p>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="relative w-20 h-20 mx-auto mb-6">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
            
            {/* Animated Rings */}
            <div className="absolute inset-0 border-2 border-transparent border-t-purple-500 border-r-orange-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-2 border-transparent border-b-pink-500 border-l-blue-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            
            {/* Inner Dot */}
            <div className="absolute inset-6 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full animate-pulse"></div>
            
            {/* Progress Ring */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 80 80">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 36}`}
                strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
                className="transition-all duration-300 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-3">
            <span className="font-medium">{loadingText}</span>
            <span className="font-mono">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex items-center justify-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}