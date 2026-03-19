import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, "partials"),
            helpers: {
                array: (...args) => args.slice(0, -1),
                // list=(array 'Item 1', 'Item 2')
                eq: (a, b) => a === b,
                // {{#if (eq @index 0)}}active{{/if}}
            },
            context: {
                list: ["Item 1", "Item 1"],
            },
            // {{#each list}}
            // <div>{{this}}</div>
            // {{/each}}
        }),
    ],

    build: {
        minify: false,
        rollupOptions: {
            input: ["index.html"],
        },
    },
});
