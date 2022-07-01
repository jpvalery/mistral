import Post from "./Post";

export default {
  title: "Components/Post",
  component: Post,
};

const Template = (args) => <Post header={args.header}>{args.content}</Post>;

export const Default = Template.bind({});
Default.args = {
  header: "Title",
  content: (
    <p>
      Lorem ipsum sit dolor amet
      <br />
      <em>Lorem ipsum sit dolor amet</em>
    </p>
  ),
};
