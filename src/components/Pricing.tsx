import Link from "next/link";
import { courses } from "../app/data/pricing";

interface courses {
  id: number;
  title: string;
  proficiency: string;
  duration: string;
  description: string;
  highlights: string[];
  price: string;
}

export default function Pricing() {
  return (
    <div className="relative">
      {/* HERO SECTION WITH BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center text-white py-20 px-6 flex flex-col items-center text-center"
        style={{
          backgroundImage: "url('/bg-pricing.jpg')",
          minHeight: "100%", // Ensures it covers the full section
        }}
      ></div>

      {/* Content Wrapper to Ensure Text is Above Background */}
      <div className="relative z-10">
        {/* Text Content */}
        <div className="text-center text-white py-20">
          <p className="text-sm text-green-300 uppercase tracking-wide">
            Start Your Application
          </p>
          <p className="mt-4 text-md sm:text-lg md:text-4xl md:font-semibold max-w-3xl mx-auto">
            STEP 1: COMPLETE APPLICATION FORM.
            <br />
            STEP 2: PAY COMPLETE COURSE FEE OR PAY DEPOSIT AMOUNT.
          </p>
          <p className="mt-2 text-sm text-gray-300">
            Once you are Done, We Will Confirm Your Place Within 24 Working
            hours.
          </p>
        </div>

        <div className="mx-4 pb-8">
          <div className="grid lg:grid-cols-3 gap-2">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`
                                    rounded-lg px-8 pb-6 hover:shadow-lg transition duration-300 m-2 
                                    ${
                                      course.id === 2
                                        ? "bg-white lg:shadow-[0px_-4px_6px_-1px_rgba(0,0,0,0.1),6px_6px_6px_6px_rgba(0,0,0,0.1)] lg:scale-110 lg:py-12"
                                        : "bg-[#E6F9F5] shadow-md p-8"
                                    }
                                `}
              >
                
                {course.id === 2 && (
                  <p
                    className="text-sm font-bold text-white bg-green-600 py-2 shadow-md uppercase 
        absolute top-0 left-1/2 transform -translate-x-1/2 w-[100%] text-center rounded-t-lg"
                  >
                    Most of our students enroll in this course
                  </p>
                )}

                <h3 className="text-xl font-bold text-gray-800 text-center mt-2">
                  {course.title}
                </h3>
                <p className="text-lg font-semibold text-center text-gray-700 mt-1">
                  {course.proficiency}
                </p>
                <p className="text-2xl font-bold text-center text-gray-900 mt-3">
                  {course.price}
                </p>
                <p className="text-sm text-gray-500 text-center">
                  Fees include examination & course materials
                </p>

                <div className="mt-6 flex justify-center">
                  <Link href="/course-details">
                    <div
                      className={`px-6 py-3 text-white text-center font-semibold rounded-full ${
                        course.id === 1 ? "bg-customGreen" : "bg-customGreen"
                      } hover:opacity-90 transition`}
                    >
                      Course Details
                    </div>
                  </Link>
                </div>

                <ul className="mt-6 text-gray-600 list-disc list-inside space-y-2">
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-customGreen font-medium">
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3">
                  <Link href="/apply">
                    <div className="w-full bg-customGreen hover:bg-green-600 text-white text-center px-5 py-3 rounded-lg font-semibold transition">
                      Complete Application
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div className="w-full bg-green-600 hover:bg-customGreen text-white text-center px-5 py-3 rounded-lg font-semibold transition">
                      Pay Fees
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
