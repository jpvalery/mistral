import Header2 from "./Header2";

export default {
  title: "Elements/Headers/Header2",
  component: Header2,
};

const Template = (args) => <Header2>{args.text}</Header2>;

export const Default = Template.bind({});
Default.args = {
  text: "Lorem Ipsum"
};