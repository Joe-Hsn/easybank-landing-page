import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Props = {};

const links: string[] = ["Home", "About", "Contact", "Blog", "Careers"];

export default function Navbar({}: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={140} height={20} priority />
      </Link>
      <ul className={!toggle ? "hidden lg:flex" : "block lg:flex"}>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={`#${link.toLowerCase()}`}
              onClick={() => {
                setToggle(false);
              }}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <a href="#request-invite" className="btn">
        Request Invite
      </a>
      <button
        className="nav__toggler"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {!toggle ? (
          <Image
            width={24}
            height={11}
            src="/icon-hamburger.svg"
            alt="menu toggler's icon"
          />
        ) : (
          <Image
            width={18}
            height={19}
            src="/icon-close.svg"
            alt="menu close's icon"
          />
        )}
      </button>
    </nav>
  );
}
