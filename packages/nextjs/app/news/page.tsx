"use client";

import type { NextPage } from "next";

const News: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 gap-10">
        <div className="w-80 md:w-96 flex justify-center items-center space-x-2 flex-col bg-base-100 rounded-lg p-4">
          <p className="my-2 font-medium text-2xl">News</p>
          <div className="flex flex-col items-center text-lg font-medium">
            <a href="https://giveth.io/project/open-source-collective" target="#" className="text-blue-500">
              {"Giveth Project Creation & Application to the ENS/Octant Round"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
