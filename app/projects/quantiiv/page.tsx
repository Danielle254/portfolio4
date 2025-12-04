"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Quantiiv() {
  const tags = [
    "Next.js",
    "TypeScript",
    "React.js",
    "Tailwind CSS",
    "shadcn/ui",
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
      <title>Quantiiv Project | Danielle Lindblom Portfolio</title>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl my-4"
      >
        Quantiiv
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
          src="https://www.loom.com/embed/5cf5bd4333c1475789466e9ccb9f6b8d?sid=e7c641c6-2929-4863-84fc-a9fb7707d497?hideEmbedTopBar=true"
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
          className="text-lg/8 mt-8 text-balance"
        >
          This freelance project was to build an entire business website for
          Quantiiv - a restaurant industry consultancy that utilizes AI and
          analytics. I worked with a small team of designers and developers to
          execute this in two, 1-week sprints.
          <br />
          <br />
          The first deployment included a Home page, a Contact page, and basic
          content. This was turned around quickly so that the customer could
          launch a time sensitive marketing campaign.
          <br />
          <br />
          The second sprint added a testimonials section, a headless WordPress
          blog integration, and an About page. As of August 2025, this has not
          yet been deployed by the customer as they are working on collecting
          testimonials and creating their library of blog posts.
          <br />
          <br />
          As part of this project, I also performed internal project management
          for the developer team and conducted thorough accessibility audits to
          ensure delivery of a quality product.
          <br />
          *Note: the GitHub repo is currently private but will be made public
          upon the launch of V2.
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
          Key Contributions
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
            Built entire Contact and About pages, including form
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Built an interactive, accessible wheel of popovers
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Conducted detailed accessibility audits using code analysis and
            testing tools
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Identified and resolved 32+ accessibility issues during production
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Created the testimonials section of the home page
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Worked from detailed Figma designs and ensured cross-browser
            compatibile code
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
        className="flex flex-row flex-wrap gap-8 mt-24 mb-12"
      >
        <Button asChild size="lg">
          <Link href="https://quantiiv-v2.vercel.app/" target="_blank">
            V2 Preview <Globe aria-hidden="true" />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link
            href="https://github.com/devanrivera98/quantiiv-v2"
            target="_blank"
          >
            Code <FaGithub aria-hidden="true" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
