
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FloatingBalloon from '@/components/FloatingBalloon';
import Sparkle from '@/components/Sparkle';
import QuoteCard from '@/components/QuoteCard';

const Index = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [showQuote, setShowQuote] = useState(true);
  const [name, setName] = useState('Beautiful');

  const lovingQuotes = [
    "Every day with you feels like a celebration! 🎉",
    "You make my world brighter than a thousand birthday candles ✨",
    "Another year of your amazing existence - the world is so lucky! 💖",
    "You're not just a year older, you're a year more wonderful 🌟",
    "Happy birthday to the person who makes every day feel special! 🎂",
    "Your smile is the best gift I could ever receive 😊",
    "Here's to another year of adventures together! 🎈",
    "You're the sweetest thing in my life, sweeter than birthday cake! 🍰"
  ];

  const balloonColors = ['bg-pink-400', 'bg-purple-400', 'bg-yellow-400', 'bg-blue-400', 'bg-rose-400'];
  const balloonPositions = ['left-[5%]', 'left-[15%]', 'left-[25%]', 'left-[75%]', 'left-[85%]', 'left-[95%]'];

  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: `top-[${Math.random() * 80 + 10}%]`,
    left: `left-[${Math.random() * 90 + 5}%]`,
    delay: `${Math.random() * 3}s`
  }));

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value || 'Beautiful');
  };

  const changeQuote = () => {
    setShowQuote(false);
    setTimeout(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % lovingQuotes.length);
      setShowQuote(true);
    }, 250);
  };

  useEffect(() => {
    console.log('Birthday wish page loaded with love! 💕');
  }, []);

  return (
    <div className="min-h-screen gradient-birthday relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Balloons */}
      {balloonPositions.map((position, index) => (
        <FloatingBalloon
          key={index}
          color={balloonColors[index % balloonColors.length]}
          delay={`${index * 1.5}s`}
          left={position}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          top={sparkle.top}
          left={sparkle.left}
          delay={sparkle.delay}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Name Input */}
        <div className="mb-8 animate-fade-in-up">
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
            Enter her name to personalize:
          </label>
          <input
            id="name"
            type="text"
            value={name === 'Beautiful' ? '' : name}
            onChange={handleNameChange}
            placeholder="Enter her name"
            className="px-4 py-2 rounded-lg border border-border bg-background/50 backdrop-blur-sm text-center font-medium focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Main Birthday Message */}
        <div className="mb-12 animate-bounce-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-text-glow text-gradient">
            Happy Birthday
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent animate-float">
            {name}! 🎉
          </h2>
        </div>

        {/* Birthday Icons */}
        <div className="flex justify-center space-x-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>🎂</div>
          <div className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎈</div>
          <div className="text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>🎁</div>
          <div className="text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>🌟</div>
          <div className="text-4xl animate-bounce" style={{ animationDelay: '0.8s' }}>💖</div>
        </div>

        {/* Quote Section */}
        <div className="max-w-md mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <QuoteCard quote={lovingQuotes[currentQuoteIndex]} isVisible={showQuote} />
        </div>

        {/* Quote Change Button */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <Button
            onClick={changeQuote}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            💕 Another Sweet Message 💕
          </Button>
        </div>

        {/* Footer Message */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '2s' }}>
          <p className="text-lg font-medium text-foreground/80">
            Wishing you all the love and happiness in the world! 🌍💕
          </p>
        </div>
      </div>

      {/* Additional floating hearts */}
      <div className="fixed top-[20%] left-[10%] text-red-400 text-2xl animate-float" style={{ animationDelay: '1s' }}>💖</div>
      <div className="fixed top-[30%] right-[15%] text-pink-400 text-xl animate-float" style={{ animationDelay: '2s' }}>💕</div>
      <div className="fixed bottom-[25%] left-[20%] text-rose-400 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>💝</div>
      <div className="fixed bottom-[40%] right-[25%] text-red-300 text-2xl animate-float" style={{ animationDelay: '1.5s' }}>💗</div>
    </div>
  );
};

export default Index;
