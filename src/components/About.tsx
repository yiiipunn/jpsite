"use client";

import React from "react";
import Link from "next/link";


const About = () => (
  <div className="container px-4 py-4 lg:py-20 lg:px-20 transform-custom justify-center " id="About">
    <p className="container flex px-2 py-2 text-lg font-bold tracking-wider  text-sky-900">
      Dream Chaser&apos;🌥️
    </p>
    <div className="container flex px-2 py-2 text-left font-bold text-3xl tracking-wider hover:border-b text-yellow-600 italic underline transition-all duration-500">
      Phurithip P(n.)
    </div>
    <Link href="https://www.kmutt.ac.th/">
      <p className="container flex px-2 py-2 text-lg  font-bold tracking-wider text-sky-900 hover:text-[#E78F81] active:text-sky-300 hover:transition-shadow duration-500">
        from King&apos;s Mongkut University Of Technology Thonburi.
      </p>
    </Link>
    <div className="container box-content border-l-2 border-slate-300 flex px-8 py-2 ">
      <p className="text-md font-bold tracking-wider  text-slate-600">"A Computer Engineering Student 👾 who&apos;s got passion from fallin&apos; in love <p className="italic text-sky-600 hover:text-sky-300">with LENS."</p></p>
    </div>
   
    </div>
);

export default About;
