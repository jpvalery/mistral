import Footer from "./Footer";

export default {
  title: "Structure/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  displaySocial: true,
};
