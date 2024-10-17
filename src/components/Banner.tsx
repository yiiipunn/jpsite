"use client";

import React, { useEffect, useState } from "react";
import About from "./About";
import Image from "next/image";

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
    "/slide4.jpg",
    "/slide5.jpg",
    "/slide6.jpg",
  ];

  const slideCount = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="flex flex-col lg:flex-row px-10 pt-20  ">
      <div className="container px-0 lg:px-50 lg:pt-55 mx-auto z-4">
        <div className=" relative w-85 md:h-70 flex overflow-hidden ">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 ">
                <Image
                  src={image}
                  width ={100}
                  height = {100}
                  alt={`Slide ${index + 1}`}
                  className="flex w-full h-full object-cover "
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-1 h-1 rounded-lg md:w-2 md:h-2  opacity-80 ${
                  currentSlide === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
    
      </div>
      <About />
    </div>
  );
};

export default Banner;
