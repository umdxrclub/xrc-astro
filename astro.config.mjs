import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import dotenv from "dotenv"
import process from "process"

dotenv.config()

let imgDomains = ["umdxr.club", "localhost", "127.0.0.1", "media.discordapp.net"];

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? "https://xr.umd.edu",
  base: process.env.SITE_BASE,
  integrations: [react()],
  image: {
    domains: imgDomains,
  },
});
