import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  let links = [
    "About Us",
    "Contact",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy",
  ];
  return (
    <footer className="bg-dark-blue">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={140} height={20} priority />
      </Link>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={`#${link.toLowerCase().replace(/ /g, "-")}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="#request-invite" className="btn">
        Request Invite
      </a>
      <span>© Easybank. All Rights Reserved</span>
    </footer>
  );
}
