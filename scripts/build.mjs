import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const lib = path.join(root, "lib");

await build({
  entryPoints: [path.join(root, "src/host/index.ts")],
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node20",
  outfile: path.join(lib, "index.js"),
  external: ["@deepseek-ai/*", "node:*"],
  logLevel: "info",
});

const client = await build({
  entryPoints: [path.join(root, "src/client/entry.ts")],
  bundle: true,
  platform: "browser",
  format: "cjs",
  target: "es2020",
  loader: { ".css": "text" },
  external: ["react"],
  write: false,
  logLevel: "info",
});

const bundle = client.outputFiles[0].text;
const wrapped = [
  "window.__ModuleLoader__.load({",
  '  id: "dsh-theme-eink-retro",',
  "  factory: (require) => {",
  "    var module = { exports: {} };",
  "    var exports = module.exports;",
  bundle,
  "    return module.exports;",
  "  },",
  "});",
  "",
].join("\n");

fs.mkdirSync(lib, { recursive: true });
fs.writeFileSync(path.join(lib, "client.js"), wrapped);
console.log("built: lib/index.js + lib/client.js");
