import React from "react";
import ScrollCard from "../components/ScrollCard";
'use client';




import { Carousel } from 'flowbite-react';

 export default function Component() {
  return (
    <div className="h-96 w-46 pt-4  ">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <ScrollCard></ScrollCard>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}