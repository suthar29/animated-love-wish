
import React from 'react';

interface FloatingBalloonProps {
  color: string;
  delay: string;
  left: string;
}

const FloatingBalloon: React.FC<FloatingBalloonProps> = ({ color, delay, left }) => {
  return (
    <div
      className={`fixed ${left} animate-float-balloon`}
      style={{
        animationDelay: delay,
        animationDuration: `${8 + Math.random() * 4}s`
      }}
    >
      <div className="relative">
        {/* Balloon */}
        <div
          className={`w-12 h-16 rounded-full ${color} shadow-lg relative`}
          style={{
            background: `linear-gradient(135deg, ${color === 'bg-pink-400' ? '#f472b6, #ec4899' : 
                        color === 'bg-purple-400' ? '#c084fc, #a855f7' :
                        color === 'bg-yellow-400' ? '#facc15, #eab308' :
                        color === 'bg-blue-400' ? '#60a5fa, #3b82f6' :
                        '#fb7185, #f43f5e'})`
          }}
        >
          {/* Balloon highlight */}
          <div className="absolute top-2 left-2 w-3 h-4 bg-white/30 rounded-full"></div>
          
          {/* String */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBalloon;
