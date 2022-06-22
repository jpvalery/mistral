import { create } from "@storybook/theming";
import logo from "./public/logo.svg";

export default create({
  base: "dark",
  brandTitle: "Mistral",
  brandUrl: "https://mistral.jpvalery.me",
  brandImage: logo,
  brandTarget: "_self",
});
