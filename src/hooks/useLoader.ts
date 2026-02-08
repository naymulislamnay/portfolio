'use client';

import { useState, useEffect } from 'react';

interface UseLoaderOptions {
  duration?: number;
  steps?: string[];
}

export function useLoader(options: UseLoaderOptions = {}) {
  const { duration = 3000, steps = ['Loading...'] } = options;
  
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const stepDuration = duration / steps.length;
    let stepIndex = 0;
    
    // Update steps
    const stepInterval = setInterval(() => {
      if (stepIndex < steps.length - 1) {
        stepIndex++;
        setCurrentStep(stepIndex);
      }
    }, stepDuration);

    // Update progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(stepInterval);
          setIsComplete(true);
          return 100;
        }
        return prev + (100 / (duration / 50)); // Update every 50ms
      });
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [duration, steps]);

  return {
    progress: Math.min(progress, 100),
    currentStep: steps[currentStep],
    isComplete
  };
}