import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kasane",
  description: "Kasane is 4D SpaceTime Query Database",
  locales: {
    "/": {
      label: "English",
    },
    "/ja/": {
      label: "日本語",
    },
  },
  themeConfig: {
    langMenuLabel: "a",
    outline: [2, 3],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/concepts/concepts.html" },
    ],

    sidebar: [
      {
        link: "/docs/index",
        items: [
          {
            text: "コンセプト",
            collapsed: false,
            items: [
              { text: "コンセプト", link: "/docs/concepts/concepts" },
              { text: "ロードマップ", link: "/docs/concepts/feature" },
            ],
          },
          {
            text: "基本文法",
            collapsed: false,
            items: [
              { text: "時空間ID", link: "/docs/grammar/spacetimeid" },
              { text: "Space", link: "/docs/grammar/space" },
              { text: "Key", link: "/docs/grammar/key" },
              { text: "Select", link: "/docs/grammar/select" },
              { text: "共通ルール", link: "/docs/grammar/grammar" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
