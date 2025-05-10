"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => (
  <motion.div
    className="container lg:px-50 lg:pt-50 mx-auto z-4"
    id="Skills"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <div>
      <motion.h1
        className="font-bold italic py-8 text-3xl text-sky-900"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Skills
      </motion.h1>
      <motion.div
        className="block max-w-sm p-6 bg-white border rounded-lg shadow border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="font-semibold text-gray-700 dark:text-gray-500">
          &#8226; UX/UI Designer
          <br />
          &#8226; Front-End Developer
          <br />
          &#8226; Photographer / FilmMaker
          <br />
          &#8226; Electric Guitarist
          <br />
        </p>
      </motion.div>
    </div>
  </motion.div>
);

export default Skills;
