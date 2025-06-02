import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                dir: "dist",
                format: "cjs",
                sourcemap: true,
                entryFileNames: "index.js",
            },
            {
                dir: "dist",
                format: "esm",
                sourcemap: true,
                entryFileNames: "index.mjs",
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                jsx: "react",
            }),
            terser(),
            postcss({
                extract: true,
                minimize: true,
            }),
        ],
        external: ["react", "react-dom", "@heroui/react","react-hook-form", 'framer-motion'],
        onwarn(warning, warn) {
            if (warning.code === "CIRCULAR_DEPENDENCY") return;
            warn(warning);
        },
    },
    {
        input: "src/index.ts",
        output: {
            dir: "dist",
            format: "es",
            entryFileNames: "index.d.ts",
        },
        plugins: [dts.default()],
        external: [/\.css$/],
    },
];