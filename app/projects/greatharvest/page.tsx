"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function GreatHarvest() {
  const tags = ["Next.js", "TypeScript", "React.js", "Tailwind CSS"];
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
      <title>Great Harvest Project | Danielle Lindblom Portfolio</title>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl my-4 text-balance"
      >
        Great Harvest Bread Company
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
          src="https://www.loom.com/embed/39246c723c2e4f79a1aefb5c25213a56?sid=91c5eb60-1c7e-4d2e-9fa8-c1cdf5c778fe?hideEmbedTopBar=true"
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
          With a 6 day window from design approval to customer deadline, this
          freelance project had a very fast turnaround for coding. I worked with
          a small team of 3 designers and 2 other developers to construct the
          website, successfully meeting the customer requirements. <br />
          <br />I also conducted detailed accessibility audits, using both
          subject matter expert knowledge as well as automated tools. I
          inspected the code and the browser DOM, and I utilized Axe dev tools
          for testing. Overall, I caught and fixed 24+ critical accessibility
          issues. <br />
          <br />
          This was a great real world project and a wonderful experience working
          directly with a paying customer.
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
            Our History section
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            FAQ section with custom, accessible accordion
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Our Revolutionary Process section
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Footer section
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Detailed accessibility testing with Axe dev tools and code review
          </motion.li>
          <motion.li>
            Identifying and resolving 24+ accessibility issues
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
          <Link href="https://franchising.greatharvest.com/" target="_blank">
            Live Site <Globe aria-hidden="true" />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link
            href="https://github.com/kepsteen/great-harvest-landing-page"
            target="_blank"
          >
            Code <FaGithub aria-hidden="true" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
