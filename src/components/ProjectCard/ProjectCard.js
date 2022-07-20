import PropTypes from "prop-types";
import React from "react";

import Icon from "../../elements/icons/Icon";
import Button from "../Button/Button";

export default function ProjectCard({ icon, title, years, link, description }) {
  return (
    <div className="divide-y divide-stone-200 overflow-hidden rounded shadow-lg shadow-zinc-200/5">
      <div className="bg-stone-800 px-4 py-5 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-4 text-stone-50">
            <span className="h-8 w-8">
              <Icon icon={icon} stroke="1" />
            </span>
            <h2 className="text-2xl font-bold">{title}</h2>
            <span className="text-sm font-medium">({years || "-"})</span>
          </div>
          <div>
            <Button
              color="zinc"
              destination="external"
              label="Explore"
              onClick={function noRefCheck() {}}
              theme="light"
              url={link}
            />
          </div>
        </div>
      </div>
      <div className="bg-stone-900 p-6 text-stone-100">
        {description || "-"}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  years: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
};

ProjectCard.defaultProps = {
  icon: "ArchiveIcon",
};
