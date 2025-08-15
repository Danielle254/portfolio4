import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Elfgorithm() {
  const tags = [
    "Next.js",
    "TypeScript",
    "React.js",
    "OpenAI API",
    "shadcn/ui",
    "Tailwind CSS",
    "Jest",
    "React Testing Library",
  ];
  return (
    <div>
      <title>Elfgorithm Project | Danielle Lindblom Portfolio</title>
      <h1 className="text-3xl my-4">Elfgorithm</h1>
      <Image
        src="/projectSummary/elfcover.jpg"
        alt="Elfgorithm website"
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
          Elfgorithm is a secret Santa SaaS app created as a part of the
          Gridiron Survivor Software Engineering Apprenticeship. This website
          allows users to set up a gift exchange group and utilizes the OpenAI
          API to generate gift suggestions based on the recipient's preferences.
          <br />
          <br />
          This project provided a good opportunity to get up to speed on an
          unfamiliar, complex code base and quickly begin contributing. I
          conducted two significant audits of this site - identifying gaps in
          testing and accessibility - and generated prioritized tickets
          organized into epics.
          <br />
          <br />I also enjoyed working directly in the code base, making UI/UX
          and functionality improvements as well as addressing bugs.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-8 mt-12 font-semibold">Key Contributions</h2>
        <ul className="list-disc list-outside ms-8 text-lg space-y-4 marker:text-primary text-balance">
          <li>Comprehensive audit identifying gaps in testing</li>
          <li>
            200+ tickets generated for the creation of unit, integration, and
            E2E tests
          </li>
          <li>Created logout feature</li>
          <li>Championed an accessibility audit of the entire site</li>
          <li>Identified 24+ accessibility issues across 3 pages</li>
          <li>Created onboarding training on our PR processes</li>
          <li>Addressed accessibility color contrast issue</li>
        </ul>
      </section>
      <section>
        <ul className="flex flex-row gap-4 text-sm flex-wrap pt-12">
          {tags.map((tag) => (
            <li
              key={tag}
              className="border-2 border-primary rounded-full bg-gray-200 px-2"
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>
      <div className="flex flex-row flex-wrap gap-8 my-12">
        <Button asChild size="lg">
          <Link
            href="https://staging.secretsanta-exchange.com/"
            target="_blank"
          >
            Live Site <Globe />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link
            href="https://github.com/LetsGetTechnical/elecretanta"
            target="_blank"
          >
            Code <FaGithub />
          </Link>
        </Button>
      </div>
    </div>
  );
}
