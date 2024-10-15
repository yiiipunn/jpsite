"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineGithub, AiOutlineSpotify, AiOutlineMoon } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href= "https://github.com/yiiipunn">
        <div className="flex justify-center rounded-[50%] overflow-hidden w-20 h-20">
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
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b  hover:text-sky-200 active:text-sky-300 text-xl">
                About me
              </li>
            </Link>
            <Link href="/education">
              <li className="ml-10 uppercase hover:border-b  hover:text-sky-200  active:text-sky-300 text-xl">
                Education
              </li>
            </Link>
            <Link href="/skills">
              <li className="ml-10 uppercase hover:border-b  hover:text-sky-200  active:text-sky-300 text-xl">Skills</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b  hover:text-sky-200  active:text-sky-300 text-xl">
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
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className=" hover:text-sky-200 active:text-sky-300 py-4 cursor-pointer"
              >
                About me
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className=" hover:text-sky-200 active:text-sky-300 py-4 cursor-pointer"
              >
                Education
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className=" hover:text-sky-200 active:text-sky-300 py-4 cursor-pointer"
              >
                Skills
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className=" hover:text-sky-200 active:text-sky-300 py-4 cursor-pointer"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
            
            <AiOutlineInstagram size={30} className="cursor-pointer mx-2 "/>
            <AiOutlineGithub size={30} className="cursor-pointer mx-2"/>
            <AiOutlineSpotify size={30} className="cursor-pointer mx-2"/>
            <AiOutlineMoon size={30} className="cursor-pointer mx-2"/>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
