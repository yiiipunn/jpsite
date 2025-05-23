"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineSpotify,
  AiOutlineMoon,
} from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed z-50 flex flex-wrap mt-0 w-full h-24 shadow-xl bg-white scroll-m-20 scroll-smooth">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="https://github.com/yiiipunn">
          <div className="flex justify-center rounded-[50%] overflow-hidden w-20 h-20 sm:w-10 sm:h-10">
            <div className="w-full h-full">
              <Image
                src="/akebi-chan.gif"
                alt="logo"
                width={0}
                height={0}
                className="w-full h-full cursor-pointer object-cover"
                priority
              />
            </div>
          </div>
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="#About">
              <li className="ml-10 uppercase hover:border-b  text-sky-900 hover:text-sky-200 active:text-sky-300 text-xl transition-all duration-500 scroll-smooth">
                About me
              </li>
            </Link>
            <Link href="#Education">
              <li className="ml-10 uppercase hover:border-b  text-sky-900 hover:text-sky-200  active:text-sky-300 text-xl transition-all duration-500">
                Education
              </li>
            </Link>
            <Link href="#Projects">
              <li className="ml-10 uppercase hover:border-b  text-sky-900 hover:text-sky-200  active:text-sky-300 text-xl transition-all duration-500">
                Projects
              </li>
            </Link>
            <Link href="#Skills">
              <li className="ml-10 uppercase hover:border-b  text-sky-900 hover:text-sky-200  active:text-sky-300 text-xl transition-all duration-500">
                Skills
              </li>
            </Link>
            <Link href="#Contact">
              <li className="ml-10 uppercase hover:border-b  text-sky-900 hover:text-sky-200  active:text-sky-300 text-xl transition-all duration-500">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <div onClick={handleNav} className="sm:hidden cursor-pointer p1-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0  sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-600"
            : "fixed right-[-100%] top-0  sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <a href="#About">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase hover:border-b text-sky-900 hover:text-sky-200 active:text-sky-300 py-4 cursor-pointer ease-in-out duration-500"
              >
                About me
              </li>
            </a>
            <a href="#Education">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase hover:border-b  text-sky-900 hover:text-sky-200 active:text-sky-300 py-4 cursor-pointer ease-in-out duration-500"
              >
                Education
              </li>
            </a>
            <a href="#Projects">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase hover:border-b  text-sky-900 hover:text-sky-200 active:text-sky-300 py-4 cursor-pointer ease-in-out duration-500"
              >
                Projects
              </li>
            </a>
            
            <a href="#Skills">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase hover:border-b  text-sky-900 hover:text-sky-200 active:text-sky-300 py-4 cursor-pointer ease-in-out duration-500"
              >
                Skills
              </li>
            </a>
            <a href="#Contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase hover:border-b text-sky-900 hover:text-sky-200 active:text-sky-300 py-4 cursor-pointer ease-in-out duration-500"
              >
                Contact
              </li>
            </a>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center ease-in-out duration-500">
          <Link href="https://www.instagram.com/yiiipunn/">
            <AiOutlineInstagram
              size={30}
              className="cursor-pointer mx-2 hover active:-sky-300"
            />
          </Link>
          <Link href="https://github.com/yiiipunn">
            <AiOutlineGithub size={30} className="cursor-pointer mx-2" />
          </Link>
          <Link href="https://open.spotify.com/playlist/5Xp5MrVYhB13hrSAfrjmJD">
            <AiOutlineSpotify size={30} className="cursor-pointer mx-2" />
          </Link>
          <Link href="/">
            <AiOutlineMoon size={30} className="cursor-pointer mx-2" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
