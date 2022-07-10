import { ExternalLinkIcon } from "@heroicons/react/solid";
import NextLink from "next/link";
import PropTypes from "prop-types";
import React from "react";

import HeroIcon from "../../elements/icons/DynamicIcon";

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
        <span className="flex max-w-lg cursor-pointer items-center gap-2 rounded-lg bg-zinc-800 px-4 py-3 hover:bg-zinc-600">
          <span className={`h-10 w-10 flex-shrink-0 text-${color}-500`}>
            <HeroIcon icon={icon} />
          </span>

          <div className="ml-4">
            <p className="inline-flex text-base font-medium text-stone-100">
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
        <span className="flex max-w-lg cursor-pointer items-center gap-2 rounded-lg bg-zinc-800 px-4 py-3 hover:bg-zinc-600">
          <span className={`h-10 w-10 flex-shrink-0 text-${color}-500`}>
            <HeroIcon icon={icon} />
          </span>
          <div className="ml-4">
            <p className="text-base font-medium text-stone-100">{title}</p>
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
