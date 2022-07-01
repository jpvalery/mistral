import ToastSuccess from "./ToastSuccess";

export default {
  title: "Components/Toast/ToastSuccess",
  component: ToastSuccess,
};

const Template = (args) => <ToastSuccess {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Successfully submitted!",
};
