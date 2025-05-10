"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "SWVICHAKARN'66 WEBSITE",
    description: "An Enrollment system with a Static Website that was created for SWVICHAKARN'66 event.",
    imageUrl: "/apollo.jpg",
    link: "",
  },
  {
    title: "[YWC] Interview Checker System",
    description: "Web Programming Major's homework but in the way cuter.",
    imageUrl: "/ywc.png",
    link: "https://ywc-homework-eiei.vercel.app/",
  },
  {
    title: "THIS WEBSITE",
    description: "This is my web portfolio that catch up all of my footprints on earth.",
    imageUrl: "/jpsite.png",
    link: "https://yourproject.com/tutor-bot",
  },
  {
    title: "OSU! Beatmap Generator",
    description:
      "This is a web-based tool that simplifies the creation of beatmaps for OSU! using AI. It allows users to upload songs (via files or YouTube links) and automatically generates playable beatmaps.",
    imageUrl: "/osu.png",
    link: "https://github.com/yiiipunn/osu_beatmap_generator",
  },
  {
    title: "UX/UI Bangmod Hackathon 2024",
    description:
      "This project is a Rogue dungeon crawler game but we built with C++ and designed to enhance the classic Rogue gameplay by applying advanced data structures.",
    imageUrl: "/bangmodhack.png",
    link: "",
  },
 
   {
    title: "Mod Krapong Application Prototype",
    description:
      "This project is a Rogue dungeon crawler game but we built with C++ and designed to enhance the classic Rogue gameplay by applying advanced data structures.",
    imageUrl: "/modkrapong.png",
    link: "https://www.figma.com/design/aJfmaFdkBKnVcivgeFT7T7/MOD-Krapong-Clickable-Prototype?fuid=962677229349306932",
  },
  {
    title: "Queen97Gambit",
    description:
      "For those who play chess but never check mate to anyone. This game is going to help you to revenge them back!!!",
    imageUrl: "/queen.png",
    link: "https://yiiipunn.itch.io/queen97gambits",
  },
  {
    title: "A Treasure Hunter Robot",
    description: "The robot is capable of picking up gold coins from inside the cave and carrying them out. Only gold coins and diamonds will count toward the score. The robot can be manually controlled, but visibility inside the cave is completely limited.",
    imageUrl: "/expo.jpg",
    link: "https://cottony-hurricane-791.notion.site/ef1fd369c3d04d2f9350908608baf9c5?v=58c0c75635a24b638b07dba457420d79&pvs=4",
  },
  {
    title: "Digicamp/Short film: Advisor",
    description: "The robot is capable of picking up gold coins from inside the cave and carrying them out. Only gold coins and diamonds will count toward the score. The robot can be manually controlled, but visibility inside the cave is completely limited.",
    imageUrl: "/expo.jpg",
    link: "https://cottony-hurricane-791.notion.site/ef1fd369c3d04d2f9350908608baf9c5?v=58c0c75635a24b638b07dba457420d79&pvs=4",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Project() {
  return (
    <section
      className="relative flex flex-col px-5 py-20 bg-gradient-to-tr from-pink-50 to-white w-screen overflow-hidden"
      id="Projects"
    >
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="animate-sakura bg-repeat w-full h-full"
          style={{ backgroundImage: "url(/sakura-petal.png)" }}
        ></div>
      </div>

      <motion.h2
        className="text-4xl font-extrabold text-sky-900 mb-16 text-center drop-shadow-md"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        🌸 My Projects 🌸
      </motion.h2>

      <div className="hidden lg:grid gap-10 grid-cols-3 auto-rows-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-pink-100"
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
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
                <h3 className="text-xl font-bold text-pink-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

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
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
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
                <h3 className="text-lg font-bold text-pink-700">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
