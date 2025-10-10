'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-sky-50 via-white to-cyan-50 flex items-center justify-center overflow-hidden">
      {/* Mountain silhouette overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cyan-700/10 to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-float-slow" />
      <div className="absolute top-40 right-1/3 w-3 h-3 bg-cyan-500/20 rounded-full animate-float-medium" />
      <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-cyan-600/30 rounded-full animate-float-fast" />

      <div className="relative text-center space-y-10 px-8">
        {/* Logo */}
        <div className="space-y-4">
          <div className="inline-block relative">
            {/* Decorative element */}
            
            <h1 className="text-6xl font-serif text-cyan-900 mb leading-relaxed-1">
              Nepal
            </h1>
            <br />
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-px w-8 bg-cyan-700" />
              <span className="text-xl font-light text-cyan-700 tracking-[0.3em]">
                MEMORABLE
              </span>
              <div className="h-px w-8 bg-cyan-700" />
            </div>
            <p className="text-sm text-cyan-600/70 font-light italic">
              Discover the Himalayas
            </p>
          </div>
        </div>

        {/* Elegant spinner */}
        <div className="flex justify-center py-4">
          <div className="relative w-16 h-16">
            {/* Outer ring */}
            <div className="absolute inset-0 border-[3px] border-cyan-200 rounded-full" />
            {/* Spinning arc */}
            <div className="absolute inset-0 border-[3px] border-transparent border-t-cyan-700 border-r-cyan-700 rounded-full animate-spin" 
              style={{ animationDuration: '1.5s' }}
            />
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-700 rounded-full" />
          </div>
        </div>

        {/* Progress */}
        <div className="w-72 max-w-full mx-auto space-y-3">
          <div className="h-1 bg-cyan-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-cyan-700/60 text-sm font-light">
            Preparing your journey...
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.5;
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-25px);
            opacity: 0.7;
          }
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}