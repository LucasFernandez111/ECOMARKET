import React, { useState } from 'react';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  return (
    <div className="relative max-w-screen-md mx-auto overflow-hidden">
      <div className="flex w-full">
        <button onClick={goToPrevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center z-10">
          &#10094;
        </button>
        <button onClick={goToNextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center z-10">
          &#10095;
        </button>
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {children.map((child, index) => (
            <div key={index} className="flex-shrink-0 w-full">{child}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;