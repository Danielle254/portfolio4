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
        <p className="text-lg/8 mt-8">
          Elfgorithm is a secret Santa SaaS app created as a part of the
          Gridiron Survivor Software Engineering Apprenticeship. This website
          allows users to set up a gift exchange group and utilizes the OpenAI
          API to generate gift suggestions based on the recipient's preferences.
          <br />
          <br />I also conducted detailed accessibility audits, using both
          subject matter expert knowledge as well as automated tools. I
          inspected the code and the browser DOM, and I utilized Axe dev tools
          for testing. Overall, I caught and fixed 24+ critical accessibility
          issues. <br />
          <br />
          This was a great real world project and a wonderful experience working
          directly with a paying customer.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-8 mt-12 font-semibold">Key Contributions</h2>
        <ul className="list-disc list-inside text-lg space-y-4 marker:text-primary">
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
