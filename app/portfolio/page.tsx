import React from "react";
import ProjectCard from "./ProjectCard";
import { promises as fs } from "fs";
import type { ProjectSummaryType } from "./ProjectSummaryType";

export default async function ProjectList() {
  const file = await fs.readFile(
    process.cwd() + "/app/portfolio/projectSummaries.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return (
    <div>
      <title>Projects - Danielle Lindblom Portfolio</title>
      <h1 className="text-2xl my-4">Portfolio</h1>
      <div className="flex flex-wrap justify-between">
        {data.map((project: ProjectSummaryType) => (
          <ProjectCard projectSummary={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
