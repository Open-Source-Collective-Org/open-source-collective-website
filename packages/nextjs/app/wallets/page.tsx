"use client";

import type { NextPage } from "next";
import { Address, Balance } from "~~/components/scaffold-eth";

const Wallets: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 gap-10">
        <div className="w-80 md:w-96 flex justify-center items-center space-x-2 flex-col bg-base-100 rounded-lg p-4">
          <p className="my-2 font-medium text-2xl">Wallets</p>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>Treasury</p>
            <Address address={"0xa3cE7B7a488Db87c8f238D5515351Ec4E1002b13"} />
            <Balance address={"0xa3cE7B7a488Db87c8f238D5515351Ec4E1002b13"} />
          </div>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>Governer</p>
            <Address address={"0xF4c1B492076A62bd96894B81E0aE1da8f730063e"} />
            <Balance address={"0xa3cE7B7a488Db87c8f238D5515351Ec4E1002b13"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallets;
