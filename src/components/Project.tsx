"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "SWVICHAKARN'66 WEBSITE",
    description: "",
    imageUrl: "/apollo.jpg",
    link: "",
  },
  {
    title: "[YWC] Interview Checker System",
    description: "",
    imageUrl: "/ywc.png",
    link: "https://ywc-homework-eiei.vercel.app/",
  },
  {
    title: "THIS WEBSITE",
    description: "",
    imageUrl: "/jpsite.png",
    link: "https://yourproject.com/tutor-bot",
  },
  {
    title: "OSU! Beatmap Generator",
    description: "",
    imageUrl: "/osu.png",
    link: "https://github.com/yiiipunn/osu_beatmap_generator",
  },
  {
    title: "RogueGameCPP",
    description:
      "This project is a Rogue dungeon crawler game but we built with C++ and designed to enhance the classic Rogue gameplay by applying advanced data structures.",
    imageUrl: "/roguegame.png",
    link: "https://github.com/SupeemAFK/RogueGameCPP",
  },
  {
    title: "Queen97Gambit",
    description:
      "For those who play chess but never check mate to anyone. This game is going to help you to revenge them back!!!",
    imageUrl: "/queen.png",
    link: "https://yiiipunn.itch.io/queen97gambits",
  },
  {
    title: "Treasure Hunter Robot",
    description: "",
    imageUrl: "/expo.jpg",
    link: "https://cottony-hurricane-791.notion.site/ef1fd369c3d04d2f9350908608baf9c5?v=58c0c75635a24b638b07dba457420d79&pvs=4",
  },
];

export default function Project() {
  return (
    <section className="relative flex flex-col px-5 py-20 bg-gradient-to-tr from-pink-50 to-white w-screen overflow-hidden" id="Projects">
      {/* Sakura Animation Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="animate-sakura bg-repeat w-full h-full" style={{ backgroundImage: "url(/sakura-petal.png)" }}></div>
      </div>

      <motion.h2 
        className="text-4xl font-extrabold text-sky-900 mb-16 text-center drop-shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🌸 My Projects 🌸
      </motion.h2>

      {/* 🖥 Large screens: grid layout */}
      <div className="hidden lg:grid gap-10 grid-cols-3 auto-rows-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-pink-100"
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
          >
            <Link href={project.link} target="_blank">
              <div className="relative h-52 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-700 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* 📱 Mobile: swipeable column */}
      <motion.div
        className="flex flex-col gap-6 lg:hidden overflow-y-auto scrollbar-hide"
        drag="y"
        dragConstraints={{ top: -200, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="min-w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-grab active:cursor-grabbing border border-pink-100"
            whileHover={{ scale: 1.03 }}
          >
            <Link href={project.link} target="_blank">
              <div className="relative h-44 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-pink-700">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
