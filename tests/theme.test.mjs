import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const css = fs.readFileSync(path.join(root, "src/theme.css"), "utf8");
const client = fs.readFileSync(path.join(root, "src/client/index.ts"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

test("package exposes a standard DSH host and client bundle", () => {
  assert.equal(pkg.name, "dsh-theme-eink-retro");
  assert.equal(pkg.main, "lib/index.js");
  assert.equal(pkg.exports["./client"], "./lib/client.js");
  assert.equal(pkg.dsh.client.platform, "web");
});

test("theme is scoped and covers the official core tokens", () => {
  assert.match(css, /html\[data-dsh-theme-eink-retro="on"\]/);
  for (const token of [
    "--dsw-alias-bg-base",
    "--dsw-alias-bg-layer-1",
    "--dsw-alias-label-primary",
    "--dsw-alias-label-secondary",
    "--dsw-alias-brand-primary",
    "--dsw-alias-border-l1",
    "--dsw-alias-border-l2",
    "--dsw-alias-bg-mask-drop",
    "--dsw-alias-scrollbar-bg-l1",
    "--dsw-shadow-lv1",
  ]) {
    assert.ok(css.includes(token), `missing ${token}`);
  }
});

test("theme does not synthesize application structure", () => {
  assert.doesNotMatch(css, /content\s*:\s*["']/);
  assert.doesNotMatch(css, /position\s*:\s*fixed[^}]*inset\s*:\s*0/is);
  assert.doesNotMatch(css, /terminal|tui/i);
});

test("client shares one reference-counted style across reloads", () => {
  assert.match(client, /users:\s*number/);
  assert.match(client, /state\.users \+= 1/);
  assert.match(client, /current\.users -= 1/);
  assert.match(client, /delete themeGlobal\[THEME_STATE_KEY\]/);
});
