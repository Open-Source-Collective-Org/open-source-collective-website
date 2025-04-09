"use client";

import type { NextPage } from "next";
import articles from "~~/news.config";

const Article: NextPage = (slug: any) => {
  const article = articles[slug.params.article];

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 gap-10">
        <div className="w-80 md:w-92 flex flex-col justify-center items-center">
          <p className="my-2 text-center font-semibold text-2xl">{article.title}</p>
          <p className="text-center">{article.date}</p>

          {article.links.map((link, index) => {
            return (
              <a key={index} href={link} target="#" className="text-blue-500 text-lg">
                Link {" " + (index + 1)}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Article;
