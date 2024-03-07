import { defineConfig } from "astro/config";
import react from "@astrojs/react";

let imgDomains = ["umdxr.club", "localhost", "127.0.0.1", "media.discordapp.net"];

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  image: {
    domains: imgDomains,
  },
});
