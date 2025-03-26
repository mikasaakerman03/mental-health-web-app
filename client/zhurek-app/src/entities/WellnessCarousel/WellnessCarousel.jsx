import React, { useState, useEffect, useRef } from 'react';

import wellness1 from '../../shared/assets/images/wellness1.jpg';
import wellness2 from '../../shared/assets/images/wellness2.jpg';
import wellness3 from '../../shared/assets/images/wellness3.jpg';
import wellness4 from '../../shared/assets/images/wellness4.jpg';


const images = [wellness1, wellness2, wellness3, wellness4];

export const WellnessCarousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-6 py-12">
      <div className="overflow-hidden rounded-[30px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className="w-full flex-shrink-0 object-cover h-[450px] rounded-[30px]"
            />
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-4 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-16 h-1 rounded-full transition-all duration-300 ${i === index ? 'bg-[#4F3422]' : 'bg-gray-300'
              }`}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-[50%] -left-10">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-gray-100 text-xl flex items-center justify-center hover:bg-gray-200"
        >
          ‹
        </button>
      </div>
      <div className="absolute bottom-[50%] -right-10">
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-gray-100 text-xl flex items-center justify-center hover:bg-gray-200"
        >
          ›
        </button>
      </div>
    </div>
  );
};
