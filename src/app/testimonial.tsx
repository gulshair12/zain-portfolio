"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Michael Chen",
    position: "Technical Manager",
    company: "Apple Inc.",
    content:
      "Zain delivered an exceptional mobile application that exceeded our performance expectations. His attention to detail and problem-solving skills made him invaluable to our project timeline.",
    avatar: `${getImagePrefix()}image/avatar1.jpg`,
    image: `/image/avatar1.jpg`,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Product Director",
    company: "Google",
    content:
      "Working with Zain on our web platform was a seamless experience. His full-stack expertise and ability to translate complex requirements into elegant solutions impressed our entire team.",
    avatar: `${getImagePrefix()}image/avatar2.jpg`,
    image: `/image/avatar2.jpg`,
  },
  {
    id: 3,
    name: "David Martinez",
    position: "Startup Founder",
    company: "TechVision",
    content:
      "Zain transformed our MVP into a scalable product with clean architecture and optimal performance. His technical guidance throughout the development process was invaluable.",
    avatar: `${getImagePrefix()}image/avatar3.jpg`,
    image: `/image/avatar3.jpg`,
  },
];

export function Testimonial() {
  const [active, setActive] = useState(1);

  const activeTestimonial =
    TESTIMONIALS.find((t) => t.id === active) || TESTIMONIALS[0];

  return (
    <section className="py-12 px-8 lg:py-24 bg-white">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-16 text-center">
          <Typography variant="h2" className="mb-4 font-bold text-gray-900">
            Client Testimonials
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-700 lg:w-8/12 text-lg"
          >
            Feedback from professionals I&apos;ve collaborated with. Building
            trust and delivering exceptional results is at the core of my work
            ethic.
          </Typography>
        </div>

        <Card
          color="transparent"
          shadow={false}
          className="lg:flex-row border border-gray-200 rounded-xl"
        >
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between p-8">
            <div className="w-full mb-10 lg:mb-0 lg:pr-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Typography
                    variant="h3"
                    className="mb-6 font-semibold text-gray-900"
                  >
                    {activeTestimonial.name.split(" ")[0]}&apos;s Project
                  </Typography>
                  <Typography className="mb-6 w-full font-normal !text-gray-600 text-lg leading-relaxed">
                    &quot;{activeTestimonial.content}&quot;
                  </Typography>
                  <div className="mb-8">
                    <Typography
                      variant="h6"
                      className="mb-1 font-semibold text-gray-900"
                    >
                      {activeTestimonial.name}
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal !text-gray-600"
                    >
                      {activeTestimonial.position} @ {activeTestimonial.company}
                    </Typography>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4">
                {TESTIMONIALS.map((testimonial) => (
                  <Avatar
                    key={testimonial.id}
                    variant="rounded"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    size="sm"
                    className={`cursor-pointer transition-all duration-300 ${
                      active === testimonial.id
                        ? "ring-2 ring-gray-900 ring-offset-2 opacity-100 scale-110"
                        : "opacity-60 hover:opacity-80"
                    }`}
                    onClick={() => setActive(testimonial.id)}
                  />
                ))}
              </div>
            </div>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="hidden md:block h-80 w-full sm:w-72 shrink-0 rounded-lg overflow-hidden border border-gray-200"
            >
              <Image
                width={400}
                height={400}
                alt={`${activeTestimonial.name} testimonial`}
                src={activeTestimonial.image}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
