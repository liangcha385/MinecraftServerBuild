import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "首次开服",
      icon: "book",
      prefix: "building/",
      children: "structure",
    },
  ],
});
