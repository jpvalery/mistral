import LogoGrid from "./LogoGrid";

import Github from "../../elements/icons/Github";

export default {
  title: "Components/LogoGrid",
  component: LogoGrid,
};

const Template = (args) => <LogoGrid>{args.children}</LogoGrid>;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Github />
      <Github />
      <Github />
      <Github />
      <Github />
      <Github />
      <Github />
      <p>and more</p>
    </>
  ),
};
