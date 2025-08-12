import React from "react";
import {
  Card,
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
import Link from "next/link";

export default function ProjectCard({
  projectSummary,
}: {
  projectSummary: ProjectSummaryType;
}) {
  return (
    <div className="max-w-[480px] basis-[300px] flex-auto">
      <Card className="h-full flex flex-col justify-between">
        <CardHeader>
          <div className="flex flex-row justify-between items-center mb-4">
            <CardTitle className="text-lg">
              <Link href={projectSummary.links[0]} tabIndex={-1}>
                {projectSummary.title}
              </Link>
            </CardTitle>
            <p className="rounded-full text-sm bg-accent px-2">
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
          <Link href={projectSummary.links[0]} tabIndex={-1}>
            <Image
              alt="go to homepage"
              src={projectSummary.img}
              height={350}
              width={450}
            />
          </Link>
          <CardDescription>{projectSummary.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex flex-row gap-2">
          <Button asChild>
            <Link
              href={projectSummary.links[0]}
              aria-label={`${projectSummary.title} Details`}
            >
              Details »
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href={projectSummary.links[1]}
              target="_blank"
              aria-label={`${projectSummary.title}  live site`}
            >
              <Globe />
              Site
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href={projectSummary.links[2]}
              target="_blank"
              aria-label={`${projectSummary.title} code`}
            >
              <Code />
              Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
