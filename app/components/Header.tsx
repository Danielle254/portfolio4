"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Download,
  Lightbulb,
  LightbulbOff,
  HeartHandshake,
  CircleChevronLeft,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  /* const pathname = usePathname(); */
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex flex-row justify-between items-center md:grid md:grid-cols-3 md:pt-2 md:pb-8">
      <ul className="hidden md:flex md:flex-row md:mt-4 ">
        <li>
          <Button variant="link" asChild className="px-0 pr-4">
            <Link
              href="/"
              /* className={`[&.active]:underline ${
                pathname === "/" ? "active" : ""
              }`} */
              className="text-lg lg:text-[16px]"
            >
              Home
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="link" asChild>
            <Link
              href="/#portfolio"
              /*               className={`[&.active]:underline ${
                pathname === "/portfolio" ? "active" : ""
              }`} */
              className="text-lg lg:text-[16px]"
            >
              Portfolio
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="link" asChild>
            <Link href="/resume.pdf" className="text-lg lg:text-[16px]">
              Resume
              <Download />
            </Link>
          </Button>
        </li>
      </ul>
      <div className="relative h-[100px] w-[200px] lg:h-[150px] lg:w-[300px] md:mx-auto focus-within:outline-2">
        <Link href="/">
          <Image
            src={theme === "light" ? "/logo.png" : "/logo-dark.png"}
            layout="fill"
            alt="Danielle Lindblom - Frontend Developer"
          />
        </Link>
      </div>
      <button
        className="md:hidden cursor-pointer"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="open menu"
      >
        <CircleChevronLeft
          aria-hidden="true"
          size={32}
          className="mr-4"
          strokeWidth={1}
        />
      </button>
      <MobileNav
        isOpen={mobileMenuOpen}
        closeMenu={() => setMobileMenuOpen(false)}
      />
      <div className="hidden md:flex flex-row gap-4 mt-4 justify-self-end">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <HeartHandshake />
              Connect
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-32 flex flex-col gap-2" align="end">
            <DropdownMenuItem>
              <Link
                href="mailto:danielle.lindblom@gmail.com"
                className="flex flex-row items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                Email
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="https://www.linkedin.com/in/danielle-lindblom/"
                target="_blank"
                className="flex flex-row items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                LinkedIn
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="https://github.com/Danielle254"
                target="_blank"
                className="flex flex-row items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                GitHub
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" title="choose page theme" size="sm">
              <Lightbulb />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="end">
            <DropdownMenuItem>
              <Button variant="ghost" onClick={() => setTheme("light")}>
                <Lightbulb />
                Light Mode
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="ghost" onClick={() => setTheme("dark")}>
                <LightbulbOff />
                Dark Mode
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
