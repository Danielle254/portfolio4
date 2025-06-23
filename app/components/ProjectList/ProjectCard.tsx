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

export default function ProjectCard({
  projectSummary,
}: {
  projectSummary: ProjectSummaryType;
}) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{projectSummary.title}</CardTitle>
          <ul className="flex flex-row gap-2 text-xs">
            {projectSummary.tags.map((tag) => (
              <li key={tag} className="border-[1px] rounded-full bg-card px-1">
                {tag}
              </li>
            ))}
          </ul>
        </CardHeader>
        <CardContent>
          <CardDescription>{projectSummary.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex flex-row gap-2">
          <Button>Details »</Button>
          <Button variant="link">Site</Button>
          <Button variant="link">Code</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
