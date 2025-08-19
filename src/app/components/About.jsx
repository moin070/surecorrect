import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About SureCorrect Aligner
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* About Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/img2.jpg"
                alt="Our Dental Team"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Smile Transformation Experts
            </h3>
            <p className="text-gray-600 mb-6">
              At SureCorrect Aligner, we're dedicated to creating beautiful,
              confident smiles through our advanced clear aligner technology
              and traditional braces solutions. With over 10 years of
              experience in orthodontic care, our team of certified dental
              professionals has helped thousands of patients achieve their
              dream smiles.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Custom Treatment Plans */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Custom Treatment Plans
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Tailored to your unique dental needs
                  </p>
                </div>
              </div>

              {/* Fast Results */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Fast Results</h4>
                  <p className="text-gray-600 text-sm">
                    Visible changes in weeks, not months
                  </p>
                </div>
              </div>

              {/* Affordable Options */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Affordable Options
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Flexible payment plans available
                  </p>
                </div>
              </div>

              {/* Modern Facilities */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Modern Facilities
                  </h4>
                  <p className="text-gray-600 text-sm">
                    State-of-the-art dental technology
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
              Meet Our Team
            </button>
          </div>
        </div>

        {/* Our Technology Section */}
        <div className="mt-24 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <div className="md:w-1/3 w-full">
              <div className="relative h-48 sm:h-64 md:h-80 w-full">
                <Image
                  src="/assets/img4.webp"
                  alt="Our Aligner Technology"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Advanced Orthodontic Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                We combine cutting-edge 3D imaging technology with precision
                engineering to create aligners and braces that are comfortable,
                effective, and discreet. Our proprietary SmartTrack material
                ensures optimal tooth movement while maintaining comfort
                throughout your treatment.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  3D Treatment Planning
                </span>
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  Digital Impressions
                </span>
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  Removable Aligners
                </span>
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  Ceramic Braces
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
