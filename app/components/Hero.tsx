"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { RxAccessibility } from "react-icons/rx";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-center py-10"
      id="bio"
    >
      <title>Danielle Lindblom Portfolio</title>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 mb-6 md:mb-0"
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="h-48 w-48 rounded-full object-cover border-4 border-foreground/80 shadow-lg"
              src="/headshot.jpg"
              alt="Danielle Lindblom"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-4"
            >
              Hi, I'm <span className="text-primary">Danielle</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-lg text-foreground sm:text-xl max-w-2xl mx-auto md:mx-0 text-balance"
            >
              I'm a{" "}
              <span className="font-bold">Frontend Software Developer</span>{" "}
              specializing in user experience and web accessibility.
              <br />
              Located in Minneapolis, MN and open to new opportunities!
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mt-8 flex flex-wrap justify-center md:justify-start gap-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center"
              >
                <SiNextdotjs
                  className="h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="mt-2 text-xs text-foreground/90"
                >
                  Next.js
                </motion.span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center"
              >
                <SiReact className="h-8 w-8 text-primary" aria-hidden="true" />
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="mt-2 text-xs text-foreground/90"
                >
                  React.js
                </motion.span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center"
              >
                <SiTypescript
                  className="h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <motion.span className="mt-2 text-xs text-foreground/90">
                  TypeScript
                </motion.span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex-col items-center hidden sm:flex"
              >
                <SiTailwindcss
                  className="h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <motion.span className="mt-2 text-xs text-foreground/90">
                  Tailwind CSS
                </motion.span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center"
              >
                <RxAccessibility
                  className="h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="mt-2 text-xs text-foreground/90"
                >
                  Accessibility
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
