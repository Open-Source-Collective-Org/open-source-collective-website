"use client";

import type { NextPage } from "next";
import articles from "~~/news.config";

const News: NextPage = () => {
  const elements = articles.map((article, index) => {
    return (
      <a key={index} href={`/news/${index}`} className="flex flex-col w-full bg-base-100 rounded-lg items-center">
        <p className="text-center font-semibold text-xl">{article.title}</p>
        <p className="text-center">{article.date}</p>
      </a>
    );
  });

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 gap-10">
        <div className="w-80 md:w-92 flex flex-col justify-center items-center">
          <p className="my-2 font-medium text-2xl">News</p>
          <div className="flex flex-col items-center gap-4">{elements}</div>
        </div>
      </div>
    </>
  );
};

export default News;
