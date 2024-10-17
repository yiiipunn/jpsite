"use client";

import React from "react";
import Link from "next/link";

const About = () => (
  <div className="container px-4 py-20 transform-custom justify-center ">
    <p className="container flex px-2 py-2 text-lg font-bold tracking-wider  text-sky-900">
      Dream Chaser🌥️
    </p>
    <div className="container flex px-2 py-2 text-left font-bold text-3xl tracking-wider hover:border-b text-slate-600   hover:text-pink-400 italic underline transition-all duration-500">
      Phurithip P(n.)
    </div>
    <Link href="/">
      <p className="container flex px-2 py-2 text-lg  font-bold tracking-wider  hover:border-b  text-sky-900 hover:text-sky-200 active:text-sky-300  transition-all duration-500">
        from King's Mongkut University Of Technology Thonburi.
      </p>
    </Link>
    <p className="container flex px-8 py-2 text-sm font-bold tracking-wider  hover:border-b  text-slate-600  hover:text-pink-400 active:text-sky-300  transition-all duration-500">
      A Computer Engineering Student who's got passion with Love.
    </p>
  </div>
);

export default About;
