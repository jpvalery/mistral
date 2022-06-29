import React from "react";
import PropTypes from "prop-types";

import { Fragment, useEffect, useRef, useState } from "react";
import { Transition, Menu } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/outline";

import Bookmark from "../../components/Bookmark/Bookmark";
import Button from "../../components/Button/Button";

export default function Header({ brand, menus }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-stone-900 bg-opacity-90 pb-4 pt-0 md:pt-4">
      <div className="mx-auto max-w-4xl text-stone-300">
        <div className="flex items-center justify-between border-b border-stone-400 py-4">
          <div className="cursor-pointer font-mono text-base font-black uppercase">
            {brand}
          </div>

          <div className="hidden md:flex">
            {menus.map((menu) => {
              return (
                <Menu as="div" className="relative inline-block text-left">
                  <div className="hover:text-stone-50">
                    <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      {menu.title.text}
                      <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-50 transform"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-50 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-90"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-[30rem] origin-top-right gap-8 rounded-md bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="grid grid-flow-row gap-1 p-2">
                        {menu.items.map((item) => {
                          return (
                            <Menu.Item>
                              {({ active }) => (
                                <Bookmark
                                  color={item.color}
                                  description={item.description}
                                  icon={item.icon}
                                  title={item.title}
                                  url={item.url}
                                  urlExternal={item.urlExternal}
                                />
                              )}
                            </Menu.Item>
                          );
                        })}
                        {menu.cta && (
                          <div className="py-2">
                            <Button
                              color="emerald"
                              icon="InboxInIcon"
                              label={menu.cta.text}
                              url={menu.cta.url}
                            />
                          </div>
                        )}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              );
            })}
          </div>

          <div className="flex md:hidden">
            <Menu as="div" className="relative inline-block text-left">
              <div className="hover:text-stone-50">
                <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-8 w-8" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-50 transform"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-50 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Menu.Items className="absolute right-0 mt-2 w-72 sm:w-96 origin-top-right gap-8 rounded-md bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="grid grid-flow-row gap-1 p-2">
                    {menus.map((menu) => {
                      return (
                        <>
                          {menu.items.map((item) => {
                            return (
                              <Menu.Item>
                                {({ active }) => (
                                  <Bookmark
                                    color={item.color}
                                    description={item.description}
                                    icon={item.icon}
                                    title={item.title}
                                    url={item.url}
                                    urlExternal={item.urlExternal}
                                  />
                                )}
                              </Menu.Item>
                            );
                          })}
                        </>
                      );
                    })}
                    <div className="py-2">
                      <Button
                        color="emerald"
                        icon="InboxInIcon"
                        label="Get in touch"
                        url="https://contact.jpvalery.me"
                      />
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  brand: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  menus: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  brand: "Jp Valery",
  menus: [
    {
      title: {
        text: "About",
      },
      items: [
        {
          title: "/about",
          description: "Who the heck am I!?",
          icon: "UserCircleIcon",
          url: "/about",
          urlExternal: false,
          color: "amber",
        },
      ],
      cta: {
        text: "Get in touch about anything",
        url: "https://contact.jpvalery.me/",
      },
    },
    {
      title: {
        text: "Photography",
        icon: "CameraIcon",
        colorFrom: "#A56D5E",
        colorTo: "#16161D",
        link: "",
      },
      items: [
        {
          title: "Portfolio",
          description: "My photography portfolio",
          icon: "CameraIcon",
          url: "https://jpvalery.photo",
          urlExternal: true,
          color: "amber",
        },
      ],
      cta: {
        text: "Get in touch about my photography",
        url: "https://contact.jpvalery.me/photography",
      },
    },
  ],
};
