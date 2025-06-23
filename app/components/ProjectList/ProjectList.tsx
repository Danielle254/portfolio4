import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";
import { promises as fs } from "fs";
import type { ProjectSummaryType } from "./ProjectSummaryType";

export default async function ProjectList() {
  const file = await fs.readFile(
    process.cwd() + "/app/components/ProjectList/projectSummaries.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return (
    <section id="projects">
      <h2 className="text-xl my-4">Portfolio</h2>
      <Tabs defaultValue="freelance" className="">
        <TabsList>
          <TabsTrigger value="freelance">Freelance</TabsTrigger>
          <TabsTrigger value="solo">Solo</TabsTrigger>
          <TabsTrigger value="apprenticeship">Apprenticeship</TabsTrigger>
        </TabsList>
        <TabsContent value="freelance">
          <div className="flex flex-col gap-2">
            {data
              .filter(
                (project: ProjectSummaryType) => project.type === "freelance"
              )
              .map((project: ProjectSummaryType) => (
                <ProjectCard projectSummary={project} key={project.title} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="solo">
          <div className="flex flex-col gap-2">
            {data
              .filter((project: ProjectSummaryType) => project.type === "solo")
              .map((project: ProjectSummaryType) => (
                <ProjectCard projectSummary={project} key={project.title} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="apprenticeship">
          <div className="flex flex-col gap-2">
            {data
              .filter(
                (project: ProjectSummaryType) =>
                  project.type === "apprenticeship"
              )
              .map((project: ProjectSummaryType) => (
                <ProjectCard projectSummary={project} key={project.title} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
