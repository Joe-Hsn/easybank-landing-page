import Image from "next/image";
import React from "react";

type Props = {};

export default function Choose({}: Props) {
  let chooseBlocks = [
    {
      icon: "/icon-online.svg",
      title: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      icon: "/icon-budgeting.svg",
      title: "Simple Budgeting",
      text: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    },
    {
      icon: "/icon-onboarding.svg",
      title: "Fast Onboarding",
      text: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      icon: "/icon-api.svg",
      title: "Open API",
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <section className="choose">
      <div className="choose__container">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="choose__blocks">
          {chooseBlocks.map((block, index) => {
            let { icon, title, text } = block;
            return (
              <div className="choose__block" key={index}>
                <Image
                  src={icon}
                  alt={`${title}'s icon`}
                  width={50}
                  height={50}
                />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
