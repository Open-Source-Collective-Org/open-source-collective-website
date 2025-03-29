"use client";

import type { NextPage } from "next";

const Funding: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 gap-10">
        <div className="w-80 md:w-92 flex flex-col justify-center items-center">
          <p className="my-2 font-medium text-2xl">Funding</p>
          <div className="flex flex-col items-center gap-4">
            <p>RetroPGF</p>
            <p>{"Grants Programs (Gitcoin, Giveth, Octant)"}</p>
            <p>OSC</p>
            <p>ScoutGame</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funding;
