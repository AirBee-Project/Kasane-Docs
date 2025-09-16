// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Kasane-Docs",
      defaultLocale: "ja",
      lastUpdated: true,
      locales: {
        en: {
          label: "English",
        },
        ja: {
          label: "日本語",
        },
        fr: {
          label: "Français",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "コンセプト",
          autogenerate: { directory: "concept" },
        },
        {
          label: "時空間ID",
          autogenerate: { directory: "spacetimeid" },
        },
        {
          label: "ドキュメント",
          autogenerate: { directory: "docs" },
        },
        {
          label: "API",
          autogenerate: { directory: "api" },
        },
        {
          label: "ライセンス",
          autogenerate: { directory: "license" },
        },
      ],
      customCss: ["./src/css/index.css"],
    }),
    mdx(),
  ],
});
