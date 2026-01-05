'use client';

import { useState, useEffect } from 'react';

export default function StatsSection() {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    technologies: 0,
    clients: 0
  });

  const finalValues = {
    projects: 6,
    experience: 2,
    technologies: 15,
    clients: 10
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    const intervals: NodeJS.Timeout[] = [];

    Object.keys(finalValues).forEach(key => {
      const finalValue = finalValues[key as keyof typeof finalValues];
      const increment = finalValue / steps;
      let currentValue = 0;

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(interval);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);

      intervals.push(interval);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const stats = [
    {
      icon: "fas fa-code",
      value: counters.projects,
      suffix: "+",
      label: "Projects Completed",
      color: "text-purple-400"
    },
    {
      icon: "fas fa-calendar-alt",
      value: counters.experience,
      suffix: "+",
      label: "Years Experience",
      color: "text-blue-400"
    },
    {
      icon: "fas fa-tools",
      value: counters.technologies,
      suffix: "+",
      label: "Technologies",
      color: "text-green-400"
    },
    {
      icon: "fas fa-users",
      value: counters.clients,
      suffix: "+",
      label: "Happy Clients",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-16 bg-surface-dark/20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors duration-300 cursor-hover`}>
                  <i className={`${stat.icon} text-2xl ${stat.color}`}></i>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-bold text-white stats-counter">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}