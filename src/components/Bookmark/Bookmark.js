import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";

import Icon from "../../elements/icons/Icon";

const IntLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

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
        <span className="flex max-w-lg cursor-pointer items-center gap-2 rounded bg-zinc-800 px-4 py-3 shadow-md shadow-zinc-900/20 hover:bg-zinc-800/70">
          <span
            className={`h-10 w-10 ${
              icon == "Growth" ? "text-center" : ""
            } flex-shrink-0 
              ${
                color == "slate"
                  ? "text-slate-500 drop-shadow-[0_0_1rem_#F1F5F960]"
                  : ""
              }
              ${
                color == "gray"
                  ? "text-gray-500 drop-shadow-[0_0_1rem_#F3F4F660]"
                  : ""
              }
              ${
                color == "zinc"
                  ? "text-zinc-500 drop-shadow-[0_0_1rem_#F4F4F560]"
                  : ""
              }
              ${
                color == "neutral"
                  ? "text-neutral-500 drop-shadow-[0_0_1rem_#F5F5F560]"
                  : ""
              }
              ${
                color == "stone"
                  ? "text-stone-500 drop-shadow-[0_0_1rem_#F5F5F460]"
                  : ""
              }
              ${
                color == "red"
                  ? "text-red-500 drop-shadow-[0_0_1rem_#FECACA60]"
                  : ""
              }
              ${
                color == "orange"
                  ? "text-orange-500 drop-shadow-[0_0_1rem_#FFEDD560]"
                  : ""
              }
              ${
                color == "amber"
                  ? "text-amber-500 drop-shadow-[0_0_1rem_#FEF3C760]"
                  : ""
              }
              ${
                color == "lime"
                  ? "text-lime-500 drop-shadow-[0_0_1rem_#ECFCCB60]"
                  : ""
              }
              ${
                color == "green"
                  ? "text-green-500 drop-shadow-[0_0_1rem_#DCFEC760]"
                  : ""
              }
              ${
                color == "emerald"
                  ? "text-emerald-500 drop-shadow-[0_0_1rem_#D1FAE560]"
                  : ""
              }
              ${
                color == "teal"
                  ? "text-teal-500 drop-shadow-[0_0_1rem_#CCFBF160]"
                  : ""
              }
              ${
                color == "cyan"
                  ? "text-cyan-500 drop-shadow-[0_0_1rem_#CFFAFE60]"
                  : ""
              }
              ${
                color == "sky"
                  ? "text-sky-500 drop-shadow-[0_0_1rem_#E0F2FE60]"
                  : ""
              }
              ${
                color == "blue"
                  ? "text-blue-500 drop-shadow-[0_0_1rem_#DBEAFE60]"
                  : ""
              }
              ${
                color == "indigo"
                  ? "text-indigo-500 drop-shadow-[0_0_1rem_#E0E7FF60]"
                  : ""
              }
              ${
                color == "violet"
                  ? "text-violet-500 drop-shadow-[0_0_1rem_#EDE9FE60]"
                  : ""
              }
              ${
                color == "purple"
                  ? "text-purple-500 drop-shadow-[0_0_1rem_#F3E8FF60]"
                  : ""
              }
              ${
                color == "fuchsia"
                  ? "text-fuchsia-500 drop-shadow-[0_0_1rem_#FAE8FF60]"
                  : ""
              }
              ${
                color == "pink"
                  ? "text-pink-500 drop-shadow-[0_0_1rem_#FCE7F360]"
                  : ""
              }
              ${
                color == "rose"
                  ? "text-rose-500 drop-shadow-[0_0_1rem_#FFE4E660]"
                  : ""
              }
              ${
                color == "accent"
                  ? "text-[#D8D8C7] drop-shadow-[0_0_1rem_#D8D8C730]"
                  : ""
              }
              `}
          >
            <Icon icon={icon} stroke={"1"} />
          </span>

          <div className="ml-4">
            <p className="inline-flex text-base font-medium text-stone-50">
              {title}
              <ArrowTopRightOnSquareIcon className="mt-1 ml-2 h-4 w-4 text-stone-200" />
            </p>
            <p className="mt-1 text-sm text-stone-400">{description}</p>
          </div>
        </span>
      </a>
    );
  } else {
    return (
      <IntLink href={url}>
        <span className="flex max-w-lg cursor-pointer items-center gap-2 rounded bg-zinc-800 px-4 py-3 shadow-md shadow-zinc-900/20 hover:bg-zinc-800/70">
          <span
            className={`h-10 w-10 ${
              icon == "Growth" ? "text-center" : ""
            } flex-shrink-0 
              ${
                color == "slate"
                  ? "text-slate-500 drop-shadow-[0_0_1rem_#F1F5F960]"
                  : ""
              }
              ${
                color == "gray"
                  ? "text-gray-500 drop-shadow-[0_0_1rem_#F3F4F660]"
                  : ""
              }
              ${
                color == "zinc"
                  ? "text-zinc-500 drop-shadow-[0_0_1rem_#F4F4F560]"
                  : ""
              }
              ${
                color == "neutral"
                  ? "text-neutral-500 drop-shadow-[0_0_1rem_#F5F5F560]"
                  : ""
              }
              ${
                color == "stone"
                  ? "text-stone-500 drop-shadow-[0_0_1rem_#F5F5F460]"
                  : ""
              }
              ${
                color == "red"
                  ? "text-red-500 drop-shadow-[0_0_1rem_#FECACA60]"
                  : ""
              }
              ${
                color == "orange"
                  ? "text-orange-500 drop-shadow-[0_0_1rem_#FFEDD560]"
                  : ""
              }
              ${
                color == "amber"
                  ? "text-amber-500 drop-shadow-[0_0_1rem_#FEF3C760]"
                  : ""
              }
              ${
                color == "lime"
                  ? "text-lime-500 drop-shadow-[0_0_1rem_#ECFCCB60]"
                  : ""
              }
              ${
                color == "green"
                  ? "text-green-500 drop-shadow-[0_0_1rem_#DCFEC760]"
                  : ""
              }
              ${
                color == "emerald"
                  ? "text-emerald-500 drop-shadow-[0_0_1rem_#D1FAE560]"
                  : ""
              }
              ${
                color == "teal"
                  ? "text-teal-500 drop-shadow-[0_0_1rem_#CCFBF160]"
                  : ""
              }
              ${
                color == "cyan"
                  ? "text-cyan-500 drop-shadow-[0_0_1rem_#CFFAFE60]"
                  : ""
              }
              ${
                color == "sky"
                  ? "text-sky-500 drop-shadow-[0_0_1rem_#E0F2FE60]"
                  : ""
              }
              ${
                color == "blue"
                  ? "text-blue-500 drop-shadow-[0_0_1rem_#DBEAFE60]"
                  : ""
              }
              ${
                color == "indigo"
                  ? "text-indigo-500 drop-shadow-[0_0_1rem_#E0E7FF60]"
                  : ""
              }
              ${
                color == "violet"
                  ? "text-violet-500 drop-shadow-[0_0_1rem_#EDE9FE60]"
                  : ""
              }
              ${
                color == "purple"
                  ? "text-purple-500 drop-shadow-[0_0_1rem_#F3E8FF60]"
                  : ""
              }
              ${
                color == "fuchsia"
                  ? "text-fuchsia-500 drop-shadow-[0_0_1rem_#FAE8FF60]"
                  : ""
              }
              ${
                color == "pink"
                  ? "text-pink-500 drop-shadow-[0_0_1rem_#FCE7F360]"
                  : ""
              }
              ${
                color == "rose"
                  ? "text-rose-500 drop-shadow-[0_0_1rem_#FFE4E660]"
                  : ""
              }
              ${
                color == "accent"
                  ? "text-[#D8D8C7] drop-shadow-[0_0_1rem_#D8D8C730]"
                  : ""
              }
              `}
          >
            <Icon icon={icon} stroke={"1"} />
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
