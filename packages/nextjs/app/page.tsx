"use client";

import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 gap-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to the</span>
            <span className="block text-4xl font-bold">Open Source Collective</span>
          </h1>
        </div>

        <p className="text-center text-lg">
          We are working to get developers <span className="text-green-500">paid in money</span> for their open source
          contributions.
        </p>

        <div className="flex justify-center items-center space-x-2 flex-col">
          <p className="my-2 font-medium text-2xl">News</p>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>{"Giveth Project Creation & Application to the ENS/Octant Round"}</p>
            <a href="https://giveth.io/project/open-source-collective" target="#" className="text-blue-500">
              https://giveth.io/project/open-source-collective
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-2 flex-col">
          <p className="my-2 font-medium text-2xl">Wallets</p>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>Treasury</p>
            <Address address={"0xa3cE7B7a488Db87c8f238D5515351Ec4E1002b13"} />
          </div>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>Governer</p>
            <Address address={"0xF4c1B492076A62bd96894B81E0aE1da8f730063e"} />
          </div>
        </div>

        <div className="flex justify-center items-center space-x-2 flex-col">
          <p className="my-2 font-medium text-2xl">Phases</p>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>Phase 1</p>
            <p>Reward open source contributions through DAO governance.</p>
          </div>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>Phase 2</p>
            <p>Automate rewards for open source contributions.</p>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-2 flex-col">
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

export default Home;
