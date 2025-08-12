import React from "react";
import ProjectCard from "./ProjectCard";
import { promises as fs } from "fs";
import type { ProjectSummaryType } from "./ProjectSummaryType";

export default async function ProjectList() {
  const file = await fs.readFile(
    process.cwd() + "/app/components/portfolio/projectSummaries.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return (
    <section id="portfolio">
      <h2 className="text-2xl my-4">Portfolio</h2>
      <div className="flex flex-wrap gap-8 justify-center items-stretch">
        {data.map((project: ProjectSummaryType) => (
          <ProjectCard projectSummary={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
