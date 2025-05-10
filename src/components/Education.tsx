"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Project from "./Project";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const timelineItems = [
  {
    icon: "💮",
    years: "2012 - 2017",
    title: "Assumption College Thonburi",
    level: "Primary School",
    details: [],
  },
  {
    icon: "💮💮",
    years: "2018 - 2023",
    title: "Satriwithaya School",
    level: "Elementary / High School",
    details: [
      "Sci-math Intensive English Program",
      <>
        President of{" "}
        <Link href="https://www.instagram.com/swav.club/" className="font-bold hover:text-sky-900 underline">
          SW Audio Visual & Education Club
        </Link>
      </>,
      <>
        Lead Guitarist of{" "}
        <Link href="https://www.instagram.com/multitaskingtheband/" className="font-bold hover:text-sky-900 underline">
          Multitaskingtheband
        </Link>
      </>,
    ],
  },
  {
    icon: "💮💮💮",
    years: "2024 - NOW",
    title: "King's Mongkut University Of Technology Thonburi",
    level: "University",
    details: ["Faculty of Engineering, Computer Engineering."],
  },
];

const generateRandomPosition = () => ({
  top: `${Math.random() * 80 + 5}%`,
  left: `${Math.random() * 90 + 5}%`,
  scale: Math.random() * 0.5 + 0.5,
});

const jellyfishCount = 10;

const Education = () => {
  const [jellyfishPositions, setJellyfishPositions] = useState(
    Array(jellyfishCount)
      .fill(null)
      .map(() => generateRandomPosition())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setJellyfishPositions(() =>
        Array(jellyfishCount)
          .fill(null)
          .map(() => generateRandomPosition())
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative z-0 flex flex-col items-center bg-gradient-to-b from-white to-sky-50 w-full overflow-hidden min-h-screen pt-24"
      id="Education"
    >
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-pink-100 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" />

      {jellyfishPositions.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none opacity-70"
          style={{
            top: pos.top,
            left: pos.left,
            transform: `scale(${pos.scale})`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            className="w-16 h-16 text-pink-400"
          >
            <path
              d="M32 2C20 2 10 12 10 24c0 4 1 8 3 11-2 1-3 3-3 5 0 4 3 7 7 7 3 0 5-2 6-4 1 2 3 4 6 4s5-2 6-4c1 2 3 4 6 4 4 0 7-3 7-7 0-2-1-4-3-5 2-3 3-7 3-11 0-12-10-22-22-22z"
              fill="currentColor"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      ))}

      <div className="w-full max-w-screen-xl px-4 sm:px-8 lg:px-20 py-20 z-10 relative">
        <h1 className="font-bold italic text-4xl text-sky-900 mb-16 text-center">
          Education
        </h1>

        <div className="relative border-l-4 border-gradient-to-b from-sky-700 via-sky-500 to-sky-300 ml-6 lg:ml-16">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-16 pl-8 lg:pl-14 group"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <motion.div
                className="absolute w-6 h-6 bg-pink-500 border-4 opacity-50 rounded-full left-[-18px] top-1 z-10 shadow-lg shadow-sky-500/50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              />

              <motion.div
                className="absolute left-[-48px] top-[-8px] text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              >
                {item.icon}
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white shadow-2xl rounded-3xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-sky-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-sky-900">{item.years}</span>
                </div>

                <h3 className="text-xl font-bold text-sky-900 mt-2">{item.title}</h3>
                <p className="italic text-gray-600">{item.level}</p>

                <ul className="mt-4 text-sm text-gray-800 space-y-1 list-disc list-inside">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Education;
