import PropTypes from "prop-types";
import React from "react";

import NextLink from "next/link";

import { ArrowNarrowRightIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import Icon from "../../elements/icons/Icon";
export default function Button({
  label,
  icon,
  destination,
  onClick,
  color,
  theme,
  url,
}) {
  if (url) {
    if (url.charAt(0) == "/") {
      return (
        <NextLink href={url}>
          <div
            className={`flex min-w-fit items-center justify-start gap-2 rounded-md 
            ${theme == "light" && "bg-gray-100 text-gray-900"}
            ${theme == "dark" && "bg-zinc-800 text-zinc-100"}
            ${color == "slate" ? "hover:bg-slate-500 focus:ring-slate-500" : ""}
            ${color == "gray" ? "hover:bg-gray-500 focus:ring-gray-500" : ""}
            ${color == "zinc" ? "hover:bg-zinc-500 focus:ring-zinc-500" : ""}
            ${
              color == "neutral"
                ? "hover:bg-neutral-500 focus:ring-neutral-500"
                : ""
            }
            ${color == "stone" ? "hover:bg-stone-500 focus:ring-stone-500" : ""}
            ${color == "red" ? "hover:bg-red-500 focus:ring-red-500" : ""}
            ${
              color == "orange"
                ? "hover:bg-orange-500 focus:ring-orange-500"
                : ""
            }
            ${color == "amber" ? "hover:bg-amber-500 focus:ring-amber-500" : ""}
            ${color == "lime" ? "hover:bg-lime-500 focus:ring-lime-500" : ""}
            ${color == "green" ? "hover:bg-green-500 focus:ring-green-500" : ""}
            ${
              color == "emerald"
                ? "hover:bg-emerald-500 focus:ring-emerald-500"
                : ""
            }
            ${color == "teal" ? "hover:bg-teal-500 focus:ring-teal-500" : ""}
            ${color == "cyan" ? "hover:bg-cyan-500 focus:ring-cyan-500" : ""}
            ${color == "sky" ? "hover:bg-sky-500 focus:ring-sky-500" : ""}
            ${color == "blue" ? "hover:bg-blue-500 focus:ring-blue-500" : ""}
            ${
              color == "indigo"
                ? "hover:bg-indigo-500 focus:ring-indigo-500"
                : ""
            }
            ${
              color == "violet"
                ? "hover:bg-violet-500 focus:ring-violet-500"
                : ""
            }
            ${
              color == "purple"
                ? "hover:bg-purple-500 focus:ring-purple-500"
                : ""
            }
            ${
              color == "fuchsia"
                ? "hover:bg-fuchsia-500 focus:ring-fuchsia-500"
                : ""
            }
            ${color == "pink" ? "hover:bg-pink-500 focus:ring-pink-500" : ""}
            ${color == "rose" ? "hover:bg-rose-500 focus:ring-rose-500" : ""}
      h-12 py-2 px-4 text-base font-medium shadow-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm`}
          >
            {icon && (
              <div className="h-6 w-6">
                <Icon icon={icon} />
              </div>
            )}
            <div>{label}</div>
            {destination == "external" && (
              <ExternalLinkIcon className="h-4 w-4" />
            )}
            {destination == "step" && (
              <ArrowNarrowRightIcon className="mt-px h-4 w-4" />
            )}
          </div>
        </NextLink>
      );
    } else {
      {
        return (
          <a href={url}>
            <div
              className={`flex min-w-fit items-center justify-start gap-2 rounded-md 
                          ${theme == "light" && "bg-gray-100 text-gray-900"}
            ${theme == "dark" && "bg-zinc-800 text-zinc-100"}
            ${color == "slate" ? "hover:bg-slate-500 focus:ring-slate-500" : ""}
            ${color == "gray" ? "hover:bg-gray-500 focus:ring-gray-500" : ""}
            ${color == "zinc" ? "hover:bg-zinc-500 focus:ring-zinc-500" : ""}
            ${
              color == "neutral"
                ? "hover:bg-neutral-500 focus:ring-neutral-500"
                : ""
            }
            ${color == "stone" ? "hover:bg-stone-500 focus:ring-stone-500" : ""}
            ${color == "red" ? "hover:bg-red-500 focus:ring-red-500" : ""}
            ${
              color == "orange"
                ? "hover:bg-orange-500 focus:ring-orange-500"
                : ""
            }
            ${color == "amber" ? "hover:bg-amber-500 focus:ring-amber-500" : ""}
            ${color == "lime" ? "hover:bg-lime-500 focus:ring-lime-500" : ""}
            ${color == "green" ? "hover:bg-green-500 focus:ring-green-500" : ""}
            ${
              color == "emerald"
                ? "hover:bg-emerald-500 focus:ring-emerald-500"
                : ""
            }
            ${color == "teal" ? "hover:bg-teal-500 focus:ring-teal-500" : ""}
            ${color == "cyan" ? "hover:bg-cyan-500 focus:ring-cyan-500" : ""}
            ${color == "sky" ? "hover:bg-sky-500 focus:ring-sky-500" : ""}
            ${color == "blue" ? "hover:bg-blue-500 focus:ring-blue-500" : ""}
            ${
              color == "indigo"
                ? "hover:bg-indigo-500 focus:ring-indigo-500"
                : ""
            }
            ${
              color == "violet"
                ? "hover:bg-violet-500 focus:ring-violet-500"
                : ""
            }
            ${
              color == "purple"
                ? "hover:bg-purple-500 focus:ring-purple-500"
                : ""
            }
            ${
              color == "fuchsia"
                ? "hover:bg-fuchsia-500 focus:ring-fuchsia-500"
                : ""
            }
            ${color == "pink" ? "hover:bg-pink-500 focus:ring-pink-500" : ""}
            ${color == "rose" ? "hover:bg-rose-500 focus:ring-rose-500" : ""} 
      h-12 py-2 px-4 text-base font-medium shadow-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm`}
            >
              {icon && (
                <div className="h-6 w-6">
                  <Icon icon={icon} />
                </div>
              )}
              <div>{label}</div>
              {destination == "external" && (
                <ExternalLinkIcon className="h-4 w-4" />
              )}
              {destination == "step" && (
                <ArrowNarrowRightIcon className="mt-px h-4 w-4" />
              )}
            </div>
          </a>
        );
      }
    }
  } else {
    return (
      <button
        onClick={onClick}
        className={`flex items-center justify-between gap-2 rounded-md 
                    ${theme == "light" && "bg-gray-100 text-gray-900"}
            ${theme == "dark" && "bg-zinc-800 text-zinc-100"}
            ${color == "slate" ? "hover:bg-slate-500 focus:ring-slate-500" : ""}
            ${color == "gray" ? "hover:bg-gray-500 focus:ring-gray-500" : ""}
            ${color == "zinc" ? "hover:bg-zinc-500 focus:ring-zinc-500" : ""}
            ${
              color == "neutral"
                ? "hover:bg-neutral-500 focus:ring-neutral-500"
                : ""
            }
            ${color == "stone" ? "hover:bg-stone-500 focus:ring-stone-500" : ""}
            ${color == "red" ? "hover:bg-red-500 focus:ring-red-500" : ""}
            ${
              color == "orange"
                ? "hover:bg-orange-500 focus:ring-orange-500"
                : ""
            }
            ${color == "amber" ? "hover:bg-amber-500 focus:ring-amber-500" : ""}
            ${color == "lime" ? "hover:bg-lime-500 focus:ring-lime-500" : ""}
            ${color == "green" ? "hover:bg-green-500 focus:ring-green-500" : ""}
            ${
              color == "emerald"
                ? "hover:bg-emerald-500 focus:ring-emerald-500"
                : ""
            }
            ${color == "teal" ? "hover:bg-teal-500 focus:ring-teal-500" : ""}
            ${color == "cyan" ? "hover:bg-cyan-500 focus:ring-cyan-500" : ""}
            ${color == "sky" ? "hover:bg-sky-500 focus:ring-sky-500" : ""}
            ${color == "blue" ? "hover:bg-blue-500 focus:ring-blue-500" : ""}
            ${
              color == "indigo"
                ? "hover:bg-indigo-500 focus:ring-indigo-500"
                : ""
            }
            ${
              color == "violet"
                ? "hover:bg-violet-500 focus:ring-violet-500"
                : ""
            }
            ${
              color == "purple"
                ? "hover:bg-purple-500 focus:ring-purple-500"
                : ""
            }
            ${
              color == "fuchsia"
                ? "hover:bg-fuchsia-500 focus:ring-fuchsia-500"
                : ""
            }
            ${color == "pink" ? "hover:bg-pink-500 focus:ring-pink-500" : ""}
            ${color == "rose" ? "hover:bg-rose-500 focus:ring-rose-500" : ""}
      h-12 py-2 px-4 text-base font-medium shadow-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm`}
      >
        {icon && (
          <div className="h-6 w-6">
            <Icon icon={icon} />
          </div>
        )}
        <div>{label}</div>
        {destination == "external" && <ExternalLinkIcon className="h-4 w-4" />}
        {destination == "step" && (
          <ArrowNarrowRightIcon className="mt-px h-4 w-4" />
        )}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  url: PropTypes.string,
  destination: PropTypes.oneOf(["external", "step"]),
  color: PropTypes.string,
  theme: PropTypes.oneOf(["dark", "light"]),
};

Button.defaultProps = {
  onClick: undefined,
  theme: "light",
  color: "green",
};
