// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Kasane-Docs",
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
          autogenerate: { directory: "reference" },
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
