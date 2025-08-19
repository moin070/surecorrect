export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-4 mt-10 sm:px-8  md:px-20 py-10 md:py-16 bg-gradient-to-br from-blue-50 to-blue-100"
    >
      {/* Left content */}
      <div className="flex-1 text-center md:text-left md:pr-10 mt-6 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight text-gray-800">
          Your Perfect Smile with{" "}
          <span className="text-blue-600">SureCorrect</span>
        </h1>
        <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
          Professional-grade clear aligners with expert orthodontic supervision
          for a confident, beautiful smile.
        </p>

        {/* Buttons */}
        <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <a
            href="#appointment"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300 text-center text-sm sm:text-base"
          >
            Free Consultation
          </a>
          <a
            href="#howitworks"
            className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 text-center text-sm sm:text-base"
          >
            How It Works
          </a>
        </div>

        {/* Features */}
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start text-black">
          {["FDA Approved", "Pain-Free", "Visible Results"].map((feature) => (
            <div
              key={feature}
              className="flex items-center bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2"
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
              <span className="text-xs sm:text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right image */}
      <div className="flex-1 flex justify-center w-full mb-6 md:mb-0">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg">
          <img
            src="/assets/img1.jpg"
            alt="SureCorrect Aligner"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
