
import React from 'react';

interface QuoteCardProps {
  quote: string;
  isVisible: boolean;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, isVisible }) => {
  return (
    <div
      className={`transition-all duration-500 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-4 scale-95'
      }`}
    >
      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 shadow-xl">
        <p className="text-lg font-medium text-center text-card-foreground italic">
          "{quote}"
        </p>
        <div className="flex justify-center mt-4">
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
