import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function SDAT() {
  const tags = [
    "Next.js",
    "TypeScript",
    "React.js",
    "Google Maps API",
    "Material UI",
    "Firebase",
  ];
  return (
    <div>
      <title>
        Service Dogs Around Town Project | Danielle Lindblom Portfolio
      </title>
      <h1 className="text-3xl my-4">Service Dogs Around Town</h1>
      <Image
        src="/projectSummary/sdatv3cover.png"
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
        <p className="text-lg/8 mt-8">
          This is a personal project. It was broken down into multiple versions
          and deployments, and is now a multi-user, public application utilizing
          a database and multiple APIs. This is the third and final version of
          this project.
          <br />
          <br />
          The idea for this project came from a personal problem. As a service
          dog handler, I was having difficulty remembering which businesses
          (particularly restuarants) I'd visited where I'd had a good
          experience. I built this React application using the Google Maps
          interface to allow users like myself to easily search for and add
          information about a local business as it relates to the comfort and
          safety of my service dog.
          <br />
          <br />
          There are links to the details on Versions 1 and 2 at the bottom of
          the page.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-8 mt-12 font-semibold">Key Features</h2>
        <ul className="list-disc list-inside text-lg space-y-4 marker:text-primary">
          <li>Google login</li>
          <li>Search for a business with Google Maps Autocomplete API</li>
          <li>
            Rate, review, and save private and public notes about that business
            with a custom form
          </li>
          <li>
            See all existing businesses that have been rated in the library
          </li>
          <li>Learn more about the app on the About page</li>
          <li>Filter to see just your own entries</li>
          <li>Filter map markers and list view by your favorites</li>
          <li>
            Navigate to the ADA.gov website for information on federal service
            dog laws
          </li>
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
            href="https://servicedogsaroundtown.vercel.app/"
            target="_blank"
          >
            Live Site <Globe />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="https://github.com/Danielle254/sdat_v3" target="_blank">
            Code <FaGithub />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link
            href="https://servicedogsaroundtownv2.vercel.app/"
            target="_blank"
          >
            Version 2 <Globe />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link
            href="https://danielle254.github.io/ServiceDogsAroundTown_v1/"
            target="_blank"
          >
            Version 1 <Globe />
          </Link>
        </Button>
      </div>
    </div>
  );
}
