import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/MinecraftServerBuild/",

  lang: "zh-CN",
  title: "MinecraftServerBuild",
  description: "如何让开服新人从入坑到入坟",

  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
