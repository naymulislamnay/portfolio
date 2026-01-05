'use client';

import { useState } from 'react';
import { downloadResume } from '@/utils/downloadResume';

export default function AboutSection() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    
    try {
      await downloadResume();
      // Add a small delay to show the loading state
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative mb-20 text-center">
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-9xl font-bold text-stroke opacity-10 whitespace-nowrap select-none pointer-events-none font-display">
            ABOUT ME
          </h2>
          <h2 className="relative text-3xl md:text-4xl font-bold font-display">About Me</h2>
          <div className="w-1 h-1 bg-purple-500 rounded-full mx-auto mt-4 mb-2"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">More About Me</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-purple-600 rounded-full blur-[60px] opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-b from-purple-900/30 to-black rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
                <img 
                  alt="MD. Naymul Islam - MERN Stack Developer" 
                  className="w-full h-full object-cover rounded-full"
                  src="https://i.ibb.co.com/kTntb88/portfolio-banner-image.png"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-center">
                    <span className="text-6xl mb-2 block">👨‍💻</span>
                    <span className="text-sm text-gray-400">MD. Naymul Islam</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-0 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-lg transform rotate-6 hover:rotate-0 transition-transform cursor-default">
                MERN Stack
              </div>
              <div className="absolute bottom-8 left-0 bg-orange-600 text-white text-xs px-3 py-1 rounded-full shadow-lg transform -rotate-6 hover:rotate-0 transition-transform cursor-default">
                Frontend Dev
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Hey! I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">NAYMUL</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              I&apos;m MD. Naymul Islam, a Frontend Developer and MERN Stack specialist with 3+ years of experience. I create modern, scalable web applications using MongoDB, Express.js, React, Node.js, and Next.js with TypeScript.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              I&apos;m passionate about building user-centric applications with clean code and modern technologies. Currently expanding my expertise in cloud technologies and DevOps practices. Open to exciting full-time and freelance opportunities.
            </p>
            
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold text-white">What I Do</h4>
              <div className="flex flex-wrap gap-15 ml-6">
                <span className="inline-flex items-center space-x-2 px-2 py-1 bg-white/5 rounded-lg text-[8px] text-gray-300 border border-white/5 hover:border-purple-500/30 transition-colors cursor-hover">
                  <i className="fas fa-laptop-code text-purple-400"></i>
                  <span>Frontend Development</span>
                </span>
                <span className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/5 rounded-lg text-[8px] text-gray-300 border border-white/5 hover:border-purple-500/30 transition-colors cursor-hover">
                  <i className="fas fa-server text-orange-400"></i>
                  <span>MERN Stack</span>
                </span>
              </div>
            </div>
            
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold text-white">Connect With Me</h4>
              <div className="flex items-center space-x-4">
                <a className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 cursor-hover" href="https://github.com/naymulislamnay" target="_blank" rel="noopener noreferrer">
                  <i className="fab text-[10px] fa-github"></i>
                </a>
                <a className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 cursor-hover" href="https://bd.linkedin.com/in/naymulislamnay" target="_blank" rel="noopener noreferrer">
                  <i className="fab text-[10px] fa-linkedin-in"></i>
                </a>
                <a className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 cursor-hover" href="https://www.facebook.com/share/17f6wW3ThL" target="_blank" rel="noopener noreferrer">
                  <i className="fab text-[10px] fa-facebook-f"></i>
                </a>
                <a className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 cursor-hover" href="mailto:naymulislamnay@gmail.com">
                  <i className="fas text-[10px] fa-envelope"></i>
                </a>
                <a className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 cursor-hover" href="https://wa.me/8801731150713" target="_blank" rel="noopener noreferrer">
                  <i className="fab text-[10px] fa-whatsapp"></i>
                </a>
              </div>
            </div>
            
            <div className="pt-4">
              <button 
                onClick={handleResumeDownload}
                disabled={isDownloading}
                className={`inline-flex items-center text-white px-2 py-1 ml-6 rounded-full text-[10px] font-medium transition-all transform group cursor-hover ${
                  isDownloading 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-orange-500 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1'
                }`}
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <i className="fas fa-download mr-2 group-hover:animate-bounce"></i>
                    Download Resume
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}