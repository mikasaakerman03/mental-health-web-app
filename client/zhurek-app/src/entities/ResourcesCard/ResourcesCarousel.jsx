import React, { useRef, useState, useEffect } from 'react';
import { ResourceCard } from './ResourcesCard';

export const ResourceCarousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const resources = [
    {
      title: 'Will meditation help you get out from the rat race?',
      category: 'Mental Health',
      views: '5,241',
      likes: '987',
      comments: '22',
      link: '/resources/meditation'
    },
    {
      title: 'How to build healthy habits',
      category: 'Personal Growth',
      views: '3,400',
      likes: '750',
      comments: '12',
      link: '/resources/habits'
    },
    {
      title: 'The power of gratitude',
      category: 'Mindfulness',
      views: '4,800',
      likes: '870',
      comments: '18',
      link: '/resources/gratitude'
    }
  ];

  const cardWidth = 240; // ширина карточки + отступы

  // const scrollLeft = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  //   }
  // };

  // const scrollRight = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  //   }
  // };

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
    <div className="relative w-full">
      {/* Карусель */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-6 px-6 snap-x snap-mandatory"
      >
        {resources.map((resource, idx) => (
          <div key={idx} className="snap-start flex-shrink-0">
            <ResourceCard {...resource} />
          </div>
        ))}
      </div>

      {/* Точки */}
      <div className="flex justify-center mt-4 gap-2">
        {resources.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-[#5A3E2B]' : 'bg-gray-300'
              }`}
          />
        ))}
      </div>

      {/* Стрелки можно добавить по желанию */}
      {/* 
      <button onClick={scrollLeft} className="absolute left-2 top-1/2 -translate-y-1/2">←</button>
      <button onClick={scrollRight} className="absolute right-2 top-1/2 -translate-y-1/2">→</button>
      */}
    </div>
  );
};
