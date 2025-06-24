import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectSummaryType } from "./ProjectSummaryType";
import { Button } from "@/components/ui/button";
import { Globe, Code } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({
  projectSummary,
}: {
  projectSummary: ProjectSummaryType;
}) {
  return (
    <div className="w-[400px]">
      <Card>
        <CardHeader>
          <div className="flex flex-row justify-between items-center mb-4">
            <CardTitle className="text-lg">{projectSummary.title}</CardTitle>
            <p className="rounded-full text-sm bg-linear-to-b from-gray-200 to-gray-100 px-2">
              {projectSummary.type}
            </p>
          </div>

          <ul className="flex flex-row gap-2 text-xs flex-wrap">
            {projectSummary.tags.map((tag) => (
              <li key={tag} className="border-[1px] rounded-full bg-card px-1">
                {tag}
              </li>
            ))}
          </ul>
        </CardHeader>
        <CardContent>
          <Image alt="" src={projectSummary.img} height={250} width={350} />
          <CardDescription>{projectSummary.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex flex-row gap-2">
          <Button>Details »</Button>
          <Button variant="ghost">
            <Globe />
            Site
          </Button>
          <Button variant="ghost">
            <Code />
            Code
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
