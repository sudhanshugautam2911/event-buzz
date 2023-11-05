import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// const navigation = [
//   { name: "Home", link: "/", current: true },
//   { name: "Competitions", link: "/Competition", current: false },
//   { name: "Events", link: "/events", current: false },
//   { name: "Notice", link: "/notice", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ children }) {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  
  const navigation = [
    { name: "Home", link: "/", current: activeNavItem === "Home" },
    {
      name: "Competitions",
      link: "/competition",
      current: activeNavItem === "Competitions",
    },
    { name: "Events", link: "/events", current: activeNavItem === "Events" },
    { name: "Notice", link: "/notices", current: activeNavItem === "Notice" },
  ];
  
  useEffect(() => {
    const pathname = window.location.pathname;
    const activeItem = navigation.find((item) => item.link === pathname);
    if (activeItem) {
      setActiveNavItem(activeItem.name);
    }
  }, [navigation]);


  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-white border border-b-slate-300">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <Link to={"/"}>
                    <div className="flex flex-shrink-0 items-center cursor-pointer space-x-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                      <h1 className="text-black font-semibold text-xl ">
                        EventBuzz
                      </h1>
                    </div>
                  </Link>
                  {/* flex-grow is used to fill any available space */}
                  <div className="hidden sm:ml-6 sm:block sm:flex-grow">
                    <div className="flex justify-end space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.link}
                          className={classNames(
                            item.current
                              ? "text-black border-b-2 border-purple-600"
                              : "text-gray-600 border-b-2 border-transparent hover:border-b-2 hover:border-purple-600",
                            "px-3 py-2 text-sm font-medium "
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    as="a"
                    to={item.link}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* Lower Header */}
      {/* <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            EventBuzz
          </h1>
        </div>
      </header> */}
      <main>
        <div className="mx-auto max-w-7xl py-6 lg:py-0 px-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
