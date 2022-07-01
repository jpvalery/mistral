import Header3 from "./Header3";

export default {
  title: "Elements/Headers/Header3",
  component: Header3,
};

const Template = (args) => <Header3>{args.text}</Header3>;

export const Default = Template.bind({});
Default.args = {
  text: "Lorem Ipsum",
};
