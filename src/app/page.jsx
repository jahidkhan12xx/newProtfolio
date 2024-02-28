"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/img.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            Turning ideas into iconic logos – where design meets distinction in
            every pixel
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. Designing iconic logos that speak volumes in every pixel.
            Where creativity meets precision, turning concepts into memorable
            brand symbols. Elevate your identity with unique and impactful
            visual storytelling.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black hover:border-2-black transition-all duration-700">
              <Link href="/portfolio">View My Work</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black hover:bg-black hover:text-white hover:border-2-white transition-all duration-700">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
