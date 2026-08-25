import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const css = fs.readFileSync(path.join(root, "src/theme.css"), "utf8");
const client = fs.readFileSync(path.join(root, "src/client/index.ts"), "utf8");
const tokens = fs.readFileSync(path.join(root, "src/client/tokens.ts"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

test("package exposes a standard DSH host and client bundle", () => {
  assert.equal(pkg.name, "dsh-theme-eink-retro");
  assert.equal(pkg.main, "lib/index.js");
  assert.equal(pkg.exports["./client"], "./lib/client.js");
  assert.equal(pkg.dsh.client.platform, "web");
  assert.ok(pkg.dsh.client.inject.includes("@deepseek-ai/dsh-client-ui-theme"));
  assert.ok(pkg.dsh.client.inject.includes("@deepseek-ai/dsh-client-ui-settings"));
});

test("balanced mode uses the official semantic token layer", () => {
  assert.match(client, /overrideTokens\("dsh-theme-eink-retro", EINK_TOKENS\)/);
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
    assert.ok(tokens.includes(token), `missing ${token}`);
  }
  assert.doesNotMatch(tokens, /--aion-/i);
  assert.match(tokens, /pair\("#8e3f3f", "#d08a82"\)/i);
  assert.match(tokens, /pair\("#4e674d", "#8da284"\)/i);
  assert.match(tokens, /pair\("#735e20", "#c7aa62"\)/i);
  for (const neutral of ["#f4f4f4", "#ffffff", "#e8e8e8", "#d2d2d2", "#161616"]) {
    assert.ok(tokens.includes(neutral), `missing neutral ${neutral}`);
  }
  for (const paperTint of ["#f3efe4", "#eee9dc", "#e8e1d2", "#f0eadc"]) {
    assert.ok(!tokens.includes(paperTint), `unexpected warm paper tint ${paperTint}`);
  }
});

test("theme does not synthesize application structure", () => {
  assert.doesNotMatch(css, /content\s*:\s*["']/);
  assert.doesNotMatch(css, /position\s*:\s*fixed[^}]*inset\s*:\s*0/is);
  assert.doesNotMatch(css, /terminal|tui/i);
});

test("immersive mode owns all monochrome compatibility adapters", () => {
  for (const forbiddenHue of ["sage", "green", "ochre", "brick"]) {
    assert.doesNotMatch(css, new RegExp(`--eink-${forbiddenHue}`, "i"));
  }
  assert.match(css, /data-dsh-theme-eink-retro="immersive"/i);
  assert.match(css, /filter:\s*grayscale\(1\)/i);
  assert.doesNotMatch(css, /data-dsh-theme-eink-retro="balanced"/i);
  assert.doesNotMatch(css, /body:has\(/i);
  assert.doesNotMatch(css, /--aion-/i);
});

test("both active modes share crisp geometry and black-white interaction states", () => {
  assert.match(client, /root\.setAttribute\(ROOT_ATTRIBUTE, mode\)/);
  assert.match(css, /html\[data-dsh-theme-eink-retro\]/);
  assert.match(css, /--eink-radius-control:\s*2px/);
  assert.match(css, /--eink-radius-surface:\s*2px/);
  assert.match(css, /\[data-active="true"\]/);
  assert.match(css, /\[role="switch"\]\[aria-checked="true"\]/);
  assert.match(css, /span\[class\*="tabSearch"\]/);
});

test("composer preserves DSH's backdrop text and owns a single focus border", () => {
  assert.match(css, /textarea\[data-dsh-part="composer-input"\]/);
  assert.match(css, /background-color:\s*transparent\s*!important/);
  assert.match(css, /\[data-composer-card="true"\]:has\(/);
  assert.match(css, /textarea\[data-dsh-part="composer-input"\]:focus-visible/);
});

test("secondary tabs, markdown tables and capability badges keep readable hierarchy", () => {
  assert.match(
    css,
    /\[role="tab"\]\[aria-selected="true"\]\s*\{[^}]*background-color:\s*transparent\s*!important/s,
  );
  assert.match(css, /:where\(th, td\)\s*\{[^}]*padding:\s*8px 12px\s*!important/s);
  assert.match(
    css,
    /\[class\*="badgeInvokable"\]\s*\{[^}]*background-color:\s*transparent\s*!important/s,
  );
});

test("client exposes reversible modes and shares one style across reloads", () => {
  assert.match(client, /type ThemeMode = "balanced" \| "immersive" \| "off"/);
  assert.match(client, /localStorage\.setItem\(MODE_STORAGE_KEY, mode\)/);
  assert.match(client, /ctx\.slots\.inject\("settings\.section"/);
  assert.match(client, /users:\s*number/);
  assert.match(client, /state\.users \+= 1/);
  assert.match(client, /current\.users -= 1/);
  assert.match(client, /delete themeGlobal\[THEME_STATE_KEY\]/);
  assert.match(client, /if \(installingTokens \|\| releasingTokens\) return/);
  assert.match(client, /tokensAreApplied/);
  assert.match(client, /scheduleThemeSync/);
  assert.match(client, /EINK_TOKEN_SENTINEL/);
});
