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
      className={`mx-auto flex w-full flex-col gap-6 rounded-lg bg-${color}-900 p-12 md:flex-row md:gap-12`}
    >
      <div className="flex-grow md:pr-6">
        <h2 className="pb-4 text-3xl font-extrabold text-white">{title}</h2>
        <p className="text-lg text-stone-200">{description}</p>
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
