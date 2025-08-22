"use client";

import { Typography } from "@material-tailwind/react";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  EyeIcon,
  BugAntIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import { motion } from "framer-motion";

const SKILLS = [
  {
    icon: CodeBracketIcon,
    title: "Frontend Development",
    children:
      "Creating beautiful, functional web experiences using React, Next.js, and modern CSS frameworks. I focus on responsive design and optimal user experience.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Development",
    children:
      "Building cross-platform mobile applications with Flutter. I create responsive, intuitive apps that work seamlessly across iOS and Android.",
  },
  {
    icon: CpuChipIcon,
    title: "Backend Development",
    children:
      "Developing robust server-side solutions with Node.js, Express, and databases. I build scalable APIs and ensure efficient data management.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Performance Optimization",
    children:
      "Optimizing applications for speed and efficiency. I focus on reducing load times, improving SEO, and enhancing overall user experience.",
  },
  {
    icon: EyeIcon,
    title: "UI/UX Design",
    children:
      "Creating interfaces that are both aesthetically pleasing and intuitively functional. I prioritize user-centered design principles.",
  },
  {
    icon: BugAntIcon,
    title: "Testing & QA",
    children:
      "Implementing comprehensive testing strategies to ensure bug-free, secure applications. I maintain code quality through rigorous QA processes.",
  },
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

export function Skills() {
  return (
    <section className="px-8 sm:px-16 pt-28 bg-white">
      <div className="container mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography className="mb-2 font-semibold uppercase text-gray-600 tracking-wider text-sm">
            Expertise
          </Typography>
          <Typography variant="h2" className="mb-4 font-bold text-gray-900">
            Technical Skills
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-700 lg:w-8/12 text-lg"
          >
            Full-stack developer specializing in modern web technologies and
            creating efficient, scalable digital solutions with clean code
            architecture.
          </Typography>
        </motion.div>
      </div>
      <motion.div
        className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {SKILLS.map((props, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <SkillCard {...props} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
