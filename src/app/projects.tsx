"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    img: `/image/blog-1.svg`,
    title: "Street Art",
    desc: "A creative platform that allows artists to showcase their passion by sharing their artwork with a global audience. The app fosters a vibrant community where users can discover, upload, and engage with street art from around the world.",
    tags: ["Flutter", "Firebase"],
  },
  {
    img: `/image/blog2.svg`,
    title: "Dog Stalker",
    desc: "An engaging app for dog lovers, featuring daily doses of adorable pups, expert care tips, and heartwarming stories. Designed to strengthen the bond between humans and dogs while building a community of pet enthusiasts.",
    tags: ["Flutter", "Firebase"],
  },
  {
    img: `/image/blog3.svg`,
    title: "Hive Me Up",
    desc: "A smart event discovery app that provides real-time notifications about concerts, festivals, and workshops near you. It helps users stay connected with local happenings and never miss an exciting event.",
    tags: ["Flutter", "Firebase", "Google Maps API"],
  },
  // {
  //   img: `${getImagePrefix()}image/blog4.svg`,
  //   title: "Tech Gadgets E-commerce",
  //   desc: "Full-stack e-commerce platform specializing in electronics with inventory management and payment integration.",
  //   tags: ["Next.js", "Stripe", "Sanity CMS"],
  // },
  // {
  //   img: `${getImagePrefix()}image/blog-1.svg`,
  //   title: "Travel Companion App",
  //   desc: "Travel planning application with itinerary management, expense tracking, and location-based recommendations.",
  //   tags: ["React Native", "Express", "PostgreSQL"],
  // },
  // {
  //   img: `${getImagePrefix()}image/blog2.svg`,
  //   title: "Health & Wellness Portal",
  //   desc: "Healthcare platform connecting patients with providers, featuring appointment scheduling and telehealth capabilities.",
  //   tags: ["Vue.js", "Laravel", "WebRTC"],
  // },
  // {
  //   img: `${getImagePrefix()}image/blog3.svg`,
  //   title: "Task Management System",
  //   desc: "Productivity application with team collaboration features, time tracking, and project analytics.",
  //   tags: ["React", "Redux", "GraphQL"],
  // },
  // {
  //   img: `${getImagePrefix()}image/blog4.svg`,
  //   title: "Real Estate Platform",
  //   desc: "Property listing service with advanced search filters, virtual tours, and agent connection features.",
  //   tags: ["Next.js", "Supabase", "Cloudinary"],
  // },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Projects() {
  return (
    <section className="py-28 px-8 bg-white">
      <div className="container mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography className="mb-2 font-semibold uppercase text-gray-600 tracking-wider text-sm">
            Portfolio
          </Typography>
          <Typography variant="h2" className="mb-4 font-bold text-gray-900">
            Featured Projects
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-700 lg:w-6/12 text-lg"
          >
            A selection of my work showcasing full-stack development
            capabilities, from responsive web applications to cross-platform
            mobile solutions.
          </Typography>
        </motion.div>
      </div>
      <motion.div
        className="container mx-auto grid grid-cols-1  md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {PROJECTS.map((props, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <ProjectCard {...props} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
