import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function Quantiiv() {
  const tags = [
    "Next.js",
    "TypeScript",
    "React.js",
    "Tailwind CSS",
    "shadcn/ui",
  ];
  return (
    <div>
      <title>Quantiiv Project | Danielle Lindblom Portfolio</title>
      <h1 className="text-3xl my-4">Quantiiv</h1>
      <Image
        src="/projectSummary/quantiivCover.png"
        alt="Quantiiv website"
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
      <section>
        <p className="text-lg/8 mt-8 text-balance">
          This freelance project was to build an entire business website for
          Quantiiv - a restaurant industry consultancy that utilizes AI and
          analytics. I worked with a small team of designers and developers to
          execute this in two, 1-week sprints.
          <br />
          <br />
          The first deployment included a Home page, a Contact page, and basic
          content. This was turned around quickly so that the customer could
          launch a time sensitive marketing campaign.
          <br />
          <br />
          The second sprint added a testimonials section, a headless WordPress
          blog integration, and an About page. As of August 2025, this has not
          yet been deployed by the customer as they are working on collecting
          testimonials and creating their library of blog posts.
          <br />
          <br />
          As part of this project, I also performed internal project management
          for the developer team and conducted thorough accessibility audits to
          ensure delivery of a quality product.
          <br />
          *Note: the GitHub repo is currently private but will be made public
          upon the launch of V2.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-8 mt-12 font-semibold">Key Contributions</h2>
        <ul className="list-disc list-outside ms-8 text-lg space-y-4 marker:text-primary text-balance">
          <li>Built entire Contact and About pages, including form</li>
          <li>Built an interactive, accessible wheel of popovers</li>
          <li>
            Conducted detailed accessibility audits using code analysis and
            testing tools
          </li>
          <li>
            Identified and resolved 32+ accessibility issues during production
          </li>
          <li>Created the testimonials section of the home page</li>
          <li>
            Worked from detailed Figma designs and ensured cross-browser
            compatibile code
          </li>
        </ul>
      </section>
      <section>
        <ul className="flex flex-row gap-4 text-sm flex-wrap pt-12">
          {tags.map((tag) => (
            <li
              key={tag}
              className="border-2 border-primary rounded-full bg-card px-2"
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>
      <div className="flex flex-row flex-wrap gap-8 mt-24 mb-12">
        <Button asChild size="lg">
          <Link href="" target="_blank">
            Live Site <Globe />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="" target="_blank">
            V2 Preview <Globe />
          </Link>
        </Button>
      </div>
    </div>
  );
}
