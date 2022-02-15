import { format } from "date-fns";
import React, { ReactElement } from "react";
import { CardProps } from "../card/PostPreview";
import HorizCard from "./horiz-card";
import Link from "next/link";
import { useRouter } from "next/router";

export interface CardArrayProps {
  theme: CardProps["theme"];
  data: Array<CardProps["blog"]>;
}

function Cards({ data, theme }: CardArrayProps): ReactElement {
  const { pathname } = useRouter();
  return (
    <div className={`flex flex-col`}>
      <div className="m-2 p-2 text-primary-accent-dark text-2xl flex justify-between">
        <span>{pathname === "/blog" ? "all articles" : "latest articles"}</span>
        {pathname !== "/blog" ? (
          <Link href="/blog">
            <a
              href="/blog"
              className="text-primary-text-light dark:text-light-gray border-b-2 border-primary-accent-light hover:bg-primary-accent-light transition-all duration-200 dark:hover:text-primary-light"
            >
              all articles
            </a>
          </Link>
        ) : null}
      </div>
      <div className={`flex flex-wrap flex-col-res`}>
        {data
          .sort((a, b) => a.createdAt - b.createdAt)
          .reverse()
          .map((blog) => (
            <HorizCard
              key={blog.createdAt}
              theme={theme}
              layoutType="horiz"
              blog={blog}
            />
          ))}
      </div>
    </div>
  );
}

export default Cards;
