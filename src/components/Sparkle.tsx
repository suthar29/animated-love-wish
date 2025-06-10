
import React from 'react';

interface SparkleProps {
  top: string;
  left: string;
  delay: string;
}

const Sparkle: React.FC<SparkleProps> = ({ top, left, delay }) => {
  return (
    <div
      className={`fixed ${top} ${left} animate-sparkle pointer-events-none`}
      style={{ animationDelay: delay }}
    >
      <div className="text-accent text-2xl">✨</div>
    </div>
  );
};

export default Sparkle;
