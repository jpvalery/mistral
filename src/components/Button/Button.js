import React from "react";
import PropTypes from "prop-types";

import { ArrowNarrowRightIcon, ExternalLinkIcon } from "@heroicons/react/solid";

import HeroIcon from "../../elements/icons/DynamicIcon";
export default function Button({ label, icon, destination, onClick, color, theme, url }) {
  if (url) {
    return (
      <a href={url}>
        <div
          className={`min-w-fit flex items-center justify-start gap-2 rounded-md border border-transparent ${
            theme == "light" && "bg-gray-100 text-gray-900"
          } ${theme == "dark" && "bg-zinc-800 text-zinc-100"} ${
            color && `hover:bg-${color}-500 focus:ring-${color}-500`
          } 
      py-2 px-4 text-base font-medium shadow-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm`}
        >
          {icon && (
            <div className="h-6 w-6">
              <HeroIcon icon={icon} />
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
  } else {
    return (
      <button
        onClick={onClick}
        className={`flex items-center justify-between gap-2 rounded-md border border-transparent ${
          theme == "light" && "bg-gray-100 text-gray-900"
        } ${theme == "dark" && "bg-zinc-800 text-zinc-100"} ${
          color && `hover:bg-${color}-500 focus:ring-${color}-500`
        } 
      py-2 px-4 text-base font-medium shadow-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm`}
      >
        {icon && (
          <div className="h-6 w-6">
            <HeroIcon icon={icon} />
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
