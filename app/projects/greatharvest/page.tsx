import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function GreatHarvest() {
  const tags = ["Next.js", "TypeScript", "React.js", "Tailwind CSS"];
  return (
    <div>
      <title>Great Harvest Project | Danielle Lindblom Portfolio</title>
      <h1 className="text-3xl my-4 text-balance">
        Great Harvest Bread Company
      </h1>
      <Image
        src="/projectSummary/greatharvestcover.jpg"
        alt="Great Harvest website"
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
          With a 6 day window from design approval to customer deadline, this
          freelance project had a very fast turnaround for coding. I worked with
          a small team of 3 designers and 2 other developers to construct the
          website, successfully meeting the customer requirements. <br />
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
        <ul className="list-disc list-outside ms-8 text-lg space-y-4 marker:text-primary text-balance">
          <li>Our History section</li>
          <li>FAQ section with custom, accessible accordion</li>
          <li>Our Revolutionary Process section</li>
          <li>Footer section</li>
          <li>
            Detailed accessibility testing with Axe dev tools and code review
          </li>
          <li>Identifying and resolving 24+ accessibility issues</li>
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
      <div className="flex flex-row flex-wrap gap-8 my-12">
        <Button asChild size="lg">
          <Link href="https://franchising.greatharvest.com/" target="_blank">
            Live Site <Globe />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link
            href="https://github.com/kepsteen/great-harvest-landing-page"
            target="_blank"
          >
            Code <FaGithub />
          </Link>
        </Button>
      </div>
    </div>
  );
}
