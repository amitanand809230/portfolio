import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";

const Services = [
  {
    name: "UX research",
    description:
      "Understanding your users is the first step toward building successful products. I conduct thorough user research through surveys, interviews, usability testing, and analytics to gain insights that inform design decisions. The result? Intuitive, user-centric experiences that drive engagement.",
    image: "https://picsum.photos/200/300",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
 
  {
    name: "FrontEnd Development",
    description:
      "I craft fast, responsive, and modern websites using the latest technologies. I ensure your website is not just visually appealing but also scalable, accessible, and SEO-friendly.",
    image: "https://picsum.photos/200/302",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
 
];
const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            style={{ backgroundImage: `url(${image})` }}
            className={`${bgColor} rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
