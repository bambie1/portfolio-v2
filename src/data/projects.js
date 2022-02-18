import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const projects = [
  {
    id: 1,
    title: "SoPlugged",
    subTitle: "Designer and Front-End Developer",
    description: (
      <>
        <p>Working with entrepreneurs has always been a passion of mine.</p>
        <p className="mb-7">
          I'm learning about shipping great products, becoming a better
          developer and growing a career in tech.
        </p>
      </>
    ),
    url: "https://www.soplugged.com/",
    image: (
      <StaticImage
        src="../images/placeholder-2.png"
        alt="SoPlugged screenshot"
        placeholder="blurred"
        objectFit="contain"
        width={313}
        height={325}
      />
    ),
  },
  {
    id: 2,
    title: "LST Ottawa",
    subTitle: "Designer and Front-End Developer",
    description: (
      <>
        <p>
          Welcome to my digital garden where I share what I'm learning about
          shipping great products, becoming a better developer and growing a
          career in tech.
        </p>
        <p className="mb-7">
          I'm learning about shipping great products, becoming a better
          developer and growing a career in tech.
        </p>
      </>
    ),
    url: "https://www.livingspringtabernacle.org/",
    image: (
      <StaticImage
        src="../images/placeholder-2.png"
        alt="SoPlugged screenshot"
        placeholder="blurred"
        width={313}
        height={325}
      />
    ),
  },
];
