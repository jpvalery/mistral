import React from "react";

import Header from "./Header";

export default {
  title: "Structure/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  brand: "Jp Valery",
  menus: exampleMenu,
};

const exampleMenu = [
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
      {
        title: "Contact Sheets",
        description: "An unfiltered stream of all my photos",
        icon: "RssIcon",
        url: "https://archive.jpvalery.photo",
        urlExternal: true,
        color: "purple",
      },
      {
        title: "Montréal Photo Club",
        description: "I founded a Photo Club in Montréal in 2019",
        icon: "UserGroupIcon",
        url: "https://montrealphoto.club",
        urlExternal: true,
        color: "sky",
      },
      {
        title: "Unsplash",
        description: "I share hundreds of photos for free on Unsplash",
        icon: "Unsplash",
        url: "https://unsplash.com/@jpvalery",
        urlExternal: true,
        color: "slate",
      },
    ],
    cta: {
      text: "Get in touch about my photography",
      url: "https://contact.jpvalery.me/photography",
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
      {
        title: "Contact Sheets",
        description: "An unfiltered stream of all my photos",
        icon: "RssIcon",
        url: "https://archive.jpvalery.photo",
        urlExternal: true,
        color: "purple",
      },
      {
        title: "Montréal Photo Club",
        description: "I founded a Photo Club in Montréal in 2019",
        icon: "UserGroupIcon",
        url: "https://montrealphoto.club",
        urlExternal: true,
        color: "sky",
      },
      {
        title: "Unsplash",
        description: "I share hundreds of photos for free on Unsplash",
        icon: "Unsplash",
        url: "https://unsplash.com/@jpvalery",
        urlExternal: true,
        color: "slate",
      },
    ],
    cta: {
      text: "Get in touch about my photography",
      url: "https://contact.jpvalery.me/photography",
    },
  },
];
