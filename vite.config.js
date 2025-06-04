import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // ホストからのアクセスを許可
    watch: {
      usePolling: true, // Docker環境でのファイル変更検知用
    },
  },
});
