import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "My Button",
  color: "green",
  theme: "light",
};

export const External = Template.bind({});
External.args = {
  label: "My Button",
  color: "blue",
  theme: "dark",
  destination: "external",
  url: "https://jpvalery.me",
};

export const Step = Template.bind({});
Step.args = {
  label: "My Button",
  color: "purple",
  theme: "light",
  destination: "step",
};

export const Iconed = Template.bind({});
Iconed.args = {
  label: "My Button",
  color: "emerald",
  theme: "light",
  icon: "InboxInIcon",
};

export const Alert = Template.bind({});
Alert.args = {
  label: "My Button",
  color: "red",
  theme: "light",
  icon: "ShieldExclamationIcon",
};
