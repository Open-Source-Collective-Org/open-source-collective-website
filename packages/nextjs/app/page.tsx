"use client";

import { useEffect, useState } from "react";
import { Client, create } from "@web3-storage/w3up-client";
// import { Account } from "@web3-storage/w3up-client/account";
import type { NextPage } from "next";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const [client, setClient] = useState<Client>();
  // const [account, setAccount] = useState<Account>();

  useEffect(() => {
    async function get() {
      const client = await create();
      setClient(client);
    }
    get();
  }, []);

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
    };
    console.log(data); // Logs { name: "The Code Wranglers...", description: "We write efficient and secure code..." }

    console.log("here ye");
    if (!client) {
      console.log("here ye 2");
      return;
    }

    console.log("here ye 3");

    const account = await client.login("homanicsjake@gmail.com");
    console.log(account);
    await account.plan.wait();

    console.log(account);
    // setAccount(account);

    await client.setCurrentSpace(`did:key:z6Mkoja4t3AJJGAxew1NNYhhvhpnc9RmS8JkKNVpoLnZFTB5`);

    const files = [new File([JSON.stringify(data)], "metadata.json")];

    const directoryCid = await client.uploadDirectory(files);

    console.log(directoryCid.toString());
  }

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 gap-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to the</span>
            <span className="block text-4xl font-bold">Open Source Collective</span>
          </h1>
        </div>

        <form onSubmit={login}>
          <input placeholder="The Code Wranglers..." name="name" />
          <textarea
            placeholder="We write efficient and secure code. Guild meetings every Tues/Thurs 7pm in our discord..."
            name="description"
          />
          <button className="btn btn-sm">Create</button>
        </form>

        <p className="text-center text-lg">
          We are working to get developers <span className="text-green-500">paid in money</span> for their open source
          contributions.
        </p>

        <div className="w-80 md:w-96 flex justify-center items-center space-x-2 flex-col bg-base-100 rounded-lg p-4">
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
          </div>

          <div className="flex flex-col items-center text-lg font-medium">
            <p>Governer</p>
            <Address address={"0xF4c1B492076A62bd96894B81E0aE1da8f730063e"} />
          </div>
        </div>

        <div className="w-80 md:w-96 flex justify-center items-center space-x-2 flex-col bg-base-100 rounded-lg p-4">
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

        <Accordion
          allowMultipleExpanded
          className="w-80 md:w-96 flex flex-col items-center bg-base-100 rounded-lg p-4 gap-4"
        >
          FAQ
          <AccordionItem>
            <AccordionItemHeading className="flex justify-center">
              <AccordionItemButton className="btn btn-sm">Who?</AccordionItemButton>
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
              <AccordionItemButton className="btn btn-sm">What?</AccordionItemButton>
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
              <AccordionItemButton className="btn btn-sm">Why?</AccordionItemButton>
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
              <AccordionItemButton className="btn btn-sm">Where?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-center">{"Online. Github. In your heart. Everywhere."}</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className="flex justify-center">
              <AccordionItemButton className="btn btn-sm">How?</AccordionItemButton>
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
              <AccordionItemButton className="btn btn-sm">When?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-center">
                {
                  "The time is NOW. We are calling for all builders to join the collective and get paid for their open source contributions. Companies, organizations, and businesses should reach out to OSC so that we can get visibility for your project within the collective."
                }
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Home;
