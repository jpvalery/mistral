import PropTypes from "prop-types";
import React from "react";

import Icon from "../../elements/icons/Icon";
import Button from "../Button/Button";

export default function ProjectCard({ icon, title, years, link, description }) {
  return (
    <div className="grid gap-2 rounded-md p-3 shadow-md shadow-zinc-900/20 hover:bg-zinc-800/70 hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-zinc-100/50">
      <div className="rounded-md bg-stone-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-5 text-stone-50">
            <span className="h-8 w-8">
              <Icon icon={icon} stroke="1" />
            </span>
            <h2 className="text-2xl font-bold">{title}</h2>
            <span className="text-sm font-medium">({years || "-"})</span>
          </div>

          <Button
            color="zinc"
            destination="external"
            label="Explore"
            onClick={function noRefCheck() {}}
            url={link}
            maxW={true}
          />
        </div>
      </div>
      <div className="rounded-md bg-stone-900 p-6 text-stone-100">
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
