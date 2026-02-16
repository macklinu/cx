import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "src/index.ts",
  format: "esm",
  dts: true,
  exports: {
    enabled: true,
    devExports: "@macklinu/source",
  },
  attw: {
    enabled: true,
    profile: "esm-only",
  },
  sourcemap: true,
  clean: true,
});
