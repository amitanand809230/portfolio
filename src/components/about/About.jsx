import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white dark:bg-slate-800 dark:text-white"
      >
        <div className="container md:w-[70%] sm:py-16 py-10">
          <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="relative font-bold">
              <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                ABOUT
              </div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                About me
              </h1>
            </div>
            <div className="text-slate-500">
              <p>Hi, I'm Amit Anand </p> <br />
              <p>
                An enthusiastic and self-driven Frontend Developer with a strong
                foundation in building responsive and user-friendly web
                interfaces. I have been actively learning and honing my skills
                through hands-on practice, personal projects, and continuous
                study. I specialize in HTML, CSS, and Tailwind CSS for crafting
                visually appealing layouts, and I use JavaScript and React.js to
                build interactive and dynamic user experiences. I enjoy turning
                ideas into reality through code and am passionate about learning
                modern web technologies and best practices. I'm currently
                focused on improving my proficiency in frontend frameworks,
                writing clean, maintainable code, and building real-world
                projects to strengthen my portfolio.
              </p>
              <div>
                <a
                  href="/portfolio/amit_anand_resume_2025.pdf?v=2" 
                  download 
                  className="primary-btn inline-block my-6 mr-6" 
                >
                  Download Resume
                </a>
                <a
                  href="tel:+918092305900"
                  className="outline-btn inline-block"
                >
                  Contact
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

export default About;
