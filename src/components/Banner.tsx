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
    <div className="flex flex-col lg:flex-row px-10 pt-20">
      <div className="container px-0 lg:px-50 lg:pt-55 mx-auto z-4">
        <div className="relative w-full md:h-70 flex overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-700"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0 flex justify-center items-center"
                style={{
                  transform: `rotate(-10deg)`, // Slight left rotation for a Polaroid feel
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  padding: "20px",
                  border: "10px solid white", // White border around the photo
                }}
              >
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Left and Right Arrows */}
          <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
            <button
              onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slideCount) % slideCount)}
              className="bg-white opacity-85 rounded-full px-2 py-2 shadow-md hover:bg-gray-200"
            >
              <span className="text-xl text-gray-700">&#8592;</span> {/* Left Arrow */}
            </button>
          </div>

          <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
            <button
              onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount)}
              className="bg-white opacity-85 rounded-full px-2 py-2 shadow-md hover:bg-gray-200"
            >
              <span className="text-xl text-gray-700">&#8594;</span> {/* Right Arrow */}
            </button>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Banner;
