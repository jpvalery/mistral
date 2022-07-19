import { ExternalLinkIcon } from "@heroicons/react/solid";
import NextLink from "next/link";
import PropTypes from "prop-types";
import React from "react";

import Icon from "../../elements/icons/Icon";

function IntLink(props) {
  let { href, children, ...rest } = props;
  return (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  );
}

export default function Bookmark({
  title,
  description,
  icon,
  url,
  urlExternal,
  color,
}) {
  if (urlExternal == true) {
    return (
      <a href={url} target="_blank">
        <span className="flex max-w-lg cursor-pointer items-center gap-2 rounded bg-zinc-800 px-4 py-3 hover:bg-zinc-600">
          <span
            className={`h-10 w-10 flex-shrink-0
                ${color == "slate" ? "text-slate-500" : ""}
                ${color == "gray" ? "text-gray-500" : ""}
                ${color == "zinc" ? "text-zinc-500" : ""}
                ${color == "neutral" ? "text-neutral-500" : ""}
                ${color == "stone" ? "text-stone-500" : ""}
                ${color == "red" ? "text-red-500" : ""}
                ${color == "orange" ? "text-orange-500" : ""}
                ${color == "amber" ? "text-amber-500" : ""}
                ${color == "lime" ? "text-lime-500" : ""}
                ${color == "green" ? "text-green-500" : ""}
                ${color == "emerald" ? "text-emerald-500" : ""}
                ${color == "teal" ? "text-teal-500" : ""}
                ${color == "cyan" ? "text-cyan-500" : ""}
                ${color == "sky" ? "text-sky-500" : ""}
                ${color == "blue" ? "text-blue-500" : ""}
                ${color == "indigo" ? "text-indigo-500" : ""}
                ${color == "violet" ? "text-violet-500" : ""}
                ${color == "purple" ? "text-purple-500" : ""}
                ${color == "fuchsia" ? "text-fuchsia-500" : ""}
                ${color == "pink" ? "text-pink-500" : ""}
                ${color == "rose" ? "text-rose-500" : ""}
              `}
          >
            <Icon icon={icon} />
          </span>

          <div className="ml-4">
            <p className="inline-flex text-base font-medium text-stone-50">
              {title}
              <ExternalLinkIcon className="mt-1 ml-2 h-4 w-4 text-stone-200" />
            </p>
            <p className="mt-1 text-sm text-stone-400">{description}</p>
          </div>
        </span>
      </a>
    );
  } else {
    return (
      <IntLink href={url}>
        <span className="flex max-w-lg cursor-pointer items-center gap-2 rounded bg-zinc-800 px-4 py-3 hover:bg-zinc-600">
          <span
            className={`h-10 w-10 flex-shrink-0
                ${color == "slate" ? "text-slate-500" : ""}
                ${color == "gray" ? "text-gray-500" : ""}
                ${color == "zinc" ? "text-zinc-500" : ""}
                ${color == "neutral" ? "text-neutral-500" : ""}
                ${color == "stone" ? "text-stone-500" : ""}
                ${color == "red" ? "text-red-500" : ""}
                ${color == "orange" ? "text-orange-500" : ""}
                ${color == "amber" ? "text-amber-500" : ""}
                ${color == "lime" ? "text-lime-500" : ""}
                ${color == "green" ? "text-green-500" : ""}
                ${color == "emerald" ? "text-emerald-500" : ""}
                ${color == "teal" ? "text-teal-500" : ""}
                ${color == "cyan" ? "text-cyan-500" : ""}
                ${color == "sky" ? "text-sky-500" : ""}
                ${color == "blue" ? "text-blue-500" : ""}
                ${color == "indigo" ? "text-indigo-500" : ""}
                ${color == "violet" ? "text-violet-500" : ""}
                ${color == "purple" ? "text-purple-500" : ""}
                ${color == "fuchsia" ? "text-fuchsia-500" : ""}
                ${color == "pink" ? "text-pink-500" : ""}
                ${color == "rose" ? "text-rose-500" : ""}
              `}
          >
            <Icon icon={icon} />
          </span>
          <div className="ml-4">
            <p className="text-base font-medium text-stone-50">{title}</p>
            <p className="mt-1 text-sm text-stone-400">{description}</p>
          </div>
        </span>
      </IntLink>
    );
  }
}

Bookmark.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlExternal: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

Bookmark.defaultProps = {};
