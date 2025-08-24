"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Quantiiv() {
  const tags = [
    "Next.js",
    "TypeScript",
    "React.js",
    "Tailwind CSS",
    "shadcn/ui",
  ];
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
      <Image
        src="/projectSummary/quantiivCover.png"
        alt="Quantiiv website"
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
          <Link href="https://quantiiv.com" target="_blank">
            Live Site <Globe aria-hidden="true" />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="https://quantiiv-v2.vercel.app/" target="_blank">
            V2 Preview <Globe aria-hidden="true" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
