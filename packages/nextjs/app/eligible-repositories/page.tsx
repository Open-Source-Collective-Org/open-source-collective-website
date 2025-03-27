"use client";

import type { NextPage } from "next";

const EligibleRepositories: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 gap-10">
        <div className="w-80 md:w-96 flex justify-center items-center space-x-2 flex-col bg-base-100 rounded-lg p-4">
          <p className="my-2 font-medium text-2xl">Eligible Repositories</p>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>Open Source Collective</p>
            <a
              href="https://github.com/JacobHomanics/open-source-collective-website"
              target="#"
              className="text-blue-500"
            >
              https://github.com/JacobHomanics/open-source-collective-website
            </a>
          </div>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>Scaffold-ETH 2</p>
            <a href="https://github.com/scaffold-eth/scaffold-eth-2" target="#" className="text-blue-500">
              https://github.com/scaffold-eth/scaffold-eth-2
            </a>
          </div>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>Stand With Crypto</p>
            <a href="https://github.com/Stand-With-Crypto/swc-web" target="#" className="text-blue-500">
              https://github.com/Stand-With-Crypto/swc-web
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EligibleRepositories;
