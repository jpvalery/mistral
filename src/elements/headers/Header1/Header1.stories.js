import Header1 from "./Header1";

export default {
  title: "Elements/Headers/Header1",
  component: Header1,
};

const Template = (args) => <Header1>{args.text}</Header1>;

export const Default = Template.bind({});
Default.args = {
  text: "Lorem Ipsum"
};