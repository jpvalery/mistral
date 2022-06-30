import Header4 from "./Header4";

export default {
  title: "Elements/Headers/Header4",
  component: Header4,
};

const Template = (args) => <Header4>{args.text}</Header4>;

export const Default = Template.bind({});
Default.args = {
  text: "Lorem Ipsum"
};