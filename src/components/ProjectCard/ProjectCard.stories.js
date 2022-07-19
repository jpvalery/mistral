import ProjectCard from "./ProjectCard";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
};

const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "ArchiveIcon",
  title: "An old project",
  years: "2009-2019",
  link: "https://lorem.test",
  description: "Lorem ipsum sit dolor amet",
};
