import { ExternalLinkIcon } from "@heroicons/react/solid";
import format from "comma-number";
import PropTypes from "prop-types";
import React from "react";

export default function Scorecard({ header, link, metric, color }) {
  const number = format(metric);

  return (
    <div className="metric-card max-w-md overflow-hidden rounded-lg bg-stone-800 p-5 shadow">
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="flex items-center pb-2 text-stone-200">
          <p className="text-lg font-medium">{header}</p>
          <ExternalLinkIcon className="ml-2 h-4 w-4" />
        </div>
      </a>
      <p
        className={`mt-1 text-3xl font-semibold text-${color}-600 hover:text-${color}-500`}
      >
        {number || "-"}
      </p>
    </div>
  );
}

Scorecard.propTypes = {
  header: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  metric: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

Scorecard.defaultProps = {
  color: "rose",
};
