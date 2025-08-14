import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Globe, Code } from "lucide-react";

export default function Quantiiv() {
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
        <p>description</p>
      </section>
      <section>
        <h2 className="text-2xl my-8">Key Contributions</h2>
        <ul className="list-disc list-inside">
          <li>item</li>
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
