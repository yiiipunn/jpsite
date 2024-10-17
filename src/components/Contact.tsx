"use client";
import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import Link from "next/link";

const Contact = () => (
  <div className="container lg:px-50 lg:pt-50 mx-auto z-4" id="Contact">
    <div>
      <h1 className="font-bold italic mb-5 pt-5
       text-3xl text-sky-900">
        Contact
      </h1>

      <div className="flex flex-row mb-5 justify-right font-semibold text-gray-700  dark:text-gray-500">
        <Link href="https://www.insflex flex-rowtagram.com/yiiipunn/">
          <AiOutlineInstagram
            size={30}
            className="cursor-pointer mx-2 hover active:-sky-300"
          />
        </Link>
        <Link href="https://github.com/yiiipunn">
          <AiOutlineGithub size={30} className="cursor-pointer mx-2" />
        </Link>
        <Link href="https://github.com/yiiipunn">
          <AiOutlineMail size={30} className="cursor-pointer mx-2" />
        </Link>
      </div>
    </div>
  </div>
);

export default Contact;
