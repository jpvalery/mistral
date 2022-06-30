import Header from "./Header";

export default {
  title: "Structure/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  brand: "Jp Valery",
  menus: [
    {
      title: {
        text: "About",
      },
      items: [
        {
          title: "/about",
          description: "Who the heck am I!?",
          icon: "UserCircleIcon",
          url: "/about",
          urlExternal: false,
          color: "amber",
        },
      ],
      cta: {
        text: "Get in touch about anything",
        url: "https://contact.jpvalery.me/",
      },
    },
    {
      title: {
        text: "Photography",
        icon: "CameraIcon",
        colorFrom: "#A56D5E",
        colorTo: "#16161D",
        link: "",
      },
      items: [
        {
          title: "Portfolio",
          description: "My photography portfolio",
          icon: "CameraIcon",
          url: "https://jpvalery.photo",
          urlExternal: true,
          color: "amber",
        },
      ],
      cta: {
        text: "Get in touch about my photography",
        url: "https://contact.jpvalery.me/photography",
      },
    },
  ],
};
