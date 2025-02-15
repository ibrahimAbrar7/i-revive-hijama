"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-whiteblack text-black pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>

<div className="flex items-center">
  <Image 
    src="/logo-img.png" 
    alt="i-Revive Logo" 
    width={150} 
    height={48} 
    className="mr-2"
  />
</div>

          <p className="mt-3 text-gray-600">
            At i-Revive, we offer a targeted range of Hijama Cupping-based wellness plans coupled with the indispensable goodness of Gliding Cupping & Deep Tissue Stroking under the most hygienic setups while fully honoring the individual&apos;s privacy.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold pb-2 mb-3 border-b-2 border-customGreen inline-block">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/" className="hover:text-customGreen">Home</Link></li>
            <li><Link href="/about" className="hover:text-customGreen">About Us</Link></li>
            <li><Link href="/treatment-plans" className="hover:text-customGreen">Treatment Plans</Link></li>
            <li><Link href="/faq" className="hover:text-customGreen">FAQ</Link></li>
            <li><Link href="/blog" className="hover:text-customGreen">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-customGreen">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Treatment Plans Section */}
        <div>
          <h4 className="text-lg font-semibold pb-2 mb-3 border-b-2 border-customGreen inline-block">
            Treatment Plans
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/treatment-plans/sunnah-basic" className="hover:text-customGreen">Sunnah Basic</Link></li>
            <li><Link href="/treatment-plans/sunnah-plus" className="hover:text-customGreen">Sunnah Plus</Link></li>
            <li><Link href="/treatment-plans/vital-organ-cleanse" className="hover:text-customGreen">Vital Organ Cleanse</Link></li>
            <li><Link href="/treatment-plans/head-cupping" className="hover:text-customGreen">Head Cupping</Link></li>
            <li><Link href="/treatment-plans/lymphatic-cleanse" className="hover:text-customGreen">Lymphatic Cleanse</Link></li>
            <li><Link href="/treatment-plans/infertility-cupping" className="hover:text-customGreen">Infertility Cupping</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h4 className="text-lg font-semibold pb-2 mb-3 border-b-2 border-customGreen inline-block">
            Official Info
          </h4>
          <p className="text-gray-600 flex items-center gap-2">
            <FaMapMarkerAlt className="text-customGreen" />
            <span>6th floor, Mawin Zamzam, opposite Prince Hotel, Mehdipatnam, Hyd</span>
          </p>
          <p className="text-gray-600 flex items-center gap-2 mt-3">
            <FaEnvelope className="text-customGreen" />
            <Link href="mailto:irevive.22@gmail.com" className="hover:text-customGreen">irevive.22@gmail.com</Link>
          </p>
          <p className="text-gray-600 flex items-center gap-2 mt-3">
            <FaPhoneAlt className="text-customGreen" />
            <Link href="tel:8009944335" className="hover:text-customGreen">8009944335</Link>
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center font-semibold text-gray-500 text-md">
        © All Rights Reserved By <Link href="mailto:irevive.22@gmail.com" className="text-customGreen">irevive.22@gmail.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
