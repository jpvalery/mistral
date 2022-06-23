import React from "react";

import TextHelper from "./TextHelper";

export default {
  title: "Helpers/TextHelper",
  component: TextHelper,
};

const Template = (args) => <TextHelper {...args} />;

export const Default = Template.bind({});
Default.args = {};
