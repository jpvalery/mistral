import React from "react";

import MainBody from "./MainBody";

export default {
  title: "Structure/MainBody",
  component: MainBody,
};

const Template = (args) => <MainBody {...args} />;

export const Default = Template.bind({});
Default.args = {
};
