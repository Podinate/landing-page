import React from "react";
import Container from "./container";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How is Podinate different from Kubernetes?",
    answer: "Podinate provides its own API that is much easier to use than Kubernetes, and aims to be similar to using Docker as much as possible. This means you don't need a PhD in Kubernetes to use Podinate.",
  },
  {
    question: "Is Podinate free to use?",
    answer: "Podinate is released under the source-available BuSL license. It is free to use for development and on production clusters with up to three nodes. This is a great way to get started with Kubernetes and covers most home and small commercial use. If you need more nodes, you can purchase a license and get support.",
  },
  {
    question: "What is the current state of Podinate? ",
    answer:
      "Podinate is currently under active development. You can join us on our github.",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "Podinate comes with a free community support. If you need more, you can purchase a support contract. We also offer custom development and training.",
  },
];
