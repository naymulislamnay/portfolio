'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    const email = 'naymulislamnay@gmail.com';
    
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] translate-y-1/2"></div>
      
      {/* Profile Image Banner */}
      <div className="absolute top-20 right-10 hidden lg:block">
        <div className="relative w-32 h-32 opacity-30 hover:opacity-60 transition-all duration-500 group">
          <img 
            src="https://i.ibb.co.com/kTntb88/portfolio-banner-image.png"
            alt="MD. Naymul Islam"
            className="w-full h-full object-cover rounded-2xl border-2 border-white/20 group-hover:border-purple-500/50 transition-colors duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-orange-600/20 rounded-2xl group-hover:from-purple-600/30 group-hover:to-orange-600/30 transition-all duration-500"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
        </div>
      </div>
      
      <div className="text-center z-10 px-4 max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-8">
          <span className="bg-purple-600 text-[10px] font-bold px-1.5 py-0.5 rounded text-white uppercase tracking-wider">MERN</span>
          <span className="text-xs text-gray-400">Stack Developer</span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Frontend <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">X</span> MERN
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 font-light max-w-2xl mx-auto">
          Hello, I&apos;m <span className="text-white font-medium">MD. Naymul Islam</span> — a MERN Stack Developer specializing in modern web applications
        </p>
        
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-20">
          <a className="group relative px-2 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all flex items-center space-x-2 overflow-hidden cursor-hover" href="#contact">
            <span className="relative z-10 text-[10px] font-medium">Let&apos;s Connect</span>
            <span className="bg-white text-black rounded-full w-4 h-4 flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
              <i className="fas fa-arrow-right text-xs"></i>
            </span>
          </a>
          
          <div className="relative">
            <button 
              onClick={handleEmailCopy}
              className="text-[10px] text-gray-400 hover:text-white flex items-center space-x-2 transition-colors group cursor-hover"
            >
              <i className="far fa-copy group-hover:scale-110 transition-transform"></i>
              <span>naymulislamnay@gmail.com</span>
            </button>
            
            {emailCopied && (
              <div className="absolute -top-10 w-[100px] left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded-full animate-fade-in-out">
                Email copied!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}