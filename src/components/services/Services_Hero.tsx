import React, { useEffect, useState } from "react";
import { Button, IconButton } from "../Button";
import { Transition } from "@headlessui/react";

const Hero = () => {
    const [showBanner, setShowBanner] = useState(true);
    return (
        <>
            <div className="relative h-[640px] w-full bg-red-500/20 sm:h-[55vh] md:h-[640px]">

                <img
                    src="https://dtworldserver.verydeeptech.com/file/63050142c0c3f66c6ee228d2?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="absolute inset-0 bg-neutral-900/70">
                    <div className="mx-auto max-w-screen-lg">
                        <div className="m-6 min-h-[60px]">
                            <HeroInnerBanner
                                show={showBanner}
                                onClose={() => setShowBanner(false)}
                            />
                        </div>
                        <div className="mx-4 mt-16 flex flex-col items-center text-center">
                            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-2xl md:text-3xl lg:text-4xl">
                                SOFTWARE DEVELOPMENT SERVICES
                                FOR YOUR INNOVATIVE IDEAS
                            </h1>
                            <span className="mt-8 text-md text-white sm:text-2md">
                                We help our partners accelerate disruption both within
                                their organizations and industries. They strategize new ideas
                                and obtain real business value by getting the most out of our
                                production-ready custom software development services.
                                Talk to our experts today!
              </span>

                            <div className="mt-8">
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeroBottomCard />
        </>
    );
};

export default Hero;

const HeroInnerBanner: React.FC<{ show: boolean; onClose: () => void }> = ({show, onClose,}) => {
    return (
        <Transition
            show={show}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="relative rounded bg-gradient-to-r from-purple-500 to-indigo-800 py-3 px-8 text-center text-white shadow-lg md:rounded-full">
                <p>
                    Welcome to <span className="font-bold">Deep technologies</span>,
                    the Home Of Software Production.
                </p>
                <span className="absolute top-1 right-1 sm:top-2 sm:right-2">
          <IconButton
              aria-label="close banner"
              variant="ghost"
              size="sm"
              onClick={onClose}
          >
            <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </span>
            </div>
        </Transition>
    );
};

const items = [
    "UI/UX Design Services",
    "software development",
    "architecture",
    "Applications Development",
    "Web-site Development",
    "Mentorship Programmes",
    "Software Management, Upgrade and Maintenance"
];

const SearchForm = () => {
    const [query, setQuery] = useState("");
    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
        let index = 0;
        let interval = setInterval(() => {
            if (!isDirty) {
                let value = items[index >= items.length ? (index = 0) : index];
                setQuery(value);
            }
            index++;
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [isDirty]);

    return (
        <form
            className="group"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <div
                id="form-control"
                className="flex items-center overflow-hidden rounded-full bg-white shadow-md group-focus-within:ring-2 group-focus-within:ring-indigo-400 group-focus-within:ring-offset-2 group-focus-within:ring-offset-transparent"
            >
        <span className="pointer-events-none block px-2 text-slate-400 group-focus-within:text-indigo-800">
          <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
                <input
                    className="w-full appearance-none border-transparent p-2 text-xl leading-6 text-slate-900 placeholder-slate-400 focus:border-transparent focus:ring-0"
                    type="text"
                    aria-label="Search input"
                    placeholder="Job Title..."
                    onClick={() => {
                        if (!isDirty) {
                            setIsDirty(true);
                            setQuery("");
                        }
                    }}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="hidden h-11 shrink-0 bg-indigo-600 px-2 font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-700 sm:block"
                >
                    Discover Now
                </button>
            </div>
            <Button size="lg" type="submit" className="mt-8 sm:hidden">
                Discover Now
            </Button>
        </form>
    );
};

function HeroBottomCard() {
    return (
        <div className="bg-neutral-900 p-4">
      <span className="block text-center text-md text-white">
        No time to look for Software Firm? Reach to us @{" "}
          <span className="bg-gradient-to-r from-fuchsia-700 via-purple-500 to-indigo-500 bg-clip-text align-middle text-1xl font-black tracking-widest text-transparent">
          Deep technologies
        </span>{" "}
          lets Help you Create a solution.
      </span>
        </div>
    );
}
