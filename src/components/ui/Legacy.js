import Image from "next/image";
import React from "react";
import Image1 from "/public/images/20211107_161110.jpg";
import Image2 from "/public/images/20230108_123722.jpg";
import logoFallback from "/public/images/logoSevaarth.png";
import Link from "next/link";
import { FiFlag } from "react-icons/fi";
import { GiTargetShot } from "react-icons/gi";

const Legacy = () => {
  return (
    <section className="flex flex-col lg:flex-row p-8 md:p-12 items-center gap-8">
      <div className="relative flex items-center justify-center w-full lg:w-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden z-40 border-8 border-white shadow-xl">
            <Image
              src={Image1}
              alt="Sevaarth community event"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute hidden lg:block top-[65%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#ebb011] to-[#ed861d] rounded-full h-20 w-20 md:h-28 md:w-28 z-30" />

          <div className="hidden lg:block -ml-12 mt-8 md:-ml-32 md:mt-16 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden z-20 border-8 border-white shadow-xl">
            <Image
              src={Image2}
              alt="Sevaarth volunteers"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute hidden lg:block top-16 md:top-20 left-[60%] bg-gradient-to-b from-[#00af90] to-[#00715d] rounded-full h-20 w-20 md:h-28 md:w-28 z-0" />
        </div>
      </div>

      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h2 className="text-orange-500 text-xl font-semibold">
          Welcome To Sevaarth
        </h2>
        <h1 className="text-blue-900 text-3xl md:text-5xl lg:text-6xl font-semibold mt-2">
          You&apos;re the Hope of Others.
        </h1>
        <p className="text-gray-700 mt-4 leading-relaxed lg:w-[83%]">
          At Sevaarth, we believe in the power of compassion and collective
          action. Our mission is to create lasting positive change by supporting
          elderly individuals, empowering women, educating underprivileged
          children, and building sustainable communities. Every small act of
          kindness contributes to a larger movement of hope and transformation.
        </p>

        <section className="flex flex-col lg:flex-row justify-center lg:justify-start gap-6 lg:gap-12 mt-8">
          <div className="flex items-center gap-4 p-4 rounded-lg shadow-lg bg-white">
            <div className="flex justify-center items-center w-14 h-14 md:w-16 md:h-16 border-2 border-blue-300 rounded-full">
              <GiTargetShot className="text-blue-300 text-2xl md:text-3xl" />
            </div>
            <div>
              <h3 className="text-[#1A1A46] text-lg font-bold">Our Mission</h3>
              <p className="text-gray-600 text-sm">
                Empowering communities through sustainable support and care.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg shadow-lg bg-white">
            <div className="flex justify-center items-center w-14 h-14 md:w-16 md:h-16 border-2 border-orange-400 rounded-full">
              <FiFlag className="text-orange-400 text-2xl md:text-3xl" />
            </div>
            <div>
              <h3 className="text-[#1A1A46] text-lg font-bold">Our Vision</h3>
              <p className="text-gray-600 text-sm">
                A world where everyone has the opportunity to thrive.
              </p>
            </div>
          </div>
        </section>

        <Link
          href="/ourLegacy"
          className="mt-8 inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-105"
        >
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default Legacy;
