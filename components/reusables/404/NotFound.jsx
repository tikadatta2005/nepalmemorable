'use client';

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-cyan-900 via-cyan-800 to-cyan-700 flex items-center justify-center relative overflow-hidden px-4">
      
      {/* Floating elements */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400/50 rounded-full animate-float-slow" />
      <div className="absolute top-40 right-1/3 w-3 h-3 bg-cyan-300/40 rounded-full animate-float-medium" />
      <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-cyan-200/50 rounded-full animate-float-fast" />

      <div className="text-center space-y-8 max-w-xl w-full">
        {/* 404 Number */}
        <h1 className="text-8xl sm:text-9xl font-bold text-cyan-100">404</h1>
        
        {/* Not Found Message */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-serif text-cyan-100">Page Not Found</h2>
          <p className="text-cyan-200/80 text-sm sm:text-base font-light">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Go Back Button */}
        <Link 
          href="/" 
          className="inline-block mt-4 px-6 py-3 bg-cyan-100 text-cyan-900 font-medium rounded-lg shadow-lg hover:bg-cyan-200 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>

      {/* Subtle glowing effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cyan-800/20 to-transparent" />

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
