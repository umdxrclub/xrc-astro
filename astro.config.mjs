import { defineConfig } from "astro/config";
import process from "process";
import dotenv from "dotenv";
import react from "@astrojs/react";

dotenv.config();

let imgDomains = ["umdxr.club"];
if (process.env.XRC_SUITE_URL) imgDomains.push(process.env.XRC_SUITE_URL);

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  image: {
    domains: imgDomains,
  },
});
