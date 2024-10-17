"use client";
import React from "react";

const Education = () => (
  <div className="container lg:px-50 lg:pt-50 md:ml-20 sm:ml-20 mx-auto z-4">
    <div className="md:w-2/3">
      <h1 className="font-bold italic mb-10 pt-10 text-3xl  text-sky-900">
        Education
      </h1>

      <div className="relative mt-5 text-left">
        <div className="flex items-center relative">
          <div className="hidden md:block w-20">
            <div className="font-bold">💮</div>
            <div className="md:flex font-bold space-x-1 text-xs ">
              <div>2012</div>
              <div>-</div>
              <div>2017</div>
            </div>
          </div>

          <div className="border-r-2 border-sky-900 absolute h-full left-1 md:left-20 top-2 z-10">
            <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
          </div>

          <div className="ml-10 border-b">
            <div className="font-bold text-sky-900">
              Assumption College Thonburi.
            </div>
            <div className="italic md:mb-4 text-slate-600">Primary School</div>
            <div className="mb-4 mt-2 md:hidden">
              <div className="font-bold">💮</div>
              <div className="text-xs">2012 - 2017</div>
            </div>
           
          </div>
        </div>

        <div className="flex items-center relative">
          <div className="hidden md:block w-20">
            <div className="font-bold">💮💮</div>
            <div className="md:flex font-bold space-x-1 text-xs">
              <div>2018</div>
              <div>-</div>
              <div>2023</div>
            </div>
          </div>

          <div className="border-r-2 border-sky-900 absolute h-full left-1 md:left-20 top-2 z-10">
            <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
          </div>

          <div className="ml-10 border-b">
            <div className="font-bold text-sky-900">Satriwithaya School.</div>
            <div className="italic md:mb-4 text-slate-600">
              Elementary / High School
            </div>
            <div className="mb-4 mt-2 md:hidden">
              <div className="font-bold">💮💮</div>
              <div className="text-xs">2018 - 2023</div>
            </div>
            <div className="mb-10">
             Sci-math Intensive English Program
            </div>
          </div>
        </div>

        <div className="flex items-center relative">
          <div className="hidden md:block w-20">
            <div className="font-bold">💮💮💮</div>
            <div className="md:flex font-bold space-x-1 text-xs">
              <div>2024</div>
              <div>-</div>
              <div>NOW</div>
            </div>
          </div>

          <div className="border-r-2 border-sky-900 absolute h-full left-1 md:left-20 top-2 z-10">
            <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
            <i className="fas fa-circle bottom-0 -ml-2 absolute"></i>
          </div>

          <div className="ml-10 border-b">
            <div className="font-bold text-sky-900">
              King&apos;s Mongkut University Of Technology Thonburi.
            </div>
            <div className="italic md:mb-4 text-slate-600">University</div>
            <div className="mb-4 mt-2 md:hidden">
              <div className="font-bold">💮💮💮</div>
              <div className="text-xs">2024 - NOW</div>
            </div>
            <div className="mb-10">
              Faculty of Engineering,Computer Engneering.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
