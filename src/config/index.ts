import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Talha Ibn Hafiz — CS Enthusiast",
  author: "Talha Ibn Hafiz",
  description:
    "High School Student (Science) at Rajshahi Govt. City College, Rajshai, Bangladesh",
  lang: "en",
  siteLogo: "/7d1d28a3-b269-4562-9f32-356c52708d8c.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/talhaibnhafiz" },
    { text: "Github", href: "https://github.com/talhaibnhafiz" },
    { text: "Phone", href: "01628112832" },
  ],
  socialImage: "/7d1d28a3-b269-4562-9f32-356c52708d8c.jpg",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Talha Ibn Hafiz",
    specialty: "CS Enthuasiast",
    summary:
      "High School Student (Science) at Rajshahi Govt. City College, Rajshai, Bangladesh.",
    email: "talhaibnhafiz2007@email.com",
  },
  experience: [
    {
      company: "HSC",
      position: "GPA:0.00/0.00",
      startDate: "Aug 24",
      endDate: "July 26",
      summary: ["At Rajshahi Govt. City College"],
    },
    {
      company: "SSC",
      position: "GPA:5.00/5.00",
      startDate: "Jan 2016",
      endDate: "May 2024",
      summary: ["At Seroil Govt. High School"],
    }, // এখানে কমা এবং ব্র্যাকেট ঠিক করা হয়েছে
  ],
  projects: [
    {
      name: "Integrated Eco Factory",
      summary: "An automated industrial system designed to reduce energy waste and monitor pollutants using sensor networks. It features real-time resource management through wireless communication to ensure sustainable and eco-friendly manufacturing processes.",
      linkPreview: "/",
      linkSource: "https://github.com/talhaibnhafiz",
      image: "/Eco_factory.jpg",
    },
    {
      name: "Smart IoT based Helmet",
      summary: "An IoT-based safety solution for motorcyclists and industrial workers. It includes features like accident detection, emergency alerts, and real-time health monitoring (such as heart rate or oxygen levels) to ensure maximum safety on the go.",
      linkPreview: "/",
      linkSource: "https://github.com/talhaibnhafiz",
      image: "/smart_helmet.png",
    },
    {
      name: "Road AQI=0 ",
      summary: "A specialized filtration project aimed at reducing carbon emissions from exhaust systems. This system uses activated carbon technology to trap harmful particles and greenhouse gases, contributing to a cleaner and more breathable environment.",
      linkPreview: "/",
      linkSource: "https://github.com/talhaibnhafiz",
      image: "/carbon.jpg",
    },
  ],
  about: {
    description: `
      I'm Talha Ibn Hafiz, a Science student at Rajshahi Govt. City College with a deep passion for Computer Science and Engineering. I love exploring new technologies and building innovative projects like IoT-based safety systems and eco-friendly industrial solutions. Currently, I'm focusing on strengthening my foundation in web development and sustainable technology.
    `,
    image: "/7d1d28a3-b269-4562-9f32-356c52708d8c.jpg",
  },
};

// #5755ff
