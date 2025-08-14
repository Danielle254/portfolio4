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
import { Globe, Code, ChevronsRight } from "lucide-react";
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
        <CardHeader className="flex flex-row justify-between items-center mb-2">
          <CardTitle className="text-xl font-bold">
            <h3>{projectSummary.title}</h3>
          </CardTitle>
          <p className="rounded-full text-sm bg-accent px-2">
            {projectSummary.type}
          </p>
        </CardHeader>
        <CardContent>
          <CardDescription className="pb-4">
            {projectSummary.description}
          </CardDescription>
          <Image
            alt=""
            src={projectSummary.img}
            height={350}
            width={450}
            className="border-1 border-black shadow"
          />
          <ul className="flex flex-row gap-2 text-xs flex-wrap py-4">
            {projectSummary.tags.map((tag) => (
              <li key={tag} className="border-[1px] rounded-full bg-card px-1">
                {tag}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-row gap-2">
          <Button asChild>
            <Link
              href={projectSummary.links[0]}
              aria-label={`${projectSummary.title} Details`}
            >
              Details <ChevronsRight />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href={projectSummary.links[1]}
              target="_blank"
              aria-label={`${projectSummary.title}  live site`}
            >
              Website <Globe />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href={projectSummary.links[2]}
              target="_blank"
              aria-label={`${projectSummary.title} code`}
            >
              Code <Code />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
