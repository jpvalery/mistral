import Post from "./Post";

export default {
  title: "Components/Post",
  component: Post,
};

const Template = (args) => <Post {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: "Title",
  children: defaultChildren,
};

const defaultChildren = (
  <>
    <p>123</p>
  </>
);
