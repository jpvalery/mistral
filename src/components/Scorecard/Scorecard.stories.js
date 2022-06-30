import Scorecard from "./Scorecard";

export default {
  title: "Components/Scorecard",
  component: Scorecard,
};

const Template = (args) => <Scorecard {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: "Title",
  link: "https://domain.tld",
  metric: "128319876",
  color: "rose",
};
