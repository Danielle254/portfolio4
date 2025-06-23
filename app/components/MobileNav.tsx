import Link from "next/link";
import React from "react";

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <button>Close</button>
      <ul>
        <li>
          <Link href="">Bio</Link>
        </li>
        <li>
          <Link href="">Portfolio</Link>
        </li>
        <li>
          <Link href="">Resume</Link>
        </li>
      </ul>
      <div>socials</div>
    </div>
  );
}
