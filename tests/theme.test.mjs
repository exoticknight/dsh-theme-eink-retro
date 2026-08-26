import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { transform } from "esbuild";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const css = fs.readFileSync(path.join(root, "src/theme.css"), "utf8");
const client = fs.readFileSync(path.join(root, "src/client/index.ts"), "utf8");
const i18nSource = fs.readFileSync(path.join(root, "src/client/i18n.ts"), "utf8");
const tokens = fs.readFileSync(path.join(root, "src/client/tokens.ts"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const buildScript = fs.readFileSync(path.join(root, "scripts/build.mjs"), "utf8");
const gitAttributes = fs.readFileSync(path.join(root, ".gitattributes"), "utf8");
const readmeEn = fs.readFileSync(path.join(root, "README.md"), "utf8");
const readmeZh = fs.readFileSync(path.join(root, "README.zh-CN.md"), "utf8");
const releaseWorkflow = fs.readFileSync(path.join(root, ".github/workflows/release.yml"), "utf8");

async function loadI18n() {
  const { code } = await transform(i18nSource, { format: "esm", loader: "ts", target: "node20" });
  return import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);
}

test("package exposes a standard DSH host and client bundle", () => {
  assert.equal(pkg.name, "dsh-theme-eink-retro");
  assert.equal(pkg.main, "lib/index.js");
  assert.equal(pkg.exports["./client"], "./lib/client.js");
  assert.equal(pkg.dsh.bundle.patch, "./cordis.patch.yml");
  assert.equal(pkg.dsh.client.platform, "web");
  assert.ok(pkg.dsh.client.inject.includes("@deepseek-ai/dsh-client-ui-theme"));
  assert.ok(pkg.dsh.client.inject.includes("@deepseek-ai/dsh-client-ui-settings"));
});

test("package exposes release and support metadata", () => {
  assert.equal(pkg.repository.url, "git+https://github.com/exoticknight/dsh-theme-eink-retro.git");
  assert.equal(pkg.homepage, "https://github.com/exoticknight/dsh-theme-eink-retro#readme");
  assert.equal(pkg.bugs.url, "https://github.com/exoticknight/dsh-theme-eink-retro/issues");
  assert.match(pkg.scripts.prepack, /npm run check/);
});

test("version tags verify and publish a reproducible GitHub release", () => {
  assert.match(releaseWorkflow, /tags:\s*\n\s*- ["']v\[0-9\]\+\.\[0-9\]\+\.\[0-9\]\+["']/);
  assert.match(releaseWorkflow, /GITHUB_REF_NAME/);
  assert.match(releaseWorkflow, /package\.json/);
  assert.match(releaseWorkflow, /npm run check/);
  assert.match(releaseWorkflow, /git diff --exit-code -- lib/);
  assert.match(releaseWorkflow, /npm pack --ignore-scripts/);
  assert.match(releaseWorkflow, /gh release edit[^\n]*--verify-tag[^\n]*--notes-file/);
  assert.match(releaseWorkflow, /gh release upload[^\n]*--clobber/);
  assert.match(releaseWorkflow, /gh release create[^\n]*--verify-tag/);
});

test("build output is normalized across operating systems", () => {
  assert.match(gitAttributes, /\*\s+text=auto\s+eol=lf/);
  assert.match(buildScript, /replace\(\/\\r\\n\?\/g, "\\n"\)/);
});

test("package ships user-facing documentation in English and Chinese", () => {
  assert.ok(pkg.files.includes("README.md"));
  assert.ok(pkg.files.includes("README.zh-CN.md"));
  assert.match(readmeEn, /Install from source/);
  assert.match(readmeEn, /Compatibility boundaries/);
  assert.match(readmeEn, /github:exoticknight\/dsh-theme-eink-retro#v0\.1\.0/);
  assert.match(readmeEn, /Privacy and storage/);
  assert.match(readmeZh, /从源码安装/);
  assert.match(readmeZh, /兼容边界/);
  assert.match(readmeZh, /github:exoticknight\/dsh-theme-eink-retro#v0\.1\.0/);
  assert.match(readmeZh, /隐私与存储/);
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

test("settings translations cover English and Simplified Chinese", async () => {
  const { messagesForLocale } = await loadI18n();
  const english = messagesForLocale("en");
  const chinese = messagesForLocale("zh-CN");

  assert.equal(english.enabledTitle, "Enable theme");
  assert.equal(english.balanced.label, "Balanced (recommended)");
  assert.equal(chinese.enabledTitle, "启用主题");
  assert.equal(chinese.balanced.label, "平衡模式（推荐）");
});

test("settings locale follows the page language with an English fallback", async () => {
  const { detectLocale, localeForLanguageTag } = await loadI18n();

  for (const languageTag of ["zh", "zh-CN", "zh-SG", "zh-Hans", "zh-Hans-CN", "zh-CN-u-nu-hanidec"]) {
    assert.equal(localeForLanguageTag(languageTag), "zh-CN");
  }
  for (const languageTag of ["", "not_a_locale", "en", "en-US", "fr", "zh-TW", "zh-Hant"]) {
    assert.equal(localeForLanguageTag(languageTag), "en");
  }
  assert.equal(detectLocale("zh-CN", ["en-US"]), "zh-CN");
  assert.equal(detectLocale("", ["zh-SG", "en-US"]), "zh-CN");
  assert.equal(detectLocale("", []), "en");
  assert.equal(detectLocale("fr-FR", ["zh-CN"]), "en");
});

test("settings copy reacts to page and browser language changes", async () => {
  const { messagesForLocale, watchLocale } = await loadI18n();
  const originalDescriptors = Object.fromEntries(
    ["document", "navigator", "MutationObserver", "window"].map((name) => [
      name,
      Object.getOwnPropertyDescriptor(globalThis, name),
    ]),
  );
  const documentElement = { lang: "en" };
  const listeners = new Map();
  let mutationCallback;
  let disconnected = false;

  class FakeMutationObserver {
    constructor(callback) {
      mutationCallback = callback;
    }

    observe(target, options) {
      assert.equal(target, documentElement);
      assert.deepEqual(options, { attributeFilter: ["lang"], attributes: true });
    }

    disconnect() {
      disconnected = true;
    }
  }

  Object.defineProperties(globalThis, {
    document: { configurable: true, value: { documentElement } },
    navigator: { configurable: true, value: { language: "en-US", languages: ["en-US"] } },
    MutationObserver: { configurable: true, value: FakeMutationObserver },
    window: {
      configurable: true,
      value: {
        addEventListener: (name, listener) => listeners.set(name, listener),
        removeEventListener: (name, listener) => {
          if (listeners.get(name) === listener) listeners.delete(name);
        },
      },
    },
  });

  try {
    const enabledTitles = [];
    const dispose = watchLocale((locale) => enabledTitles.push(messagesForLocale(locale).enabledTitle));

    documentElement.lang = "zh-Hans-CN";
    mutationCallback();
    documentElement.lang = "en-GB";
    listeners.get("languagechange")();

    assert.deepEqual(enabledTitles, ["启用主题", "Enable theme"]);
    dispose();
    assert.equal(disconnected, true);
    assert.equal(listeners.has("languagechange"), false);
  } finally {
    for (const [name, descriptor] of Object.entries(originalDescriptors)) {
      if (descriptor) Object.defineProperty(globalThis, name, descriptor);
      else delete globalThis[name];
    }
  }
});

test("balanced mode uses the official semantic token layer", () => {
  assert.match(client, /overrideTokens\(TOKEN_SOURCE, tokensForMode\(mode\)\)/);
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
  assert.match(
    css,
    /\[data-composer-card="true"\]:has\(\s*textarea\[data-dsh-part="composer-input"\]:focus-visible\s*\)\s*\{[^}]*box-shadow:\s*var\(--eink-focus-ring\)\s*!important/s,
  );
});

test("the no-workspace composer is a solid rectilinear picker surface", () => {
  assert.match(
    css,
    /\[data-composer-card="true"\]:has\(\s*textarea\[aria-haspopup="menu"\]\[readonly\]\s*\)\s*\{[^}]*background-color:\s*var\(--eink-paper-bright\)\s*!important[^}]*border:\s*1px solid var\(--eink-rule-strong\)\s*!important[^}]*border-radius:\s*var\(--eink-radius-surface\)\s*!important[^}]*box-shadow:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[data-composer-card="true"\]:has\(\s*textarea\[aria-haspopup="menu"\]\[readonly\]\s*\)::after\s*\{[^}]*content:\s*none\s*!important[^}]*mask:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[data-composer-card="true"\]:has\(\s*textarea\[aria-haspopup="menu"\]\[readonly\]\s*\):hover\s*\{[^}]*border-color:\s*var\(--eink-ink\)\s*!important/s,
  );
  const triggerHover = css
    .slice(css.indexOf('[data-composer-card="true"]:has(\n  textarea[aria-haspopup="menu"][readonly]\n):hover'))
    .split("}")[0];
  assert.doesNotMatch(triggerHover, /box-shadow/);
  // The trigger state is structural and does not depend on its localized placeholder.
  assert.doesNotMatch(css, /placeholder="选择一个工作区开始"/);
});

test("composer context usage ring separates its track from its used portion", () => {
  assert.match(
    css,
    /\[data-composer-card="true"\][^{]*button\[aria-haspopup="dialog"\]:has\(> svg > circle\[stroke-dasharray\]\)[^{]*circle:not\(\[stroke-dasharray\]\)\s*\{[^}]*stroke:\s*var\(--eink-rule\)\s*!important/s,
  );
  assert.match(
    css,
    /\[data-composer-card="true"\][^{]*button\[aria-haspopup="dialog"\]:has\(> svg > circle\[stroke-dasharray\]\)[^{]*circle\[stroke-dasharray\]\s*\{[^}]*stroke:\s*var\(--eink-ink\)\s*!important/s,
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
    /\[role="toolbar"\]:has\(input\[type="search"\]\)[^{]*:has\(\s*>\s*input\[type="search"\]:focus-visible\s*\)[^{]*\{[^}]*border-color:\s*var\(--eink-ink\)[^}]*box-shadow:\s*var\(--eink-focus-ring\)\s*!important/s,
  );
  assert.match(
    css,
    /\[data-gitgraph-popover="true"\]\s*>\s*:has\(> input\)\s*\{[^}]*border:\s*1px solid var\(--eink-rule-strong\)\s*!important[^}]*border-radius:\s*var\(--eink-radius-control\)\s*!important[^}]*box-shadow:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[data-gitgraph-popover="true"\]\s*>\s*:has\(> input\)\s*>\s*input\s*\{[^}]*border:\s*0\s*!important[^}]*box-shadow:\s*none\s*!important/s,
  );
});

test("workspace tooltips stay legible and the add button owns an unclipped focus frame", () => {
  assert.match(
    css,
    /\[role="tooltip"\]\s*\{[^}]*color:\s*var\(--eink-selection-fg\)\s*!important[^}]*background-color:\s*var\(--eink-selection-bg\)\s*!important/s,
  );
  assert.match(
    css,
    /button\[aria-label\*="添加工作区"\]:focus-visible,[^{]*button\[aria-label\*="Add workspace" i\]:focus-visible\s*\{[^}]*outline:\s*0\s*!important[^}]*box-shadow:\s*var\(--eink-focus-ring\)\s*!important/s,
  );
});

test("workspace search and user messages use crisp surfaces with one focus owner", () => {
  assert.match(
    css,
    /:has\(> button\[aria-label\*="搜索会话"\]\[aria-expanded="true"\]\):has\(> input\),[^{]*\{[^}]*background-color:\s*var\(--eink-paper-bright\)\s*!important/s,
  );
  assert.match(
    css,
    /:has\(> button\[aria-label\*="搜索会话"\]\)\s*>\s*input,[^{]*\{[^}]*background-color:\s*transparent\s*!important[^}]*box-shadow:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /:has\(> button\[aria-label\*="搜索会话"\]\):has\(> input:focus-visible\),[^{]*\{[^}]*border-color:\s*var\(--eink-ink\)\s*!important[^}]*box-shadow:\s*var\(--eink-focus-ring\)\s*!important/s,
  );
  assert.match(
    css,
    /\[data-chat-flow-kind="user"\][^{]*\[data-time-hover-root="true"\][^{]*>\s*:first-child\s*>\s*:last-child\s*\{[^}]*border-radius:\s*var\(--eink-radius-surface\)\s*!important/s,
  );
});

test("legacy DSH variables bridge to the current semantic token system", () => {
  const bridges = {
    "--dsw-alias-border": "--dsw-alias-border-l3",
    "--dsw-alias-fill-primary": "--dsw-alias-bg-layer-1",
    "--dsw-alias-text-primary": "--dsw-alias-label-primary",
    "--dsw-alias-accent": "--dsw-alias-brand-primary",
    "--dsw-alias-text-on-accent": "--dsw-alias-brand-primary-invert",
    "--dsw-alias-button-info-label": "--dsw-alias-brand-primary-invert",
    "--dsw-alias-danger": "--dsw-alias-state-error-primary",
    "--dsw-alias-label-danger": "--dsw-alias-state-error-primary",
    "--dsw-alias-label-error": "--dsw-alias-state-error-primary",
    "--dsw-alias-label-on-danger": "--dsw-alias-brand-primary-invert",
    "--dsw-alias-label-on-primary": "--dsw-alias-brand-primary-invert",
    "--dsw-alias-label-quaternary": "--dsw-alias-label-dimmed",
    "--dsw-alias-separator-primary": "--dsw-alias-border-l2",
    "--dsw-alias-state-danger": "--dsw-alias-state-error-primary",
    "--dsw-alias-state-warning-primary": "--dsw-alias-state-warn-primary",
    "--dsw-alias-text-danger": "--dsw-alias-state-error-primary",
    "--dsw-font-mono": "--eink-font-mono",
    "--dsh-font-mono": "--eink-font-mono",
    "--dsh-color-surface": "--dsw-alias-bg-layer-3",
    "--dsh-color-border": "--dsw-alias-border-l3",
    "--dsh-color-accent": "--dsw-alias-brand-primary",
    "--dsh-color-text": "--dsw-alias-label-primary",
    "--dsh-color-text-secondary": "--dsw-alias-label-secondary",
    "--dsh-state-ongoing": "--dsw-alias-state-warn-primary",
  };

  for (const [legacy, current] of Object.entries(bridges)) {
    assert.ok(css.includes(`${legacy}: var(${current});`), `missing ${legacy} bridge`);
  }
});

test("message editing uses one crisp frame and consistently sized actions", () => {
  assert.match(
    css,
    /\[data-slot="conversation\.chat\.turnTail"\] textarea\s*\{[^}]*border:\s*1px solid var\(--eink-rule-strong\)\s*!important[^}]*box-shadow:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[data-slot="conversation\.chat\.turnTail"\][^{]*:has\(> textarea\)[^{]*>\s*:nth-child\(2\)\s*>\s*button\s*\{[^}]*box-sizing:\s*border-box[^}]*min-height:\s*24px[^}]*font-size:\s*var\(--eink-text-sm\)[^}]*line-height:\s*22px/s,
  );
  assert.match(
    css,
    /\[data-slot="conversation\.chat\.turnTail"\][^{]*button:last-child\s*\{[^}]*border:\s*1px solid var\(--eink-selection-bg\)\s*!important/s,
  );
  // The editing state is identified by structure, not by a localized placeholder.
  assert.doesNotMatch(css, /placeholder="编辑"/);
});

test("approval requests and active turn status use neutral ink treatments", () => {
  assert.match(
    css,
    /:has\(> \[aria-label\*="审批详情"\]\),[^{]*:has\(> \[aria-label\*="Approval details" i\]\)\s*\{[^}]*background-color:\s*var\(--eink-paper-bright\)\s*!important[^}]*border-color:\s*var\(--eink-rule-strong\)\s*!important/s,
  );
  assert.match(
    css,
    /:has\(> \[aria-label\*="审批详情"\]\)\s*>\s*:first-child,[^{]*\{[^}]*color:\s*var\(--eink-ink\)\s*!important[^}]*background-color:\s*var\(--eink-paper-raised\)\s*!important[^}]*border-bottom:\s*1px solid var\(--eink-rule\)\s*!important/s,
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

test("session state dots use the e-ink status palette and a legible chase", () => {
  assert.match(
    css,
    /svg\[data-state="ongoing"\]\[aria-hidden="true"\]\[viewBox="0 0 10 10"\]\s*\{[^}]*--dsh-state-ongoing:\s*var\(--eink-ink-2\)\s*!important/s,
  );
  assert.match(
    css,
    /svg\[data-state="ongoing"\]\[aria-hidden="true"\]\[viewBox="0 0 10 10"\]\s*>\s*rect\s*\{[^}]*animation-name:\s*eink-retro-state-dot-chase\s*!important/s,
  );
  assert.match(css, /@keyframes eink-retro-state-dot-chase/);
  assert.match(
    css,
    /span\[data-state="done"\]\[aria-hidden="true"\]::before\s*\{[^}]*opacity:\s*0\.16/s,
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
    /\[data-slot="settings\.plugin\.item"\][^{]*label:has\(> input\[type="radio"\]:checked\)\s*\{[^}]*background-color:\s*var\(--eink-paper-bright\)\s*!important[^}]*border-color:\s*var\(--eink-ink\)\s*!important[^}]*box-shadow:\s*none\s*!important/s,
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
  // Every switch DSH ships is button > track > thumb, so there is one rule set
  // and it is gated on that structure. The button stays blank, the track owns
  // the state, and the thumb offsets are measured against the track's padding
  // box: 2px centres a 10px thumb in a 30 x 16 track, 16px parks it at the far
  // end, and both rest 3px from their edge.
  assert.match(
    css,
    /\[role="switch"\]:has\(> :last-child > :only-child\)\s*\{[^}]*background-color:\s*transparent\s*!important[^}]*box-shadow:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[role="switch"\]:has\(> :last-child > :only-child\)\s*>\s*:last-child\s*\{[^}]*width:\s*30px\s*!important[^}]*height:\s*16px\s*!important[^}]*border:\s*1px solid var\(--eink-ink\)\s*!important/s,
  );
  assert.match(
    css,
    /\[role="switch"\]:has\(> :last-child > :only-child\)\s*>\s*:last-child\s*>\s*:only-child\s*\{[^}]*width:\s*10px\s*!important[^}]*height:\s*10px\s*!important[^}]*top:\s*2px\s*!important[^}]*left:\s*2px\s*!important/s,
  );
  assert.match(
    css,
    /\[role="switch"\]\[aria-checked="true"\]:has\(> :last-child > :only-child\)[^{]*>\s*:last-child\s*>\s*:only-child\s*\{[^}]*left:\s*16px\s*!important[^}]*background-color:\s*var\(--eink-selection-fg\)\s*!important/s,
  );
  // No rule that targets a switch may do so without first checking it has that
  // structure. Role lists inside :where() — the shared focus frame, the
  // inverted selection set — address it as one role among many and are exempt.
  const switchRules = (
    css.match(/html\[data-dsh-theme-eink-retro\][^{}]*\[role="switch"\][^{}]*\{/g) || []
  ).filter((rule) => !rule.includes(":where("));
  assert.ok(switchRules.length > 0, "no switch rules found");
  for (const rule of switchRules) {
    assert.match(rule, /:has\(> :last-child > :only-child\)/, `ungated switch rule: ${rule.trim()}`);
  }
  assert.match(css, /button\[class\*="deleteButton" i\]/);
  assert.match(css, /\[role="button"\][^}]*border-radius/s);
});

test("secondary tabs, markdown tables and capability badges keep readable hierarchy", () => {
  assert.match(
    css,
    /\[role="tab"\]\s*\{[^}]*background-color:\s*transparent\s*!important[^}]*border-color:\s*transparent\s*!important[^}]*box-shadow:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[role="tab"\]:hover\s*\{[^}]*background-color:\s*var\(--eink-paper-raised\)\s*!important[^}]*box-shadow:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[role="tab"\]\[aria-selected="true"\]\s*\{[^}]*background-color:\s*var\(--eink-paper-raised\)\s*!important/s,
  );
  assert.match(
    css,
    /\[role="tab"\]\[aria-selected="true"\]\s*\{[^}]*box-shadow:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[role="tab"\]:focus-visible\s*\{[^}]*background-color:\s*var\(--eink-selection-bg\)\s*!important[^}]*outline:\s*0\s*!important[^}]*box-shadow:\s*var\(--eink-focus-ring-inverse\)\s*!important/s,
  );
  assert.match(css, /\[role="tab"\]:focus:not\(:focus-visible\)\s*\{[^}]*outline:\s*0\s*!important/s);
  assert.match(css, /:where\(th, td\)\s*\{[^}]*padding:\s*8px 12px\s*!important/s);
  assert.match(
    css,
    /\[class\*="badgeInvokable"\]\s*\{[^}]*background-color:\s*transparent\s*!important/s,
  );
});

test("floating listboxes do not resize the conversation scrollport", () => {
  assert.match(
    css,
    /:where\(\[role="menu"\], \[role="listbox"\]\)\s*\{[^}]*background-color:\s*var\(--eink-paper-bright\)\s*!important[^}]*background-image:\s*none\s*!important[^}]*backdrop-filter:\s*none\s*!important/s,
  );
  assert.match(
    css,
    /\[data-dsh-part="scrollport"\]\s+:has\(>\s*\[role="listbox"\]\)\s*\{[^}]*contain:\s*layout/s,
  );
  assert.match(
    css,
    /:has\(:where\(\[role="menu"\], \[role="listbox"\]\)\)\s*\[role="tooltip"\]\s*\{[^}]*display:\s*none\s*!important/s,
  );
  assert.match(css, /\[role="listbox"\]\s*>\s*\*\s*\{[^}]*scrollbar-gutter:\s*stable/s);
  assert.match(
    css,
    /\[data-dsh-part="scrollport"\]:has\(\s*section\[aria-label\*="Trajectory" i\]\s*\),[\s\S]*?\{[^}]*overflow-y:\s*hidden/s,
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

test("immersive mode ships its own monochrome token layer", () => {
  assert.match(tokens, /EINK_IMMERSIVE_TOKENS/);
  assert.match(tokens, /export function tokensForMode/);
  assert.match(client, /installedMode !== activeMode/);

  // The ink ramp replaces every hue that balanced keeps, so nothing tinted
  // survives into immersive.
  for (const token of [
    "--dsw-alias-state-error-primary",
    "--dsw-alias-state-error-secondary",
    "--dsw-alias-state-success-primary",
    "--dsw-alias-state-success-secondary",
    "--dsw-alias-state-success-tertiary",
    "--dsw-alias-state-warn-primary",
    "--dsw-alias-interactive-bg-hover-danger",
  ]) {
    const overlay = tokens.slice(tokens.indexOf("EINK_IMMERSIVE_OVERLAY"));
    assert.ok(overlay.includes(token), `immersive overlay is missing ${token}`);
  }

  const overlay = tokens.slice(
    tokens.indexOf("EINK_IMMERSIVE_OVERLAY"),
    tokens.indexOf("export const EINK_IMMERSIVE_TOKENS"),
  );
  for (const [, hex] of overlay.matchAll(/#([0-9a-f]{6})/gi)) {
    const [r, g, b] = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)];
    assert.equal(r, g, `immersive value #${hex} is not neutral`);
    assert.equal(g, b, `immersive value #${hex} is not neutral`);
  }
});

test("the token probe is stable across modes", () => {
  const sentinel = tokens.slice(
    tokens.indexOf("EINK_TOKEN_SENTINEL"),
    tokens.indexOf("EINK_BALANCED_TOKENS"),
  );
  const probed = sentinel.match(/token:\s*"([^"]+)"/)[1];
  const overlay = tokens.slice(tokens.indexOf("EINK_IMMERSIVE_OVERLAY"));
  assert.ok(!overlay.includes(probed), `${probed} changes between modes and cannot be a probe`);
});

test("design tokens derive from the official layer instead of a second dark detector", () => {
  assert.doesNotMatch(css, /data-ds-dark-theme/);
  for (const [own, source] of [
    ["--eink-paper", "--dsw-alias-bg-base"],
    ["--eink-paper-bright", "--dsw-alias-bg-layer-1"],
    ["--eink-paper-raised", "--dsw-alias-bg-layer-2"],
    ["--eink-paper-inset", "--dsw-alias-bg-layer-3"],
    ["--eink-ink", "--dsw-alias-label-primary"],
    ["--eink-ink-2", "--dsw-alias-label-secondary"],
    ["--eink-ink-3", "--dsw-alias-label-tertiary"],
    ["--eink-selection-bg", "--dsw-alias-brand-primary"],
    ["--eink-selection-fg", "--dsw-alias-brand-primary-invert"],
    ["--eink-shadow-1", "--dsw-shadow-lv1"],
    ["--eink-shadow-2", "--dsw-shadow-lv2"],
  ]) {
    assert.ok(
      css.includes(`${own}: var(${source},`),
      `${own} should derive from ${source}`,
    );
  }
  // Mixed into an opaque surface: the window base is translucent in dark mode
  // and a rule must not inherit that alpha.
  assert.match(css, /--eink-rule:\s*color-mix\(in srgb, var\(--eink-ink\) \d+%, var\(--eink-paper-bright\)\)/);
  assert.match(
    css,
    /--eink-rule-strong:\s*color-mix\(in srgb, var\(--eink-ink\) \d+%, var\(--eink-paper-bright\)\)/,
  );
});

test("localized hooks always carry a second locale and a structural guard", () => {
  assert.doesNotMatch(css, /aria-label="[^"]*[一-鿿]/);
  assert.doesNotMatch(css, /placeholder="[^"]*[一-鿿]/);
  for (const companion of [
    'aria-label*="Add workspace" i',
    'aria-label*="Search" i',
    'aria-label*="Approval details" i',
    'aria-label*="轨迹"',
  ]) {
    assert.ok(css.includes(companion), `missing locale companion ${companion}`);
  }
});

test("native color and text affordances follow the ink palette", () => {
  assert.match(css, /accent-color:\s*var\(--eink-ink\)/);
  assert.match(css, /\.eink-retro-settings__enabled-input\s*\{\s*accent-color:\s*var\(--eink-ink\)\s*!important/s);
  assert.match(css, /::placeholder\s*\{[^}]*color:\s*var\(--eink-ink-3\)[^}]*opacity:\s*1/s);
  assert.match(
    css,
    /:where\(\s*a:not\(\[role="button"\], \[class\*="button" i\], \[aria-current\], \[aria-selected="true"\]\)\s*\)\s*\{[^}]*color:\s*var\(--eink-ink\)/s,
  );
  assert.match(css, /text-decoration:\s*underline/);
  assert.match(
    css,
    /:where\(button, input, textarea, select\):disabled,[^{]*\[aria-disabled="true"\][^{]*\{[^}]*cursor:\s*not-allowed/s,
  );
  assert.match(
    css,
    /::-webkit-scrollbar-thumb:hover\s*\{[^}]*var\(--dsw-alias-scrollbar-hover-l2\)/s,
  );
});

test("one focus frame covers every keyboard-reachable role and adds no ground halo", () => {
  const focusRule = css
    .slice(css.search(/html\[data-dsh-theme-eink-retro\] :where\(\s*a,/))
    .split("}")[0];
  for (const role of [
    "a,",
    "summary,",
    '[role="option"]',
    '[role="checkbox"]',
    '[tabindex]:not([tabindex="-1"])',
  ]) {
    assert.ok(focusRule.includes(role), `focus rule is missing ${role}`);
  }
  assert.match(focusRule, /outline:\s*1px solid var\(--eink-ink\)/);
  assert.doesNotMatch(focusRule, /box-shadow/);
});

test("controls and surfaces take their radius from the matching token", () => {
  assert.match(
    css,
    /:where\(button, input, textarea, select, \[role="button"\]\)\s*\{\s*border-radius:\s*var\(--eink-radius-control\)\s*!important/s,
  );
  assert.match(css, /:where\([^)]*\[role="alert"\][^)]*\)\s*\{[^}]*border-radius:\s*var\(--eink-radius-surface\)\s*!important/s);
  // Every radius on the scale goes through a token; only an explicit reset to
  // 0 and the `var(--token, 2px)` fallbacks used while the theme is off remain.
  const strayRadius = css
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /border-radius:\s*[1-9]/.test(line) && !line.includes("var(--eink-radius"));
  assert.deepEqual(strayRadius, [], `hardcoded radius: ${strayRadius.join(" | ")}`);
});

test("focus and selection never combine into a nested frame", () => {
  assert.match(css, /--eink-well:\s*inset 1px 1px 0/);
  assert.match(css, /--eink-focus-ring:\s*inset 0 0 0 1px var\(--eink-ink\)/);
  assert.match(css, /--eink-focus-ring-inverse:\s*inset 0 0 0 1px var\(--eink-selection-fg\)/);
  assert.match(
    css,
    /:where\(input, textarea, select, \[contenteditable="true"\]\):focus-visible\s*\{[^}]*box-shadow:\s*var\(--eink-focus-ring\)\s*!important/s,
  );
  assert.match(
    css,
    /:where\([^}]*\[aria-current="true"\][^}]*\):focus-visible\s*\{[^}]*outline:\s*0\s*!important[^}]*box-shadow:\s*var\(--eink-focus-ring-inverse\)\s*!important/s,
  );
  const bottomInkLines = css.match(/box-shadow:\s*inset 0 -2px 0 var\(--eink-ink\)/g) ?? [];
  assert.equal(bottomInkLines.length, 0, "selected tabs must not add a second focus-like line");
});

test("high contrast and print get an explicit treatment", () => {
  assert.match(css, /@media \(forced-colors: active\)/);
  assert.match(css, /outline:\s*2px solid CanvasText\s*!important/);
  assert.match(css, /@media print/);
  assert.match(
    css,
    /@media print[\s\S]*?color:\s*#000000\s*!important[^}]*background:\s*transparent\s*!important/s,
  );
});

test("the theme keeps exactly one opinion about light and dark", () => {
  // The CSS derives from the token layer and the probe accepts either variant,
  // so neither side re-derives the active theme for itself.
  assert.doesNotMatch(css, /prefers-color-scheme/);
  assert.doesNotMatch(client, /colorScheme/);
  assert.match(
    client,
    /value === EINK_TOKEN_SENTINEL\.light \|\| value === EINK_TOKEN_SENTINEL\.dark/,
  );
});

test("shell regions use the public surface anchor, not a stale pane attribute", () => {
  // `data-dsh-surface` marks a region with a zero-size anchor, so the column
  // that paints it is its parent. `data-pane` does not exist in DSH.
  assert.doesNotMatch(css, /data-pane=/);
  for (const region of ["sidebar", "conversation", "details"]) {
    assert.ok(
      css.includes(`:has(> [data-dsh-surface="${region}"])`),
      `missing surface anchor for ${region}`,
    );
  }
  assert.match(
    css,
    /:not\(\[data-details-collapsed="true"\]\)\s*>\s*:has\(> \[data-dsh-surface="conversation"\]\)/s,
  );
});

test("the collapsed workspace search shell still gets square corners", () => {
  // The input only mounts once the shell expands, so the radius rule must not
  // ask for one.
  assert.match(
    css,
    /:has\(> button\[aria-label\*="搜索会话"\]\),[^{]*:has\(> button\[aria-label\*="Search" i\]\)\s*\{[^}]*border-radius:\s*var\(--eink-radius-control\)\s*!important/s,
  );
});

test("decorative chrome carries no hue of its own", () => {
  // The composer hero glow ships a hard-coded blue fill and is aria-hidden, so
  // it is neutralized in both modes rather than only under immersive.
  assert.match(
    css,
    /\[data-slot="conversation\.composer"\][^{]*svg\[aria-hidden="true"\][^{]*:is\(ellipse, circle\)\[fill\]:not\(\[fill="none"\]\):not\(\[fill="currentColor"\]\)\s*\{[^}]*fill:\s*var\(--eink-paper-raised\)/s,
  );
  const glowRule = css.slice(css.indexOf('[data-slot="conversation.composer"]\n  svg[aria-hidden="true"]'));
  assert.doesNotMatch(glowRule.split("}")[0], /immersive/);
  // The pet is grayscaled through its wrapper so its own chrome goes with it.
  assert.match(
    css,
    /data-dsh-theme-eink-retro="immersive"\] :has\(> \[style\*="spritesheet"\]\)\s*\{[^}]*filter:\s*grayscale\(1\)/s,
  );
});

test("elevation is solid ink, the way print and a 1-bit screen behave", () => {
  const shadows = [...tokens.matchAll(/"--dsw-shadow-lv\d":\s*pair\("([^"]+)",\s*"([^"]+)"\)/g)];
  assert.equal(shadows.length, 3, "expected three elevation steps");
  for (const [, light, dark] of shadows) {
    for (const value of [light, dark]) {
      assert.doesNotMatch(value, /blur|rgba|hsla/, `${value} is not a hard offset`);
      assert.match(value, /^\d+px \d+px 0 #[0-9a-f]{6}$/, `${value} carries alpha or a blur radius`);
    }
  }
});

test("a keycap is a physical object on paper", () => {
  assert.match(
    css,
    /html\[data-dsh-theme-eink-retro\] kbd\s*\{[^}]*border:\s*1px solid var\(--eink-rule-strong\)[^}]*box-shadow:\s*var\(--eink-shadow-1\)/s,
  );
});
