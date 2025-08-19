import React from "react";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { GiTooth, GiToothbrush } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";

const HowItWorks = () => {
  const steps = [
    {
      icon: <BsFillClipboard2CheckFill className="text-3xl text-blue-600" />,
      title: "1. Free Consultation",
      description:
        "Book a free in-person or virtual consultation with our dental experts to assess your smile needs.",
      subpoints: [
        "Comprehensive oral examination",
        "3D digital scan of your teeth",
        "Personalized treatment recommendation",
      ],
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-blue-600" />,
      title: "2. Custom Treatment Plan",
      description:
        "Our orthodontists design your step-by-step smile transformation using advanced 3D modeling.",
      subpoints: [
        "See your future smile with our virtual preview",
        "Precise aligner sequence planning",
        "Estimated treatment timeline",
      ],
    },
    {
      icon: <GiTooth className="text-3xl text-blue-600" />,
      title: "3. Receive Your Aligners",
      description:
        "Get your custom-made SureCorrect aligners delivered to your home or our clinic.",
      subpoints: [
        "BPA-free, medical-grade plastic",
        "Ultra-thin and virtually invisible",
        "Comfortable rounded edges",
      ],
    },
    {
      icon: <GiToothbrush className="text-3xl text-blue-600" />,
      title: "4. Wear & Maintain",
      description:
        "Wear your aligners 20-22 hours daily, changing every 1-2 weeks as directed.",
      subpoints: [],
    },
    {
      icon: <FaCheckCircle className="text-3xl text-blue-600" />,
      title: "5. Perfect Smile Achieved",
      description:
        "Complete your treatment and enjoy your new confident smile with our retention program.",
      subpoints: [
        "Final results in as little as 6 months",
        "Complimentary retainers included",
        "Lifetime smile guarantee",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white" id="howitworks">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How SureCorrect Works
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey to a perfect smile in 5 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-100 transform -translate-x-1/2 top-0"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } mb-12`}
              >
                {/* Text Section */}
                <div className="md:w-1/2 p-6">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 h-full">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-50 p-3 rounded-full mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.subpoints.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 p-6 flex justify-center">
                  <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                    <Image
  src={`/assets/howitswork${index + 1}.jpg`}
  alt={step.title}
  width={600}
  height={400}
  className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
/>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="text-white font-medium">
                        Step {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Start Your Smile Journey Today
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our dental experts are ready to guide you through every step of your
            SureCorrect treatment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#appointment"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
            >
              Book Free Scan
            </Link>
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg border border-blue-200 transition duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
