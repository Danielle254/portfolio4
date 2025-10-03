"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Elfgorithm() {
  const tags = [
    "Next.js",
    "TypeScript",
    "React.js",
    "OpenAI API",
    "shadcn/ui",
    "Tailwind CSS",
    "Jest",
    "React Testing Library",
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
      <title>Elfgorithm Project | Danielle Lindblom Portfolio</title>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl my-4"
      >
        Elfgorithm
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
          src="https://www.loom.com/embed/14a0a486a85748c284de8a36e3b319e3?sid=f7470a0b-0928-4028-9a8a-653a7d4f48c2?hideEmbedTopBar=true"
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
          Elfgorithm is a Secret Santa SaaS app created as a part of the
          Gridiron Survivor Software Engineering Apprenticeship. This website
          allows users to set up a gift exchange group and utilizes the OpenAI
          API to generate gift suggestions based on the recipient's preferences.
          <br />
          <br />
          This project provided a good opportunity to get up to speed on an
          unfamiliar, complex code base and quickly begin contributing. I
          conducted two significant audits of this site - identifying gaps in
          testing and accessibility - and generated prioritized tickets
          organized into epics.
          <br />
          <br />I also enjoyed working directly in the code base, making UI/UX
          and functionality improvements as well as addressing bugs.
        </motion.p>
      </motion.section>
      <motion.section>
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
            Comprehensive audit identifying gaps in testing
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            200+ tickets generated for the creation of unit, integration, and
            E2E tests
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Created logout feature
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Championed an accessibility audit of the entire site
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Identified 24+ accessibility issues across 3 pages
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Created onboarding training on our PR processes
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Addressed accessibility color contrast issue
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
          <Link
            href="https://staging.secretsanta-exchange.com/"
            target="_blank"
          >
            Live Site <Globe aria-hidden="true" />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link
            href="https://github.com/LetsGetTechnical/elecretanta"
            target="_blank"
          >
            Code <FaGithub aria-hidden="true" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
