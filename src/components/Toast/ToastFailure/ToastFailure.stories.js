import ToastFailure from "./ToastFailure";

export default {
  title: "Components/Toast/ToastFailure",
  component: ToastFailure,
};

const Template = (args) => <ToastFailure {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Couldn't submit [Error X]",
};
