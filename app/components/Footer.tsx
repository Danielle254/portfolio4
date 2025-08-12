import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import social icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="text-primary text-base font-semibold mb-4">
          Danielle Lindblom - Frontend Software Developer
        </p>
        <p className="text-xs sm:text-sm mb-4">
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
        </p>
        <p className="text-xs sm:text-sm mb-4">
          &copy; {currentYear} Danielle Lindblom. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="mailto:danielle.lindblom@gmail.com"
            className="hover:text-primary transition-colors duration-200"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/Danielle254"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/danielle-lindblom/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
