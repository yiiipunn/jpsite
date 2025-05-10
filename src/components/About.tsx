"use client";

import React from "react";
import Link from "next/link";
import Skills from "./Skills";

const About = () => (
  <div className="flex flex-col">
    <div className="container px-2 py-4 lg:py-20 lg:px-20 transform-custom justify-center" id="About">
      <p className="container flex px-2 py-2 text-lg font-bold tracking-wider text-sky-900">
        {"Dream Chaser\u0027🌥️"}
        {/* \u0027 is the Unicode escape for apostrophe (') */}
      </p>
      <div className="container flex px-2 py-2 text-left font-bold text-3xl tracking-wider hover:border-b text-yellow-600 italic underline transition-all duration-500">
        {"Phurithip P(n.)"}
      </div>
      <Link href="https://www.kmutt.ac.th/">
        <p className="container flex px-2 py-2 text-lg font-bold tracking-wider text-sky-900 hover:text-[#E78F81] active:text-sky-300 hover:transition-shadow duration-500">
          {"from King\u0027s Mongkut University Of Technology Thonburi."}
        </p>
      </Link>
      <div className="container box-content border-l-2 border-slate-300 flex px-8 py-2">
        <p className="text-md font-bold tracking-wider text-slate-600">
          {"\"A Computer Engineering Student 👾 who\u0027s got passion from fallin\u0027 in love "}
          <span className="italic text-sky-600 hover:text-sky-300">{"with LENS.\""}</span>
        </p>
      </div>
      <Skills />
    </div>
  </div>
);

export default About;
