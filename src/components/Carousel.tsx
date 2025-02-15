"use client";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full flex items-center bg-customGreen py-12 md:py-20">
      <div
        className="absolute inset-0 z-10 bg-cover bg-center text-white py-20 px-6 flex flex-col items-center text-center"
        style={{
          backgroundImage: "url('/bg-pricing.jpg')",
          minHeight: "100%", // Ensures it covers the full section
        }}
      ></div>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bannered1.jpg" // Background image
          alt="Cupping Therapy"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      <div className="relative z-20 container mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 gap-8 md:gap-16 lg:gap-24">
        {/* Left Content */}
        <div className="max-w-lg text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Revitalize Your Health with I-Revive Hijama
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg">
            Experience the ancient healing power of Hijama therapy, designed to
            detoxify, rejuvenate, and restore your bodys natural balance.
          </p>
          <Link
            href="/courses"
            className="mt-6 inline-flex items-center gap-2 bg-white hover:bg-gray-300 text-customGreen px-5 py-3 rounded-md font-bold"
          >
            <FaArrowAltCircleRight />
            COURSES
          </Link>
        </div>

        {/* Floating Image */}
        <div className="relative w-full max-w-xs sm:max-w-sm shadow-lg shadow-black rounded-xl overflow-hidden border-4 border-gray-100">
          <Image
            src="/person1.jpg"
            alt="Classroom Session"
            width={500}
            height={500}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
