import CallToAction from "./CallToAction";

export default {
  title: "Components/CallToAction",
  component: CallToAction,
};

const Template = (args) => <CallToAction {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "My CallToAction",
  color: "green",
  theme: "light",
};
