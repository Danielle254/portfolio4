"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="py-4 border-t-2 border-accent dark:border-foreground/50"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto flex flex-col items-start"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-primary text-base font-semibold mb-4"
        >
          Danielle Lindblom - Frontend Software Developer
          <br />
          Minneapolis, MN
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-xs sm:text-sm mb-4"
        >
          This site built with <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">React.js</span>,{" "}
          <span className="font-semibold">TypeScript</span>,{" "}
          <span className="font-semibold">Tailwind CSS</span>, and{" "}
          <span className="font-semibold">shadcn/ui</span>.{" "}
          <a
            href="https://github.com/Danielle254/portfolio4"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:text-primary hover:underline"
          >
            View code
          </a>
          .
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-xs sm:text-sm mb-4"
        >
          &copy; {currentYear} Danielle Lindblom. All rights reserved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex space-x-6"
        >
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            href="mailto:danielle.lindblom@gmail.com"
            className="hover:text-primary transition-colors duration-200"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope className="h-6 w-6" aria-hidden="true" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            href="https://github.com/Danielle254"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub className="h-6 w-6" aria-hidden="true" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            href="https://www.linkedin.com/in/danielle-lindblom/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
