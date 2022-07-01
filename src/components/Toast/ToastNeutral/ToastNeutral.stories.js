import ToastNeutral from "./ToastNeutral";

export default {
  title: "Components/Toast/ToastNeutral",
  component: ToastNeutral,
};

const Template = (args) => <ToastNeutral {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Lorem ipsum sit dolor amet",
};
