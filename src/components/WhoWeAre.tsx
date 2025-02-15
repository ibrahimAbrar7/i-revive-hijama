import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function WhoWeAre() {
  return (
    <section className="text-center py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">Who We Are</h2>
      <p className="mt-4 xs:text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
        We are a team dedicated to providing top-quality services with a strong 
        focus on customer satisfaction. Our mission is to deliver excellence 
        through innovation, expertise, and commitment.
      </p>
      <Link
      href="/courses"
      className="mt-6 inline-flex items-center gap-2 bg-customGreen hover:bg-customGreen/90 text-white px-5 py-3 rounded-md font-bold"
    >
      <FaArrowAltCircleRight />
      Learn More
    </Link>
    </section>
  );
}
