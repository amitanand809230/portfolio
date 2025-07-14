import React from "react";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="bg-white dark:bg-slate-800 dark:text-white"
      >
        <div className="container md:w-[70%] sm:py-16 py-10">
          <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="relative font-bold">
              <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                CONTACT
              </div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                Contact me
              </h1>
            </div>
            <div className="text-slate-500">
              
              <div>
                <a href="/amit_anand_frontend_developer_resume.pdf" download className="primary-btn inline-block my-6 mr-6">
                  {" "}
                  Download Resume
                </a>
                <a href="tel:+918092305900" className="outline-btn inline-block ">
                  {"Call me +918092305900 "}
                  
                </a>
                
              </div>
            </div>
          </div>
          
        </div>
      </section>
       <hr className="border-t border-gray-300 dark:border-gray-600 w-[90%] mx-auto my-8" />
    </>
  );
};

export default Contact;
