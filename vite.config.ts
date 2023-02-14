import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Frontend-mentor_time-tracking-dashboard/",
  plugins: [vue()],
});
