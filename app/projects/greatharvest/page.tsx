"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function GreatHarvest() {
  const tags = ["Next.js", "TypeScript", "React.js", "Tailwind CSS"];
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
      <Image
        src="/projectSummary/greatharvestcover.jpg"
        alt="Great Harvest website"
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
