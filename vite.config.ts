import { defineConfig } from "vite";

import laravel from 'laravel-vite-plugin'
import solid from "vite-plugin-solid";

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/main.tsx'
        ]),
        solid()
    ],
});
