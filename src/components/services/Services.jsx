import React from "react";
import ServicesBox from "./ServicesBox.jsx";

const Services = () => {
  return (
    <>
      <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
        <div className="container flex flex-col items-center">
          <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
            Services
          </h1>
          <p className="text-slate-500 text-center md:w-[50%] mx-auto">
           I offer user-focused UX research and modern web development services to create intuitive, high-performing digital experiences.
          </p>
        </div>
        {/* services Card */}
        <div>
          <ServicesBox />
        </div>
      </section>
    </>
  );
};

export default Services;
