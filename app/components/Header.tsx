import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex flex-row justify-between md:flex-col md:items-center p-2">
      <Image
        src="/dev logo.png"
        height={400}
        width={400}
        alt="Danielle Lindblom - Frontend Developer"
      />
      <button className="md:hidden">Menu</button>
      <MobileNav />
      <ul className="hidden md:flex md:flex-row gap-4 bg-linear-to-b from-gray-200 to-gray-100 rounded-full px-2 border-double border-2 border-gray-300">
        <li>
          <Link href="">Bio</Link>
        </li>
        <li>
          <Link href="">Portfolio</Link>
        </li>
        <li>
          <Link href="">Resume</Link>
        </li>
        <li>
          <Link href="">Connect</Link>
        </li>
        <li>
          <Link href="">Mode</Link>
        </li>
      </ul>
    </nav>
  );
}
