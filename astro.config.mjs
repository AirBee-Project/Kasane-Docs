// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeBlack from "starlight-theme-black";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightThemeBlack({
          navLinks: [
            {
              // optional
              label: "Docs",
              link: "/getting-started",
            },
          ],
          //optional
          footerText:
            "Built & designed by [shadcn](https://twitter.com/shadcn). Ported to Astro Starlight by [Adrián UB](https://github.com/adrian-ub). The source code is available on [GitHub](https://github.com/adrian-ub/starlight-theme-black).",
        }),
      ],
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
          label: "ライセンス",
          autogenerate: { directory: "license" },
        },
      ],
      customCss: ["./src/css/index.css"],
    }),
  ],
});
