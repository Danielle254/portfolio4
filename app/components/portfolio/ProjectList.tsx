"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import type { ProjectSummaryType } from "./ProjectSummaryType";

const projectSummaryData = [
  {
    title: "Quantiiv",
    description: "Business website",
    tags: ["Next.js", "TypeScript", "React.js", "Tailwind CSS", "shadcn/ui"],
    type: "Freelance",
    links: [
      "/projects/quantiiv",
      "https://quantiiv.com/",
      "https://github.com/devanrivera98/quantiiv-v2",
    ],
    img: "/projectSummary/quantiivCover.png",
  },
  {
    title: "Great Harvest Baking",
    description: "Marketing landing page",
    tags: ["Next.js", "TypeScript", "React.js", "Tailwind CSS"],
    type: "Freelance",
    links: [
      "/projects/greatharvest",
      "https://franchising.greatharvest.com/",
      "https://github.com/kepsteen/great-harvest-landing-page",
    ],
    img: "/projectSummary/greatharvestcover.jpg",
  },
  {
    title: "Elfgorithm",
    description: "Secret Santa SaaS app",
    tags: [
      "Next.js",
      "TypeScript",
      "React.js",
      "OpenAI API",
      "shadcn/ui",
      "Tailwind CSS",
      "Jest",
      "React Testing Library",
    ],
    type: "Apprenticeship",
    links: [
      "/projects/elfgorithm",
      "https://staging.secretsanta-exchange.com/",
      "https://github.com/LetsGetTechnical/elecretanta",
    ],
    img: "/projectSummary/elfcover.jpg",
  },
  {
    title: "Service Dogs Around Town",
    description: "Community navigation tool",
    tags: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Google Maps API",
      "Material UI",
      "Firebase",
    ],
    type: "Solo",
    links: [
      "/projects/servicedogsaroundtown",
      "https://servicedogsaroundtown.vercel.app/",
      "https://github.com/Danielle254/sdat_v3",
    ],
    img: "/projectSummary/sdatv3cover.png",
  },
];

export default function ProjectList() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      id="portfolio"
      className="pb-12"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-2xl my-4"
      >
        Portfolio
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch">
        {projectSummaryData.map((project: ProjectSummaryType) => (
          <ProjectCard projectSummary={project} key={project.title} />
        ))}
      </div>
    </motion.section>
  );
}
