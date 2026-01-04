"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PuzzleDogs() {
  const tags = [
    "Next.js",
    "TypeScript",
    "React.js",
    "Tailwind CSS",
    "shadcn/ui",
    "Vercel",
  ];
  const [videoIsLoading, setVideoIsLoading] = useState(true);

  function hideSpinner() {
    setVideoIsLoading(false);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <title>Puzzle Dogs Project | Danielle Lindblom Portfolio</title>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl my-4 text-balance"
      >
        Puzzle Dogs
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto h-0 pb-[56%] lg:pb-[56%]"
      >
        {videoIsLoading ? (
          <div className="flex flex-col items-center pt-12">
            <RotatingLines
              visible={true}
              width="90"
              strokeColor="gray"
              strokeWidth="2"
              animationDuration="0.99"
              aria-hidden="true"
            />
          </div>
        ) : null}
        <iframe
          className="absolute w-full h-full left-0 top-0 rounded"
          src="https://www.loom.com/embed/db3d1579ad0a4738b33d4ba7ce869706?sid=91c5eb60-1c7e-4d2e-9fa8-c1cdf5c778fe?hideEmbedTopBar=true"
          allowFullScreen
          title="screenshare demo of project website features"
          aria-hidden="true"
          onLoad={hideSpinner}
        ></iframe>
      </motion.div>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-lg/8 mt-8 text-pretty"
        >
          This is a website I developed for a local small business in Minnesota.
          Its primary goal is to provide information about her dog breeding
          program to prospective puppy adopters and to reduce the amount of
          inquiries she receives about common questions. The site features a
          modern, clean design and is fully responsive and accessible.
          <br />
          <br />
          I worked closely with the business owner to understand her needs and
          goals for the website. I then designed and developed the site using
          Next.js, TypeScript, React.js, and Tailwind CSS. I also implemented
          several accessibility features to ensure that the site is usable by
          all visitors.
          <br />
          <br />
          It was fun to create a site that reflects the personality and values
          of the business while also providing a great user experience. I
          enjoyed having full control of the process, from initial design and
          site organization all the way to coding and deployment. <br />
          <br />
          The site is minimal and clean on purpose to allow for easy navigation
          and to ensure it is easily accessible to all users. <br />
          <br />
          This is a large project, and there will be at least two more phases of
          development to add more features and functionality in 2026. Stay
          tuned!
        </motion.p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-2xl mb-8 mt-12 font-semibold"
        >
          Highlights
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="list-disc list-outside ms-8 text-lg space-y-4 marker:text-primary text-balance"
        >
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Led scoping activities with the customer
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Created a project outline, prioritizing and organizing features by
            phase
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Created wireframe designs for customer approval
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Ensured all interactive elements met WCAG 2.1 AA accessibility
            standards
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Worked with the customer to request and organize assets like copy
            and images
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Created an original design that reflects the business's personality
            and values
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Built and deployed 3-page, responsive website for Phase 1
          </motion.li>
        </motion.ul>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-row gap-4 text-sm flex-wrap pt-12"
        >
          {tags.map((tag) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              key={tag}
              className="border-2 border-primary rounded-full bg-card px-2"
            >
              {tag}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-row flex-wrap gap-8 my-12"
      >
        <Button asChild size="lg">
          <Link href="https://puzzle-dogs.vercel.app" target="_blank">
            Live Site <Globe aria-hidden="true" />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link
            href="https://github.com/Danielle254/puzzle-dogs"
            target="_blank"
          >
            Code <FaGithub aria-hidden="true" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
