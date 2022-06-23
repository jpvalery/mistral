import React from "react";

import Bookmark from "./Bookmark";

export default {
  title: "Components/Bookmark",
  component: Bookmark,
};

const Template = (args) => <Bookmark {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Lorem ipsum sit dolor amet",
  icon: "UserCircleIcon",
  url: "/about",
  urlExternal: false,
  color: "sky",
};
