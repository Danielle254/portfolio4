"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
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
      <Image
        src="/projectSummary/elfcover.jpg"
        alt="Elfgorithm website"
        sizes="100vw"
        width={0}
        height={0}
        style={{
          borderRadius: "5px",
          border: "1px solid black",
          width: "100%",
          margin: "16px 0",
          height: "auto",
        }}
      />
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
