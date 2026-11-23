import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// The Vue plugin teaches Vite how to read .vue files.
export default defineConfig({
	plugins: [vue()],
	// TODO 4: Forward every /api request to the Express server.
	server: {
		proxy: {
			"/api": "http://localhost:3000",
		},
	},
});
