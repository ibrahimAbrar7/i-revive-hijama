import React from "react";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaYoutube, FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";


const TopBar = () => {
  return (
    <div className="flex justify-evenly items-center p-3 bg-customGreen text-white">
      {/* Timing Section */}
      <div className="text-sm md:text-lg font-semibold hidden md:block">
        Mon - Fri: 9am - 6pm
      </div>

      {/* Contact Section (Phone Number and Social Icons) */}
      <div className="flex items-center space-x-4">
        {/* Phone Number */}
        <div className="flex items-center space-x-2 text-sm md:text-lg font-semibold">
          <FaPhone className="text-sm md:text-lg" />
          <span>800-9944-335</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-3">
          <Link href="https://www.facebook.com" passHref>
            <span className="border-white rounded-full hover:opacity-70 cursor-pointer">
              <FaFacebookF className="text-xl" />
            </span>
          </Link>
          <Link href="https://www.twitter.com" passHref>
            <span className="border-white rounded-full hover:opacity-70 cursor-pointer">
              <FaXTwitter className="text-xl" />
            </span>
          </Link>
          <Link href="https://www.instagram.com" passHref>
            <span className="border-white rounded-full hover:opacity-70 cursor-pointer">
              <FaInstagram className="text-xl" />
            </span>
          </Link><Link href="https://www.instagram.com" passHref>
            <span className="border-white rounded-full hover:opacity-70 cursor-pointer">
              <FaYoutube className="text-xl" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
