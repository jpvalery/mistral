import PropTypes from "prop-types";
import React from "react";

import Button from "../Button/Button";

export default function CallToAction({
  title,
  description,
  color,
  ctaPrimaryLabel,
  ctaPrimaryIcon,
  ctaPrimaryDestination,
  ctaPrimaryOnClick,
  ctaPrimaryColor,
  ctaPrimaryTheme,
  ctaPrimaryUrl,
  ctaSecondaryLabel,
  ctaSecondaryIcon,
  ctaSecondaryDestination,
  ctaSecondaryOnClick,
  ctaSecondaryColor,
  ctaSecondaryTheme,
  ctaSecondaryUrl,
}) {
  return (
    <div
      className={`mx-auto flex w-full flex-col gap-6 rounded 
      ${color == "slate" ? "bg-slate-900" : ""}
      ${color == "gray" ? "bg-gray-900" : ""}
      ${color == "zinc" ? "bg-zinc-900" : ""}
      ${color == "neutral" ? "bg-neutral-900" : ""}
      ${color == "stone" ? "bg-stone-900" : ""}
      ${color == "red" ? "bg-red-900" : ""}
      ${color == "orange" ? "bg-orange-900" : ""}
      ${color == "amber" ? "bg-amber-900" : ""}
      ${color == "lime" ? "bg-lime-900" : ""}
      ${color == "green" ? "bg-green-900" : ""}
      ${color == "emerald" ? "bg-emerald-900" : ""}
      ${color == "teal" ? "bg-teal-900" : ""}
      ${color == "cyan" ? "bg-cyan-900" : ""}
      ${color == "sky" ? "bg-sky-900" : ""}
      ${color == "blue" ? "bg-blue-900" : ""}
      ${color == "indigo" ? "bg-indigo-900" : ""}
      ${color == "violet" ? "bg-violet-900" : ""}
      ${color == "purple" ? "bg-purple-900" : ""}
      ${color == "fuchsia" ? "bg-fuchsia-900" : ""}
      ${color == "pink" ? "bg-pink-900" : ""}
      ${color == "rose" ? "bg-rose-900" : ""}
      p-12 md:flex-row md:gap-12`}
    >
      <div className="flex-grow md:pr-6">
        <h2 className="pb-4 text-3xl font-extrabold text-white">{title}</h2>
        <p className="text-lg text-stone-100">{description}</p>
      </div>
      <div>
        <div className="grid grid-rows-2 gap-4">
          <Button
            destination={ctaPrimaryDestination}
            icon={ctaPrimaryIcon}
            label={ctaPrimaryLabel}
            onClick={ctaPrimaryOnClick}
            theme={ctaPrimaryTheme}
            url={ctaPrimaryUrl}
            color={ctaPrimaryColor}
          />
          {ctaSecondaryLabel && (
            <Button
              destination={ctaSecondaryDestination}
              icon={ctaSecondaryIcon}
              label={ctaSecondaryLabel}
              onClick={ctaSecondaryOnClick}
              theme={ctaSecondaryTheme}
              url={ctaSecondaryUrl}
              color={ctaSecondaryColor}
            />
          )}
        </div>
      </div>
    </div>
  );
}

CallToAction.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ctaPrimaryLabel: PropTypes.string.isRequired,
  ctaPrimaryIcon: PropTypes.string,
  ctaPrimaryDestination: PropTypes.oneOf(["external", "step"]),
  ctaPrimaryOnClick: PropTypes.func,
  ctaPrimaryColor: PropTypes.string,
  ctaPrimaryTheme: PropTypes.oneOf(["dark", "light"]),
  ctaPrimaryUrl: PropTypes.string,
  ctaSecondaryLabel: PropTypes.string.isRequired,
  ctaSecondaryIcon: PropTypes.string,
  ctaSecondaryDestination: PropTypes.oneOf(["external", "step"]),
  ctaSecondaryOnClick: PropTypes.func,
  ctaSecondaryColor: PropTypes.string,
  ctaSecondaryTheme: PropTypes.oneOf(["dark", "light"]),
  ctaSecondaryUrl: PropTypes.string,
};

CallToAction.defaultProps = {
  color: "emerald",
  title: "Title of the section",
  description: "Lorem dolor sit amet",
  ctaPrimaryLabel: "Click",
  ctaPrimaryIcon: undefined,
  ctaPrimaryDestination: "step",
  ctaPrimaryOnClick: undefined,
  ctaPrimaryColor: "green",
  ctaPrimaryTheme: "dark",
  ctaPrimaryUrl: "/destination",
  ctaSecondaryLabel: "Click",
  ctaSecondaryIcon: undefined,
  ctaSecondaryDestination: "external",
  ctaSecondaryOnClick: undefined,
  ctaSecondaryColor: "blue",
  ctaSecondaryTheme: "light",
  ctaSecondaryUrl: "/destination",
};
