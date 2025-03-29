"use client";

import type { NextPage } from "next";

const News: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 gap-10">
        <div className="w-80 md:w-92 flex flex-col justify-center items-center">
          <p className="my-2 font-medium text-2xl">News</p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col w-full bg-base-100 rounded-lg items-center">
              <div className="m-4">
                <p className="text-center font-semibold text-xl">
                  {"Vitalik Calls for more discussions about open source funding"}
                </p>
                <p className="text-center">{"3/29/25"}</p>
              </div>

              <a
                href="https://vitalik.eth.limo/general/2025/03/29/pubos.html"
                target="#"
                className="text-blue-500 text-lg"
              >
                Link 1
              </a>

              <a href="https://warpcast.com/vitalik.eth/0xcf151a37" target="#" className="text-blue-500 text-lg">
                Link 2
              </a>

              <a
                href="https://x.com/VitalikButerin/status/1905732523256357056"
                target="#"
                className="text-blue-500 text-lg"
              >
                Link 3
              </a>
            </div>

            <div className="flex flex-col w-full bg-base-100 rounded-lg items-center">
              <div className="m-4">
                <p className="text-center font-semibold text-xl">{"OSC joins the Giveth ENS/Octant Round!"}</p>
                <p className="text-center">{"3/14/25"}</p>
              </div>
              <a href="https://giveth.io/project/open-source-collective" target="#" className="text-blue-500 text-lg">
                Link 1
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
