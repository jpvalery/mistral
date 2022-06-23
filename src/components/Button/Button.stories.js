import React from "react";

import Button from "./Button";

export default {
  title: "Components/Buttons/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "My Button",
};
