import babel from "@rollup/plugin-babel";
import externals from "rollup-plugin-node-externals";
import postcss from "rollup-plugin-postcss";

import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";


const packageJson = require("./package.json");

export default {
  input: "./src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    externals(),
    external(),
    commonjs(),
  ],
};
