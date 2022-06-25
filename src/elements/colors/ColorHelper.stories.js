import React from "react";

import ColorHelper from "./ColorHelper";

export default {
  title: "Helpers/Color Helper",
  component: ColorHelper,
};

const Template = (args) => <ColorHelper {...args} />;

export const Default = Template.bind({});
Default.args = {};
