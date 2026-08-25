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
const readmeEn = fs.readFileSync(path.join(root, "README.md"), "utf8");
const readmeZh = fs.readFileSync(path.join(root, "README.zh-CN.md"), "utf8");

test("package exposes a standard DSH host and client bundle", () => {
  assert.equal(pkg.name, "dsh-theme-eink-retro");
  assert.equal(pkg.main, "lib/index.js");
  assert.equal(pkg.exports["./client"], "./lib/client.js");
  assert.equal(pkg.dsh.client.platform, "web");
  assert.ok(pkg.dsh.client.inject.includes("@deepseek-ai/dsh-client-ui-theme"));
  assert.ok(pkg.dsh.client.inject.includes("@deepseek-ai/dsh-client-ui-settings"));
});

test("package ships user-facing documentation in English and Chinese", () => {
  assert.ok(pkg.files.includes("README.md"));
  assert.ok(pkg.files.includes("README.zh-CN.md"));
  assert.match(readmeEn, /Install from source/);
  assert.match(readmeEn, /Compatibility boundaries/);
  assert.match(readmeZh, /从源码安装/);
  assert.match(readmeZh, /兼容边界/);
});

test("settings use a native checkbox for the theme enabled state", () => {
  assert.match(
    client,
    /React\.createElement\(\s*"input",\s*\{[^}]*type:\s*"checkbox"[^}]*className:\s*"eink-retro-settings__enabled-input"/s,
  );
  assert.match(
    css,
    /\.eink-retro-settings__enabled-input\s*\{[^}]*appearance:\s*auto\s*!important/s,
  );
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
  assert.match(
    css,
    /\[data-dsh-part="scrollport"\]\s*>\s*:has\(\s*\[data-composer-card="true"\]\s*\)::before\s*\{[^}]*linear-gradient/s,
  );
});

test("form controls use one focus owner and trajectory search has one frame", () => {
  assert.match(
    css,
    /:where\(input, textarea, select, \[contenteditable="true"\]\):focus-visible\s*\{[^}]*outline:\s*0\s*!important[^}]*border-color:\s*var\(--eink-ink\)/s,
  );
  assert.doesNotMatch(
    css,
    /:where\([^)]*button[^)]*input[^)]*\):focus-visible\s*\{[^}]*outline-offset:\s*2px/s,
  );
  assert.match(
    css,
    /\[role="toolbar"\]:has\(input\[type="search"\]\)[^{]*input\[type="search"\][^{]*\{[^}]*background-color:\s*transparent\s*!important[^}]*box-shadow:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[role="toolbar"\]:has\(input\[type="search"\]\)[^{]*:has\(\s*>\s*input\[type="search"\]:focus-visible\s*\)[^{]*\{[^}]*border-color:\s*var\(--eink-ink\)/s,
  );
});

test("workspace tooltips stay legible and the add button owns an unclipped focus frame", () => {
  assert.match(
    css,
    /\[role="tooltip"\]\s*\{[^}]*color:\s*var\(--eink-selection-fg\)\s*!important[^}]*background-color:\s*var\(--eink-selection-bg\)\s*!important/s,
  );
  assert.match(
    css,
    /button\[aria-label="添加工作区"\]:focus-visible\s*\{[^}]*outline:\s*0\s*!important[^}]*box-shadow:\s*inset 0 0 0 1px var\(--eink-ink\)\s*!important/s,
  );
});

test("workspace search and user messages use crisp surfaces with one focus owner", () => {
  assert.match(
    css,
    /:has\(> button\[aria-label="搜索会话"\]\)\s*\{[^}]*border-radius:\s*var\(--eink-radius-control\)\s*!important/s,
  );
  assert.match(
    css,
    /:has\(> button\[aria-label="搜索会话"\]\)\s*>\s*input\[placeholder="搜索会话…"\]\s*\{[^}]*background-color:\s*transparent\s*!important[^}]*box-shadow:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /:has\(> input\[placeholder="搜索会话…"\]:focus-visible\)\s*\{[^}]*border-color:\s*var\(--eink-ink\)\s*!important/s,
  );
  assert.match(
    css,
    /\[data-chat-flow-kind="user"\][^{]*\[data-time-hover-root="true"\][^{]*>\s*:first-child\s*>\s*:last-child\s*\{[^}]*border-radius:\s*var\(--eink-radius-surface\)\s*!important/s,
  );
});

test("message editing restores the legacy control tokens inside the turn tail", () => {
  assert.match(
    css,
    /\[data-slot="conversation\.chat\.turnTail"\]:has\(textarea\[placeholder="编辑"\]\)\s*\{[^}]*--dsw-alias-border:\s*var\(--eink-rule-strong\)[^}]*--dsw-alias-fill-primary:\s*var\(--eink-paper-bright\)[^}]*--dsw-alias-text-primary:\s*var\(--eink-ink\)[^}]*--dsw-alias-accent:\s*var\(--eink-selection-bg\)[^}]*--dsw-alias-text-on-accent:\s*var\(--eink-selection-fg\)/s,
  );
  assert.match(
    css,
    /\[data-slot="conversation\.chat\.turnTail"\]:has\(textarea\[placeholder="编辑"\]\)[^{]*:has\(> textarea\[placeholder="编辑"\]\)[^{]*>\s*:nth-child\(2\)\s*>\s*button:first-child\s*\{[^}]*background-color:\s*var\(--eink-paper-bright\)\s*!important/s,
  );
});

test("approval requests and active turn status use neutral ink treatments", () => {
  assert.match(
    css,
    /:has\(> \[aria-label="审批详情"\]\)\s*\{[^}]*background-color:\s*var\(--eink-paper-bright\)\s*!important[^}]*border-color:\s*var\(--eink-rule-strong\)\s*!important/s,
  );
  assert.match(
    css,
    /:has\(> \[aria-label="审批详情"\]\)\s*>\s*:first-child\s*\{[^}]*color:\s*var\(--eink-ink\)\s*!important[^}]*background-color:\s*var\(--eink-paper-raised\)\s*!important[^}]*border-bottom:\s*1px solid var\(--eink-rule\)\s*!important/s,
  );
  assert.match(
    css,
    /\[data-chat-flow\]\s*>\s*\[role="status"\]\s*\{[^}]*color:\s*var\(--eink-ink-2\)[^}]*-webkit-text-fill-color:\s*currentColor\s*!important[^}]*background-image:\s*none\s*!important[^}]*animation:\s*eink-retro-turn-status-refresh 2\.4s steps\(1, end\) infinite\s*!important/s,
  );
  assert.match(css, /@keyframes eink-retro-turn-status-refresh/);
  assert.match(
    css,
    /@media \(prefers-reduced-motion: reduce\)[^{]*\{[\s\S]*?\[data-chat-flow\]\s*>\s*\[role="status"\]\s*\{[^}]*animation:\s*none\s*!important/s,
  );
});

test("settings plugin cards share one neutral surface and text hierarchy", () => {
  assert.match(
    css,
    /\[data-dsh-surface="settings"\][^{]*\[data-slot="settings\.plugin\.item"\]\s*>\s*:first-child\s*\{[^}]*background-color:\s*var\(--eink-paper-inset\)\s*!important[^}]*border:\s*1px solid color-mix\(in srgb, var\(--eink-ink\) 35%, transparent\)\s*!important/s,
  );
  assert.match(
    css,
    /\[data-slot="settings\.plugin\.item"\][^{]*details\s*>\s*summary\s*>\s*:first-child\s*>\s*:last-child\s*\{[^}]*color:\s*var\(--eink-ink-2\)\s*!important/s,
  );
  assert.match(
    css,
    /\[data-slot="settings\.plugin\.item"\][^{]*input\[type="radio"\]\s*\{[^}]*accent-color:\s*var\(--eink-ink\)\s*!important/s,
  );
  assert.match(
    css,
    /\[data-slot="settings\.plugin\.item"\][^{]*label:has\(> input\[type="radio"\]:checked\)\s*\{[^}]*border-color:\s*var\(--eink-ink\)\s*!important[^}]*box-shadow:\s*inset 0 -2px 0 var\(--eink-ink\)\s*!important/s,
  );
  assert.match(
    css,
    /\[data-slot="settings\.plugin\.item"\][^{]*button\[type="submit"\]\s*\{[^}]*color:\s*var\(--eink-selection-fg\)\s*!important[^}]*background-color:\s*var\(--eink-selection-bg\)\s*!important/s,
  );
});

test("markdown quotes and overlay surfaces stay flat and rectilinear", () => {
  assert.match(
    css,
    /blockquote\s*\{[^}]*border-left:\s*2px solid var\(--eink-rule-strong\)[^}]*background:\s*transparent/s,
  );
  assert.match(
    css,
    /\[role="presentation"\]:has\(> \[role="dialog"\]\)\s*>\s*:first-child\s*\{[^}]*backdrop-filter:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[data-dsh-plugin="skill-explorer"\][^{]*\[data-dsh-part="card"\]\s*\{[^}]*box-shadow:\s*var\(--eink-shadow-2\)\s*!important/s,
  );
  assert.match(
    css,
    /\.lc-root \.lc-gran\s*\{[^}]*border-radius:\s*var\(--eink-radius-control\)\s*!important/s,
  );
});

test("switches and semantic destructive buttons stay flat and explicit", () => {
  assert.match(
    css,
    /\[role="switch"\]\s*\{[^}]*background-color:\s*transparent\s*!important[^}]*box-shadow:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[role="switch"\]\s*>\s*:last-child\s*>\s*\*\s*\{[^}]*box-shadow:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[role="switch"\]\s*>\s*:last-child\s*\{[^}]*box-sizing:\s*border-box[^}]*width:\s*30px[^}]*height:\s*16px/s,
  );
  assert.match(
    css,
    /\[role="switch"\]:not\(\[aria-checked="true"\]\)\s*>\s*:last-child\s*>\s*\*\s*\{[^}]*background-color:\s*var\(--eink-ink\)/s,
  );
  assert.match(
    css,
    /\[role="switch"\]\s*>\s*:last-child\s*>\s*\*\s*\{[^}]*width:\s*10px[^}]*height:\s*10px[^}]*border:\s*0/s,
  );
  assert.match(css, /button\[class\*="deleteButton" i\]/);
  assert.match(css, /\[role="button"\][^}]*border-radius/s);
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

test("floating listboxes do not resize the conversation scrollport", () => {
  assert.match(
    css,
    /\[data-dsh-part="scrollport"\]\s+:has\(>\s*\[role="listbox"\]\)\s*\{[^}]*contain:\s*layout/s,
  );
  assert.match(css, /\[role="listbox"\]\s*>\s*\*\s*\{[^}]*scrollbar-gutter:\s*stable/s);
  assert.match(
    css,
    /\[data-dsh-part="scrollport"\]:has\(\s*section\[aria-label="Trajectory timeline"\]\s*\)\s*\{[^}]*overflow-y:\s*hidden/s,
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
