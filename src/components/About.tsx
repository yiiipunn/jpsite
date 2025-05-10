"use client";

import React from "react";
import Link from "next/link";
import Skills from "./Skills";
import { motion } from "framer-motion";

const About = () => (
  <motion.div
    className="flex flex-col"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="container px-2 py-4 lg:py-20 lg:px-20 transform-custom justify-center"
      id="About"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.p
        className="container flex px-2 py-2 text-lg font-bold tracking-wider text-sky-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Dream Chaser&apos;🌥️
      </motion.p>

      <motion.div
        className="container flex px-2 py-2 text-left font-bold text-3xl tracking-wider hover:border-b text-yellow-600 italic underline transition-all duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Phurithip P(n.)
      </motion.div>

      <Link href="https://www.kmutt.ac.th/">
        <motion.p
          className="container flex px-2 py-2 text-lg font-bold tracking-wider text-sky-900 hover:text-[#E78F81] active:text-sky-300 hover:transition-shadow duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          from King&apos;s Mongkut University Of Technology Thonburi.
        </motion.p>
      </Link>

      <motion.div
        className="container box-content border-l-2 border-slate-300 flex px-8 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-md font-bold tracking-wider text-slate-600">
          &quot;A Computer Engineering Student 👾 who&apos;s got passion from fallin&apos; in love{" "}
          <span className="italic text-sky-600 hover:text-sky-300">with LENS.&quot;</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Skills />
      </motion.div>
    </motion.div>
  </motion.div>
);

export default About;
