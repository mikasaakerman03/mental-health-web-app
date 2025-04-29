import React, { useRef, useState, useEffect } from 'react';

import { HealthJournalCard } from '../../entities/HealthJournal/HealthJournal';
import { AiChatbotCard } from '../../entities/AIChatbotCard/AiChatbotCard';
import { MeditateCard } from '../../entities/MeditateCard/MeditateCard';
import { AIRecsCard } from '../../entities/AIRecommendationsCard/AIRecsCard';
import { ZhurekCard } from '../../entities/ZhurekCard/ZhurekCard';
import './styles.css';

export const MentalWidgetsCarousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 170;

  const cards = [
    <ZhurekCard />,
    <HealthJournalCard />,
    <AiChatbotCard />,
    <AIRecsCard />,
    <MeditateCard />,
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  // Обновляем активную точку при скролле
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const ref = carouselRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      return () => ref.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Кнопки */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#a17354] text-white p-2 rounded-full z-10"
      >
        &#8592;
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#a17354] text-white p-2 rounded-full z-10"
      >
        &#8594;
      </button>

      {/* Карусель */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-6 px-10 snap-x snap-mandatory"
      >
        {cards.map((card, index) => (
          <div key={index} className="min-w-[150px] snap-start">
            {card}
          </div>
        ))}
      </div>

      {/* Точки */}
      <div className="flex justify-center mt-4 gap-2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-[#a17354]' : 'bg-gray-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
};
