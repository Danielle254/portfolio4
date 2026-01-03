"use client";

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
import { motion } from "framer-motion";

export default function ProjectCard({
  projectSummary,
}: {
  projectSummary: ProjectSummaryType;
}) {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Card className="h-full flex flex-col justify-between">
        <CardHeader className="mb-2">
          <div className="flex flex-wrap gap-2">
            {projectSummary.type.map((chip) => (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                key={chip}
                className="rounded-full text-sm bg-accent px-4 py-1 dark:bg-foreground/80 dark:text-background"
              >
                {chip}
              </motion.p>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-bold">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              {projectSummary.title}
            </motion.h3>
          </CardTitle>
          <CardDescription className="pb-4 text-foreground text-base">
            {projectSummary.description}
          </CardDescription>
          <Image
            alt=""
            src={projectSummary.img}
            sizes="100vw"
            width={0}
            height={0}
            className="border-1 border-black shadow h-auto w-full my-4"
          />
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-row gap-2 text-xs flex-wrap py-4"
          >
            {projectSummary.tags.map((tag) => (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                key={tag}
                className="font-medium rounded-full px-2 py-1 border-[1px] border-primary/50"
              >
                {tag}
              </motion.li>
            ))}
          </motion.ul>
        </CardContent>
        <CardFooter className="flex flex-col items-start min-[440px]:flex-row gap-4 flex-wrap">
          <Button asChild>
            <Link
              href={projectSummary.links[0]}
              aria-label={`${projectSummary.title} Details`}
            >
              Details <ChevronsRight aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link
              href={projectSummary.links[1]}
              className="underline p-0 m-0"
              target="_blank"
              aria-label={`${projectSummary.title}  live site`}
            >
              Website {/* <Globe aria-hidden="true" /> */}
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link
              href={projectSummary.links[2]}
              className="underline"
              target="_blank"
              aria-label={`${projectSummary.title} code`}
            >
              Code {/* <Code aria-hidden="true" /> */}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
