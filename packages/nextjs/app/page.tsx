"use client";

import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Address, Balance } from "~~/components/scaffold-eth";

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

        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold">Build your portfolio</p>
          <p className="text-xl font-semibold">Advance technology</p>
          <p className="text-xl font-semibold">Network with professionals</p>
          <p className="text-xl font-semibold">Improve your skills</p>
          <p className="text-xl font-semibold">Get paid</p>
        </div>

        <div className="flex flex-col items-center text-4xl font-bold">
          <p>Join the community</p>
          <div className="flex gap-4">
            <a href="https://discord.gg/fWr7JUwy" target="#">
              <FontAwesomeIcon icon={faDiscord} className="w-10 h-10" />
            </a>

            <a href="https://t.me/+sYYxtfWNQJM0MWQx" target="#">
              <FontAwesomeIcon icon={faTelegram} className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* <p className="text-center text-lg">
          We are working to get developers <span className="text-green-500">paid in money</span> for their open source
          contributions.
        </p> */}

        {/* <div className="w-80 md:w-96 flex justify-center items-center space-x-2 flex-col bg-base-100 rounded-lg p-4">
          <p className="my-2 font-medium text-2xl">News</p>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>{"Giveth Project Creation & Application to the ENS/Octant Round"}</p>
            <a href="https://giveth.io/project/open-source-collective" target="#" className="text-blue-500">
              https://giveth.io/project/open-source-collective
            </a>
          </div>
        </div>

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
        </div> */}

        {/* <div className="w-80 md:w-96 flex justify-center items-center space-x-2 flex-col bg-base-100 rounded-lg p-4">
          <p className="my-2 font-medium text-2xl">Phases</p>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>Phase 1</p>
            <p>Reward open source contributions through DAO governance.</p>
          </div>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>Phase 2</p>
            <p>Automate rewards for open source contributions.</p>
          </div>
        </div> */}

        {/* <div className="w-80 md:w-96 flex justify-center items-center space-x-2 flex-col bg-base-100 rounded-lg p-4">
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
        </div> */}

        {/* <Accordion allowMultipleExpanded className="flex flex-col items-center p-4 gap-4">
          <p className="text-4xl font-semibold">FAQ</p>
          <AccordionItem>
            <AccordionItemHeading className="flex justify-center">
              <AccordionItemButton className="text-3xl">
                <p></p>Who?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-center">
                {
                  "A collective of builders (software developers, engineers, artists, and beyond) who contribute to open source software."
                }
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className="flex justify-center">
              <AccordionItemButton className="text-3xl">What?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-center">
                {
                  "A mechanism to allow builders to make a sustainable living by being paid in money for contributing to open source software."
                }
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className="flex justify-center">
              <AccordionItemButton className="text-3xl">Why?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-center">
                {
                  'There are many open source projects, however "Time is money friend!". We live in a world where time is incredibly valuable and giving it up is not cheap both financially and emotionally. As we move to push work into a more decentralized and open source environment, we need to be able to properly support the framework through incentives.'
                }
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className="flex justify-center">
              <AccordionItemButton className="text-3xl flex">
                <p>Where?</p> <ChevronDownIcon className="w-16 h-16" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-center">{"Online. Github. In your heart. Everywhere."}</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className="flex justify-center">
              <AccordionItemButton className="text-3xl">How?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-center">
                {
                  "An entity donates crypto to the OSC's (Open Source Collective) Treasury; the treasury is owned by the OSC's multi-sig. That crypto is then allocated to the entity's designated repositories. A builder successfully merges a Pull Request on Github. OSC releases the funds to the developer through a governance proposal."
                }
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className="flex justify-center">
              <AccordionItemButton className="text-3xl">When?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-center">
                {
                  "The time is NOW. We are calling for all builders to join the collective and get paid for their open source contributions. Companies, organizations, and businesses should reach out to OSC so that we can get visibility for your project within the collective."
                }
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion> */}
      </div>
    </>
  );
};

export default Home;
