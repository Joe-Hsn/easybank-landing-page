import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <header className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1>Next generation digital banking</h1>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
          <Link href="#request-invite" className="btn">
            Request Invite
          </Link>
        </div>
        <Image
          src="/image-mockups.png"
          alt="mockups"
          width={767}
          height={939}
        />
      </div>
    </header>
  );
}
