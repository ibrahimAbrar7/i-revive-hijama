"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-semibold text-customgreen"
          >
            <Image 
                src="/logo-img.png" 
                alt="i-Revive Logo" 
                width={150} 
                height={48} 
                className="mr-2"
              />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex md:space-x-6 space-x-8">
            <Link
              href="/"
              className="text-customGreen hover:text-customgreen font-semibold"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-customGreen hover:text-customgreen font-semibold"
            >
              ABOUT
            </Link>
            <Link
              href="/treatment"
              className="text-customGreen hover:text-customgreen font-semibold"
            >
              TREATMENT PLANS
            </Link>
            <Link
              href="/faq"
              className="text-customGreen hover:text-customgreen font-semibold"
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="text-customGreen hover:text-customgreen font-semibold"
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className="text-customGreen hover:text-customgreen font-semibold"
            >
              CONTACT
            </Link>
          </nav>

          {/* Book Appointment Button */}
          <div className="hidden lg:flex">
            <Link
              href="/appointment"
              className="bg-customGreen text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 
  hover:bg-customGreen/90"
            >
              BOOK APPOINTMENT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 p-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-customGreen text-lg font-semibold hover:text-customgreen"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-customGreen text-lg font-semibold hover:text-customgreen"
              >
                About Us
              </Link>
              <Link
                href="/treatment"
                className="text-customGreen text-lg font-semibold hover:text-customgreen"
              >
                Treatment Plans
              </Link>
              <Link
                href="/faq"
                className="text-customGreen text-lg font-semibold hover:text-customgreen"
              >
                FAQ
              </Link>
              <Link
                href="/blog"
                className="text-customGreen text-lg font-semibold hover:text-customgreen"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-customGreen text-lg font-semibold hover:text-customgreen"
              >
                Contact Us
              </Link>
              <Link
                href="/appointment"
                className="bg-customGreen text-white px-4 py-2 rounded-md text-center hover:bg-green-700"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
