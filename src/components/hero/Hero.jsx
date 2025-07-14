import React from "react";
import personImg from "../../assets/person2.png";

const Hero = () => {
  return (
    <>
      <main className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-[600px]">
          <div>
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I'm Amit Anand
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Frontend Developer
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
              A passionate and detail-oriented Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and modern frontend frameworks like React. I specialize in building responsive, user-centric web applications with a focus on performance, accessibility, and clean code practices.
              </p>
              <a
                href="mailto:amitanand809230@gmailcom"
                className="inline-block primary-btn !px-6"
              >
                Hire me
              </a>
            </div>
          </div>
          {/* image container */}
          <div>
            <img
              src={personImg}
              alt="Not found"
              className="w-full md:max-w-lg mx-auto rounded-md "
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
