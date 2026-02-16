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
    specialty: "CS Enthuasist",
    summary:
      "High School Student (Science) at Rajshahi Govt. City College, Rajshai, Bangladesh.",
    email: "talhaibnhafiz2007@email.com",
  },
  experience: [
    {
      company: "Integrated Eco Factory",
      position: "Project Leader",
      startDate: "Jan 26",
      endDate: "Feb 26",
      summary: [
        "Developed an automated industrial system focused on reducing energy waste and monitoring environmental pollutants using Sensor Networks.",
        "Integrated real-time resource management through Wireless Communication platforms to ensure sustainable manufacturing processes.",
        "Designed a centralized control system to optimize factory operations and minimize carbon footprint.",
      ],
    },
    {
      company: "Bankit",
      position: "Mobile Developer",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Integrated Eco Factory",
      summary: "Developed an automated industrial system focused on reducing energy waste and monitoring environmental pollutants using Sensor Networks.",
        "Integrated real-time resource management through Wireless Communication platforms to ensure sustainable manufacturing processes.",
        "Designed a centralized control system to optimize factory operations and minimize carbon footprint.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Talha Ibn Hafiz, an Intermediate last year Student.
    `,
    image: "/7d1d28a3-b269-4562-9f32-356c52708d8c.jpg",
  },
};

// #5755ff
