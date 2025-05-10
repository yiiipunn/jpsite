"use client";
import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

const icons = [
  {
    icon: <AiOutlineInstagram size={40} />,
    href: "https://www.instagram.com/yiiipunn/",
    color: "text-pink-500 hover:text-pink-600",
  },
  {
    icon: <AiOutlineGithub size={40} />,
    href: "https://github.com/yiiipunn",
    color: "text-gray-800 hover:text-gray-600",
  },
  {
    icon: <AiOutlineMail size={40} />,
    href: "yiiipunn@gmail.com",
    color: "text-sky-600 hover:text-sky-500",
  },
];

const Contact = () => (
  <div
    className="relative w-full py-20 px-6 lg:px-20 bg-gradient-to-br from-pink-50 via-white to-sky-50 overflow-hidden"
    id="Contact"
  >
    {/* Sakura Background Layer */}
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div
        className="animate-sakura bg-repeat w-full h-full opacity-20"
        style={{ backgroundImage: "url(/sakura-petal.png)" }}
      />
    </div>

    <motion.h1
      className="text-4xl text-center font-bold italic text-sky-900 mb-10 drop-shadow-sm"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Let&apos;s Connect 🌸
    </motion.h1>

    <div className="flex justify-center space-x-10">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.15, rotate: [0, 5, -5, 0] }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href={item.href} target="_blank">
            <span
              className={`transition-all transform cursor-pointer drop-shadow ${item.color}`}
            >
              {item.icon}
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Contact;
