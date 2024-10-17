"use client";
import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

const Contact = () => (
  <div className="container lg:px-50 lg:pt-50 mx-auto z-4" id="Contact">
  <div>
  <h1 className="font-bold italic mb-10 pt-10 text-3xl text-sky-900">
        Contact
      </h1>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border rounded-lg shadow border-gray-700"
      >
        <div className="font-semibold text-gray-700 flex flex-row dark:text-gray-500">
        <Link href="https://www.instagram.com/yiiipunn/">
            <AiOutlineInstagram
              size={30}
              className="cursor-pointer mx-2 hover active:-sky-300"
            />
          </Link>
          <Link href="https://github.com/yiiipunn">
            <AiOutlineGithub size={30} className="cursor-pointer mx-2" />
          </Link>
        </div>
      </a>
  </div>
</div>
);

export default Contact;
