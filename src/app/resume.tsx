"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  DocumentTextIcon,
  CodeBracketSquareIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import { motion } from "framer-motion";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children: "Bachelor of Science in Computer Science ",
  },
  {
    icon: DocumentTextIcon,
    children: "Full Stack  Development Certification ",
  },
  {
    icon: CodeBracketSquareIcon,
    children: "Advanced React & Node.js Certification ",
  },
];

export function Resume() {
  const handleDownload = () => {
    // Replace with actual resume download logic
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Update with your actual resume path
    link.download = "Zain_FullStack_Developer_Resume.pdf";
    link.click();
  };

  return (
    <section className="px-8 py-24 bg-gray-50">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className="font-bold text-gray-900 mb-4">
            Education & Credentials
          </Typography>
          <Typography className="mb-6 w-full lg:w-10/12 font-normal !text-gray-700 text-lg">
            Full-stack developer with 5+ years of experience building scalable
            web and mobile applications and digital solutions. Combining technical
            expertise with creative problem-solving to deliver exceptional user
            experiences.
          </Typography>
          <Button
            onClick={handleDownload}
            color="gray"
            className="flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Download Resume
            <ArrowDownTrayIcon className="h-4 w-4" />
          </Button>
        </motion.div>
        <motion.div
          className="col-span-1 grid gap-y-8 lg:ml-auto"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
