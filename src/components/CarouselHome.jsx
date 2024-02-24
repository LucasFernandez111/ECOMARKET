import React, { useRef } from "react";
import { useState } from "react";

const corousel = [1, 2, 3, 4, 2, 3, 4, 5];

const ITEM_WIDTH = 300;

const CarouselHome = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;

    setScrollPosition(newScrollPosition);

    console.log(containerRef.current.scrollRigth);

    containerRef.current.scrollLeft = newScrollPosition;
  };
  return (
    <div className="flex gap-4 flex-col justify-center items-center w-screen h-screen">
      <div
        ref={containerRef}
        style={{
          width: "900px",
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <div className="flex gap-4 items-center justify-center  w-[1000px]">
          {corousel.map((item) => {
            return (
              <div className="h-32 w-[300px] bg-gray-600 text-white">
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-5">
        <button
          onClick={() => handleScroll(-ITEM_WIDTH)}
          className="bg-gray-500"
        >
          left
        </button>
        <button
          onClick={() => handleScroll(ITEM_WIDTH)}
          className="bg-gray-500"
        >
          right
        </button>
      </div>
    </div>
  );
};

export default CarouselHome;
