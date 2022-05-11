import { defineConfig, Plugin } from "vite";

import solid from "vite-plugin-solid";

// @ts-ignore
export default defineConfig(({ command }) => {
    const IS_DEV = command === "serve";

    return {
        target: "esnext",
        base: IS_DEV ? "" : "/build/",
        publicDir: "non_existent_folder",
        build: {
            outDir: "public/build",
            manifest: true,
            rollupOptions: {
                input: ["resources/js/main.tsx", "resources/css/app.css"],
            },
        },
        plugins: [solid()],
    };
});
