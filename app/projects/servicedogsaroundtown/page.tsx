"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SDAT() {
  const tags = [
    "Next.js",
    "TypeScript",
    "React.js",
    "Google Maps API",
    "Material UI",
    "Firebase",
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <title>
        Service Dogs Around Town Project | Danielle Lindblom Portfolio
      </title>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl mt-12 text-balance"
      >
        Service Dogs Around Town
      </motion.h1>
      <Image
        src="/projectSummary/sdatv3cover.png"
        alt="Service Dogs Around Town website"
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
          This is a personal project. It was broken down into multiple versions
          and deployments, and is now a multi-user, public application utilizing
          a database and multiple APIs. This is the third and final version of
          this project.
          <br />
          <br />
          The idea for this project came from a personal problem. As a service
          dog handler, I was having difficulty remembering which businesses
          (particularly restuarants) I'd visited where I'd had a good
          experience. I built this React application using the Google Maps
          interface to allow users like myself to easily search for and add
          information about a local business as it relates to the comfort and
          safety of my service dog.
          <br />
          <br />
          There are links to the details on Versions 1 and 2 at the bottom of
          the page.
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
          Key Features
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
            Google login
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Search for a business with Google Maps Autocomplete API
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Rate, review, and save private and public notes about that business
            with a custom form
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            See all existing businesses that have been rated in the library
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Learn more about the app on the About page
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Filter to see just your own entries
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Filter map markers and list view by your favorites
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Navigate to the ADA.gov website for information on federal service
            dog laws
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
        className="flex flex-row flex-wrap gap-x-8 gap-y-4 my-12"
      >
        <Button asChild size="lg">
          <Link
            href="https://servicedogsaroundtown.vercel.app/"
            target="_blank"
          >
            Live Site <Globe aria-hidden="true" />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="https://github.com/Danielle254/sdat_v3" target="_blank">
            Code <FaGithub aria-hidden="true" />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link
            href="https://servicedogsaroundtownv2.vercel.app/"
            target="_blank"
          >
            Version 2 <Globe aria-hidden="true" />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link
            href="https://danielle254.github.io/ServiceDogsAroundTown_v1/"
            target="_blank"
          >
            Version 1 <Globe aria-hidden="true" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
