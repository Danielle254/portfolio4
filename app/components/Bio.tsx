import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { RxAccessibility } from "react-icons/rx";

export default function Bio() {
  return (
    <section className="flex items-center justify-center py-10" id="bio">
      <title>Danielle Lindblom Portfolio</title>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              className="h-48 w-48 rounded-full object-cover border-4 border-gray-700 shadow-lg"
              src="/headshot.jpg"
              alt="Danielle Lindblom"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-4">
              Hi, I'm <span className="text-primary">Danielle</span>
            </h1>
            <p className="text-lg text-foreground sm:text-xl max-w-2xl mx-auto md:mx-0 text-balance">
              I'm a{" "}
              <span className="font-bold">Frontend Software Developer</span>{" "}
              specializing in user experience and web accessibility.
              <br />
              Located in Minneapolis, MN and open to new opportunities!
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
              <div className="flex flex-col items-center">
                <SiNextdotjs className="h-8 w-8 text-primary" />
                <span className="mt-2 text-xs text-gray-600">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiReact className="h-8 w-8 text-primary" />
                <span className="mt-2 text-xs text-gray-600">React.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="h-8 w-8 text-primary" />
                <span className="mt-2 text-xs text-gray-600">TypeScript</span>
              </div>
              <div className="flex-col items-center hidden sm:flex">
                <SiTailwindcss className="h-8 w-8 text-primary" />
                <span className="mt-2 text-xs text-gray-600">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <RxAccessibility className="h-8 w-8 text-primary" />
                <span className="mt-2 text-xs text-gray-600">
                  Accessibility
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
