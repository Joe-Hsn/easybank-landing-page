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
  let icons = ["facebook", "twitter", "instagram", "youtube", "pinterest"];
  return (
    <footer>
      <div className="footer__container">
        <div className="block-1st">
          <Link href="/" className="logo">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={140}
              height={20}
              priority
            />
          </Link>
          <div className="social-icons">
            {icons.map((icon) => (
              <Link href={`#${icon}-account`} key={icon}>
                <Image
                  src={`/icon-${icon}.svg`}
                  alt={icon}
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </div>
        </div>
        <nav className="block-2nd">
          <ul>
            {links.slice(0, 3).map((link, index) => (
              <li key={index}>
                <a href={`#${link.toLowerCase().replace(/ /g, "-")}`}>{link}</a>
              </li>
            ))}
          </ul>
          <ul>
            {links.slice(3, links.length).map((link, index) => (
              <li key={index}>
                <a href={`#${link.toLowerCase().replace(/ /g, "-")}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="block-3rd">
          <a href="#request-invite" className="btn">
            Request Invite
          </a>
          <span>© Easybank. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
