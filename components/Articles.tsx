import Image from "next/image";
import React from "react";

type Props = {};

export default function Articles({}: Props) {
  let articles = [
    {
      img: "/image-currency.jpg",
      author: "By Claire Robinson",
      text: "Receive money in any currency with no fees The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      img: "/image-restaurant.jpg",
      author: "By Wilson Hutton",
      text: "Treat yourself without worrying about money Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      img: "/image-plane.jpg",
      author: "By Wilson Hutton",
      text: "Take your Easybank card wherever you go We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …",
    },
    {
      img: "/image-confetti.jpg",
      author: "By Claire Robinson",
      text: "Our invite-only Beta accounts are now live! After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
    },
  ];
  return (
    <section className="articles">
      <div className="articles__container">
        <h2>Latest Articles</h2>
        {articles.map((article, index) => {
          let { img, author, text } = article;
          return (
            <div className="articles__card" key={index}>
              <Image
                src={img}
                alt={`Image ${author}`}
                width={index === 0 ? 533 : 600}
                height={400}
              />
              <div className="articles__card__text">
                <h3>{author}</h3>
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
