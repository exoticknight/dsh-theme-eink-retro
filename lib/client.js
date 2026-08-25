window.__ModuleLoader__.load({
  id: "dsh-theme-eink-retro",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/entry.ts
var entry_exports = {};
__export(entry_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(entry_exports);

// src/client/index.ts
var import_react = __toESM(require("react"), 1);

// src/theme.css
var theme_default = '/* E\u2011Ink Retro has two layers:\n * 1. both modes share neutral semantic tokens, crisp geometry and black/white\n *    interaction states;\n * 2. immersive mode additionally maps selected decorative/data colors to gray.\n * User-authored media is never filtered. */\n\n.eink-retro-settings {\n  display: grid;\n  gap: 14px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.eink-retro-settings h2,\n.eink-retro-settings p {\n  margin: 0;\n}\n\n.eink-retro-settings__intro,\n.eink-retro-settings__option-description,\n.eink-retro-settings__status {\n  color: var(--dsw-alias-label-secondary);\n  font-size: 13px;\n  line-height: 1.55;\n}\n\n.eink-retro-settings__options {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.eink-retro-settings__option {\n  min-height: 112px;\n  padding: 14px;\n  color: var(--dsw-alias-label-primary);\n  text-align: left;\n  background: var(--dsw-alias-bg-layer-1);\n  border: 1px solid var(--dsw-alias-border-l3);\n  border-radius: 2px;\n  box-shadow: none;\n  cursor: pointer;\n}\n\n.eink-retro-settings__option:hover {\n  background: var(--dsw-alias-interactive-bg-hover-solid);\n}\n\n.eink-retro-settings__option[aria-checked="true"] {\n  color: var(--dsw-alias-brand-primary-invert);\n  background: var(--dsw-alias-brand-primary);\n  border-color: var(--dsw-alias-brand-primary);\n}\n\n.eink-retro-settings__option:focus-visible {\n  outline: 1px solid var(--dsw-alias-brand-primary);\n  outline-offset: 2px;\n}\n\n.eink-retro-settings__option-title,\n.eink-retro-settings__option-description {\n  display: block;\n}\n\n.eink-retro-settings__option-title {\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: 650;\n}\n\n.eink-retro-settings__option[aria-checked="true"] .eink-retro-settings__option-description {\n  color: inherit;\n  opacity: 0.78;\n}\n\n.eink-retro-settings__status {\n  padding: 10px 12px;\n  background: var(--dsw-alias-bg-layer-2);\n  border-left: 3px solid var(--dsw-alias-state-warn-primary);\n}\n\n@media (max-width: 760px) {\n  .eink-retro-settings__options {\n    grid-template-columns: 1fr;\n  }\n\n  .eink-retro-settings__option {\n    min-height: 0;\n  }\n}\n\nhtml[data-dsh-theme-eink-retro] {\n  --eink-paper: #f4f4f4;\n  --eink-paper-bright: #ffffff;\n  --eink-paper-raised: #e8e8e8;\n  --eink-paper-inset: #d2d2d2;\n  --eink-ink: #161616;\n  --eink-ink-2: #4a4a4a;\n  --eink-rule: #a8a8a8;\n  --eink-rule-strong: #686868;\n  --eink-selection-bg: #161616;\n  --eink-selection-fg: #ffffff;\n  --eink-shadow-1: 1px 1px 0 #16161633;\n  --eink-shadow-2: 2px 2px 0 #16161633;\n  --eink-radius-control: 2px;\n  --eink-radius-surface: 2px;\n  --eink-font-sans: "IBM Plex Sans SC", "Noto Sans SC", "Source Han Sans SC", "Microsoft YaHei UI", "Segoe UI", sans-serif;\n  --eink-font-mono: "IBM Plex Mono", "Sarasa Mono SC", "Cascadia Mono", Consolas, monospace;\n}\n\nhtml[data-dsh-theme-eink-retro] body[data-ds-dark-theme] {\n  --eink-paper: #181818;\n  --eink-paper-bright: #222222;\n  --eink-paper-raised: #303030;\n  --eink-paper-inset: #121212;\n  --eink-ink: #f4f4f4;\n  --eink-ink-2: #c8c8c8;\n  --eink-rule: #585858;\n  --eink-rule-strong: #888888;\n  --eink-selection-bg: #f4f4f4;\n  --eink-selection-fg: #161616;\n  --eink-shadow-1: 1px 1px 0 #0008;\n  --eink-shadow-2: 2px 2px 0 #0008;\n}\n\nhtml[data-dsh-theme-eink-retro],\nhtml[data-dsh-theme-eink-retro] body,\nhtml[data-dsh-theme-eink-retro] #root {\n  background-color: var(--dsw-alias-bg-base);\n  background-image: none;\n}\n\nhtml[data-dsh-theme-eink-retro] body {\n  color: var(--dsw-alias-label-primary);\n  font-family: var(--eink-font-sans);\n  font-synthesis: none;\n  text-rendering: optimizeLegibility;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html[data-dsh-theme-eink-retro] *,\n  html[data-dsh-theme-eink-retro] *::before,\n  html[data-dsh-theme-eink-retro] *::after {\n    scroll-behavior: auto !important;\n    transition-duration: 0.01ms !important;\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n  }\n}\n\nhtml[data-dsh-theme-eink-retro] [data-pane="sidebar"],\nhtml[data-dsh-theme-eink-retro] [data-pane="conversation"],\nhtml[data-dsh-theme-eink-retro] [data-pane="details"] {\n  background-color: var(--dsw-alias-bg-base);\n  background-image: none;\n  box-shadow: none;\n}\n\nhtml[data-dsh-theme-eink-retro] [data-pane="sidebar"] {\n  background-color: var(--dsw-specific-sidebar-fill);\n  border-right: 1px solid var(--eink-rule);\n}\n\nhtml[data-dsh-theme-eink-retro] [data-pane="conversation"] {\n  border-right: 1px solid var(--eink-rule);\n}\n\nhtml[data-dsh-theme-eink-retro] [data-pane="details"] {\n  background-color: var(--eink-paper-raised);\n}\n\nhtml[data-dsh-theme-eink-retro] :where(button, input, textarea, select, [role="button"]),\nhtml[data-dsh-theme-eink-retro] :where(\n  article,\n  fieldset,\n  [role="dialog"],\n  [role="menu"],\n  [role="listbox"],\n  [role="tooltip"],\n  [role="treeitem"],\n  [class*="card" i],\n  [class*="panel" i],\n  [class*="modal" i],\n  [class*="column" i]\n) {\n  border-radius: var(--eink-radius-surface) !important;\n}\n\n/* Some DSH and marketplace controls draw their visible surface on a wrapper\n * instead of the native input/card. Keep those shells in the same rectilinear\n * system without flattening charts or user content. */\nhtml[data-dsh-theme-eink-retro] span[class*="tabSearch"],\nhtml[data-dsh-theme-eink-retro] div[class$="_bar"]:has(> [class$="_label"]),\nhtml[data-dsh-theme-eink-retro] div:has(> [class$="_sep"][aria-hidden="true"]) {\n  border-radius: var(--eink-radius-surface) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(button, [role="button"], [role="tab"]) {\n  box-shadow: none;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(\n  [role="radio"][aria-checked="true"],\n  button[aria-pressed="true"],\n  [data-state="checked"],\n  [data-state="active"],\n  [data-active="true"]\n) {\n  color: var(--eink-selection-fg) !important;\n  background-color: var(--eink-selection-bg) !important;\n  border-color: var(--eink-selection-bg) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(\n  [role="radio"][aria-checked="true"],\n  button[aria-pressed="true"],\n  [data-state="checked"],\n  [data-state="active"],\n  [data-active="true"]\n) * {\n  color: inherit !important;\n}\n\n/* Switches own their state on the track, not on the button shell. Keeping the\n * shell transparent prevents a second black rectangle from showing around an\n * enabled track. */\nhtml[data-dsh-theme-eink-retro] [role="switch"] {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="switch"] > * {\n  background-color: var(--eink-paper-bright) !important;\n  border: 1px solid var(--eink-rule-strong) !important;\n  border-radius: 1px !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="switch"] > * > * {\n  background-color: var(--eink-paper-bright) !important;\n  border: 1px solid var(--eink-selection-bg) !important;\n  border-radius: 1px !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="switch"][aria-checked="true"] > * {\n  background-color: var(--eink-selection-bg) !important;\n  border-color: var(--eink-selection-bg) !important;\n}\n\n/* Semantic destructive actions keep their warning color, but use the same\n * flat outline treatment as the rest of the control system. */\nhtml[data-dsh-theme-eink-retro] button[class*="deleteButton" i] {\n  background-color: transparent !important;\n  border: 1px solid currentColor !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] button[class*="deleteButton" i]:hover {\n  background-color: color-mix(in srgb, currentColor 8%, transparent) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where([class*="badge" i], [class*="tag" i]):not(.lc-root *) {\n  border-radius: 1px !important;\n  filter: none;\n}\n\nhtml[data-dsh-theme-eink-retro="immersive"] :where([class*="badge" i], [class*="tag" i]):not(.lc-root *) {\n  filter: grayscale(1);\n}\n\n/* Capability metadata is tertiary information, not an active control. Use a\n * quiet outline instead of a low-contrast filled status color. */\nhtml[data-dsh-theme-eink-retro] [class*="badgeInvokable"] {\n  color: var(--eink-ink-2) !important;\n  background-color: transparent !important;\n  border-color: var(--eink-rule) !important;\n  padding: 2px 6px !important;\n  font-size: 11px !important;\n  font-weight: 550 !important;\n  line-height: 1.3 !important;\n  filter: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(button:not(:disabled), [role="button"]:not([aria-disabled="true"]), [role="tab"]):active {\n  transform: translate(1px, 1px);\n}\n\nhtml[data-dsh-theme-eink-retro] :where(input, textarea, select, [contenteditable="true"]) {\n  background-color: var(--dsw-specific-input-major);\n  border-color: var(--eink-rule-strong);\n  box-shadow: inset 1px 1px 0 color-mix(in srgb, var(--eink-ink) 14%, transparent);\n  caret-color: var(--eink-ink);\n}\n\n/* The composer keeps its visible text in a backdrop layer underneath a\n * transparent textarea. Let the outer composer card own the surface and\n * focus treatment; otherwise the backdrop is hidden and a second inset rule\n * remains visible after the textarea loses focus. */\nhtml[data-dsh-theme-eink-retro] textarea[data-dsh-part="composer-input"] {\n  background-color: transparent !important;\n  border: 0 !important;\n  outline: 0 !important;\n  box-shadow: none !important;\n}\n\n/* DSH places a blue-gray fade on the composer seat itself. Retint that native\n * layer instead of removing the useful separation between the message stream\n * and composer. */\nhtml[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"] > :has(\n  [data-composer-card="true"]\n)::before {\n  background-image: linear-gradient(\n    transparent 0,\n    color-mix(in srgb, var(--dsw-alias-bg-base) 94%, transparent) 36px\n  ) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [data-composer-card="true"]:has(\n  textarea[data-dsh-part="composer-input"]:focus-visible\n) {\n  border-color: var(--eink-ink) !important;\n  box-shadow: var(--eink-shadow-1) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(\n  button,\n  [role="button"],\n  [role="tab"],\n  [role="menuitem"],\n  [role="treeitem"],\n  [role="switch"],\n  [role="radio"]\n):focus-visible {\n  outline: 1px solid var(--eink-ink);\n  outline-offset: 2px;\n  box-shadow: 0 0 0 1px var(--eink-paper-bright);\n}\n\n/* Native form controls already own a visible border. Strengthen that one\n * frame and add an inner baseline instead of drawing a second offset outline. */\nhtml[data-dsh-theme-eink-retro] :where(input, textarea, select, [contenteditable="true"]):focus-visible {\n  outline: 0 !important;\n  border-color: var(--eink-ink) !important;\n  box-shadow: inset 0 -2px 0 var(--eink-ink) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] textarea[data-dsh-part="composer-input"]:focus-visible {\n  box-shadow: none !important;\n}\n\n/* The trajectory search already has a semantic wrapper with its search icon.\n * Make that wrapper the only surface and the only focus owner. */\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) {\n  gap: 4px;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) button {\n  min-height: 24px;\n  padding: 2px 8px;\n  color: var(--eink-ink-2);\n  background-color: var(--eink-paper-bright);\n  border: 1px solid var(--eink-rule);\n}\n\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) :has(\n  > input[type="search"]\n) {\n  min-height: 24px;\n  background-color: var(--eink-paper-bright) !important;\n  border: 1px solid var(--eink-rule-strong) !important;\n  border-radius: var(--eink-radius-control) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) input[type="search"] {\n  background-color: transparent !important;\n  border: 0 !important;\n  outline: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) :has(\n  > input[type="search"]:focus-visible\n) {\n  border-color: var(--eink-ink) !important;\n  box-shadow: inset 0 -2px 0 var(--eink-ink) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] select option {\n  color: var(--eink-ink);\n  background-color: var(--eink-paper-bright);\n}\n\nhtml[data-dsh-theme-eink-retro] select option:checked {\n  color: var(--eink-selection-fg);\n  background-color: var(--eink-selection-bg);\n}\n\nhtml[data-dsh-theme-eink-retro] :where([role="dialog"], [data-dsh-part="dialog"]) {\n  background-color: var(--dsw-alias-bg-layer-1);\n  border: 1px solid var(--eink-rule-strong);\n  box-shadow: var(--eink-shadow-2);\n  backdrop-filter: none;\n  border-radius: var(--eink-radius-surface) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where([role="menu"], [role="listbox"]) {\n  background-color: var(--dsw-specific-menu);\n  border: 1px solid var(--eink-rule-strong);\n  box-shadow: var(--eink-shadow-1);\n}\n\nhtml[data-dsh-theme-eink-retro] [role="tooltip"] {\n  border: 1px solid var(--eink-rule-strong);\n  box-shadow: var(--eink-shadow-1);\n}\n\nhtml[data-dsh-theme-eink-retro] :where(\n  [role="treeitem"][aria-selected="true"],\n  [aria-current="true"],\n  [aria-current="page"]\n) {\n  color: var(--eink-selection-fg) !important;\n  background-color: var(--eink-selection-bg) !important;\n  background-image: none !important;\n  border-color: var(--eink-selection-bg) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(\n  [role="treeitem"][aria-selected="true"],\n  [aria-current="true"],\n  [aria-current="page"]\n) * {\n  color: inherit !important;\n}\n\n/* Tabs are secondary navigation. A baseline and stronger label keep their\n * original footprint; inverse fills are reserved for primary selections. */\nhtml[data-dsh-theme-eink-retro] [role="tab"][aria-selected="true"] {\n  color: var(--eink-ink) !important;\n  background-color: transparent !important;\n  background-image: none !important;\n  border-color: transparent !important;\n  box-shadow: inset 0 -2px 0 var(--eink-ink) !important;\n  font-weight: 650 !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="tab"][aria-selected="true"] * {\n  color: inherit !important;\n}\n\nhtml[data-dsh-theme-eink-retro] ::selection {\n  color: var(--eink-selection-fg);\n  background: var(--eink-selection-bg);\n}\n\nhtml[data-dsh-theme-eink-retro] hr {\n  height: 1px;\n  background: var(--eink-rule);\n  border: 0;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(code, kbd, samp, pre) {\n  font-family: var(--eink-font-mono);\n}\n\nhtml[data-dsh-theme-eink-retro] :where(pre, [class*="code-block" i]) {\n  background-color: var(--dsw-alias-markdown-code-block);\n  border: 1px solid var(--eink-rule);\n  border-radius: 2px;\n  box-shadow: inset 2px 0 0 var(--eink-rule-strong);\n}\n\nhtml[data-dsh-theme-eink-retro] code:not(pre code) {\n  background-color: var(--dsw-alias-markdown-inline-code);\n  border: 1px solid var(--eink-rule);\n  border-radius: 2px;\n}\n\nhtml[data-dsh-theme-eink-retro] blockquote {\n  border-left: 3px double var(--eink-rule-strong);\n  background: var(--eink-paper-raised);\n}\n\nhtml[data-dsh-theme-eink-retro] table {\n  border-collapse: collapse;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(th, td) {\n  border: 1px solid var(--eink-rule);\n  padding: 8px 12px !important;\n  vertical-align: top;\n}\n\nhtml[data-dsh-theme-eink-retro] th {\n  background: var(--eink-paper-raised);\n  font-weight: 650;\n}\n\n/* DSH mounts composer menus inside the conversation scrollport. Their\n * absolutely positioned listboxes must not contribute their popup height to\n * the message stream, otherwise opening one changes the stream scrollHeight\n * and makes its scrollbar/thumb jump. Keep gutter reservation local to the\n * popup viewport: reserving it on the outer scrollport creates a second empty\n * track beside views such as the trajectory table. */\nhtml[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"] :has(> [role="listbox"]) {\n  contain: layout;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="listbox"] > * {\n  scrollbar-gutter: stable;\n}\n\n/* The trajectory view already owns its vertical range in an inner table\n * scroller. Keep the otherwise empty outer scrollport from acquiring a second\n * scrollbar while a composer popup mounts or finishes unmounting. */\nhtml[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"]:has(\n  section[aria-label="Trajectory timeline"]\n) {\n  overflow-y: hidden;\n}\n\nhtml[data-dsh-theme-eink-retro] * {\n  scrollbar-color: var(--dsw-alias-scrollbar-bg-l2) var(--dsw-alias-scrollbar-bg-l1);\n  scrollbar-width: thin;\n}\n\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-track,\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-corner {\n  background: var(--dsw-alias-scrollbar-bg-l1);\n}\n\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-thumb {\n  background: var(--dsw-alias-scrollbar-bg-l2);\n  border: 2px solid var(--dsw-alias-scrollbar-bg-l1);\n  border-radius: 0;\n}\n\n/* Optional compatibility adapter: dsh-context v0.31.x. The data colors are\n * preserved in balanced mode and mapped to luminance only in immersive mode. */\nhtml[data-dsh-theme-eink-retro="immersive"] .lc-root :is(\n  .lc-stacked-seg,\n  .lc-bar-stack > div,\n  .lc-bar-up > div,\n  .lc-bar-down > div,\n  .lc-turn,\n  .lc-chip i,\n  .lc-detail-row i,\n  .lc-node i,\n  .lc-br-cat-row i,\n  .lc-bar-fill,\n  .lc-event-icon,\n  .lc-kind\n) {\n  filter: grayscale(1) contrast(1.12);\n}\n\nhtml[data-dsh-theme-eink-retro] .lc-root :is(.lc-card, .lc-stat, .lc-br-cat, .lc-ts-card) {\n  border-radius: 2px;\n  box-shadow: none;\n}\n\nhtml[data-dsh-theme-eink-retro] .lc-root :is(.lc-gran-on, .lc-rich-seg-on) {\n  color: var(--eink-selection-fg);\n  background: var(--eink-selection-bg);\n}\n\n/* Optional decorative adapters. User-authored images, attachments, previews,\n * canvas content and media are intentionally never filtered. */\nhtml[data-dsh-theme-eink-retro="immersive"] img[src*="/api/skin-center/"],\nhtml[data-dsh-theme-eink-retro="immersive"] [style*="/pet/"][style*="spritesheet"] {\n  filter: grayscale(1) contrast(1.08);\n}\n';

// src/client/tokens.ts
var pair = (light, dark) => ({ light, dark });
var EINK_TOKEN_SENTINEL = {
  token: "--dsw-alias-state-error-primary",
  light: "#8e3f3f",
  dark: "#d08a82"
};
var EINK_TOKENS = {
  "--dsw-alias-bg-base": pair("#f4f4f4", "#181818"),
  "--dsw-alias-bg-layer-1": pair("#ffffff", "#222222"),
  "--dsw-alias-bg-layer-2": pair("#e8e8e8", "#303030"),
  "--dsw-alias-bg-layer-3": pair("#d2d2d2", "#121212"),
  "--dsw-alias-bg-mask-1": pair("#1616164d", "#00000080"),
  "--dsw-alias-bg-mask-2": pair("#16161626", "#0000004d"),
  "--dsw-alias-bg-mask-3": pair("#16161673", "#000000a6"),
  "--dsw-alias-bg-mask-drop": pair("#1616165c", "#0000008f"),
  "--dsw-alias-bg-mask-photo": pair("#161616cc", "#000000d9"),
  "--dsw-alias-bg-module-platform": pair("#e8e8e8", "#303030"),
  "--dsw-alias-bg-multi-select": pair("#d2d2d2", "#303030"),
  "--dsw-alias-bg-overlay": pair("#ffffff", "#222222"),
  "--dsw-alias-bg-skeleton": pair("#1616160f", "#f4f4f414"),
  "--dsw-alias-border-inverted": pair("#ffffff99", "#16161699"),
  "--dsw-alias-border-inverted2": pair("#ffffffcc", "#161616cc"),
  "--dsw-alias-border-l1": pair("#16161626", "#f4f4f426"),
  "--dsw-alias-border-l2-darkmode-thin": pair("#16161640", "#f4f4f43b"),
  "--dsw-alias-border-l2": pair("#16161659", "#f4f4f452"),
  "--dsw-alias-border-l3": pair("#16161680", "#f4f4f475"),
  "--dsw-alias-border-l4": pair("#161616b3", "#f4f4f499"),
  "--dsw-alias-brand-primary": pair("#161616", "#f4f4f4"),
  "--dsw-alias-brand-primary-invert": pair("#ffffff", "#161616"),
  "--dsw-alias-brand-primary-new-colorprimary-new-color": pair("#161616", "#f4f4f4"),
  "--dsw-alias-brand-text": pair("#161616", "#f4f4f4"),
  "--dsw-alias-button-contrast-fill": pair("#161616", "#f4f4f4"),
  "--dsw-alias-button-elevated-fill": pair("#ffffff", "#222222"),
  "--dsw-alias-button-floating-fill": pair("#e8e8e8", "#303030"),
  "--dsw-alias-button-ghost-active-border": pair("#777777", "#888888"),
  "--dsw-alias-button-ghost-active-fill": pair("#d2d2d2", "#303030"),
  "--dsw-alias-button-ghost-active-hover": pair("#e8e8e8", "#383838"),
  "--dsw-alias-button-info-fill": pair("#161616", "#f4f4f4"),
  "--dsw-alias-button-info-hover": pair("#303030", "#dedede"),
  "--dsw-alias-button-primary-dimmed": pair("#777777", "#888888"),
  "--dsw-alias-button-primary-fill": pair("#161616", "#f4f4f4"),
  "--dsw-alias-button-primary-hover": pair("#303030", "#dedede"),
  "--dsw-alias-button-tool-bar-fill-invisible": pair("#16161614", "#f4f4f414"),
  "--dsw-alias-button-tool-bar-fill": pair("#16161626", "#f4f4f426"),
  "--dsw-alias-button-tool-bar-hover": pair("#16161640", "#f4f4f440"),
  "--dsw-alias-interactive-bg-active": pair("#d2d2d2", "#303030"),
  "--dsw-alias-interactive-bg-hover": pair("#16161614", "#f4f4f414"),
  "--dsw-alias-interactive-bg-hover-accent": pair("#16161626", "#f4f4f426"),
  "--dsw-alias-interactive-bg-hover-danger": pair("#8e3f3f1a", "#d08a8226"),
  "--dsw-alias-interactive-bg-hover-solid": pair("#e8e8e8", "#303030"),
  "--dsw-alias-label-primary": pair("#161616", "#f4f4f4"),
  "--dsw-alias-label-primary-bluish": pair("#161616", "#f4f4f4"),
  "--dsw-alias-label-primary-foreground": pair("#ffffff", "#161616"),
  "--dsw-alias-label-primary-inverted": pair("#ffffff", "#161616"),
  "--dsw-alias-label-primary-dimmed": pair("#303030", "#dedede"),
  "--dsw-alias-label-secondary": pair("#4a4a4a", "#c8c8c8"),
  "--dsw-alias-label-tertiary": pair("#6a6a6a", "#9a9a9a"),
  "--dsw-alias-label-caption": pair("#6a6a6a", "#9a9a9a"),
  "--dsw-alias-label-dimmed": pair("#828282", "#7a7a7a"),
  "--dsw-alias-markdown-citation": pair("#e8e8e8", "#303030"),
  "--dsw-alias-markdown-code-block": pair("#eeeeee", "#121212"),
  "--dsw-alias-markdown-code-block-banner": pair("#d2d2d2", "#303030"),
  "--dsw-alias-markdown-code-segment-selected": pair("#ffffff", "#222222"),
  "--dsw-alias-markdown-code-segment-unselected": pair("#d2d2d2", "#121212"),
  "--dsw-alias-markdown-inline-code": pair("#e8e8e8", "#121212"),
  "--dsw-alias-markdown-placeholder": pair("#e8e8e8", "#303030"),
  "--dsw-alias-markdown-tag": pair("#d2d2d2", "#303030"),
  "--dsw-alias-scrollbar-bg-l1": pair("#e8e8e8", "#303030"),
  "--dsw-alias-scrollbar-bg-l2": pair("#bcbcbc", "#4a4a4a"),
  "--dsw-alias-scrollbar-hover-l1": pair("#777777", "#888888"),
  "--dsw-alias-scrollbar-hover-l2": pair("#5f5f5f", "#a0a0a0"),
  "--dsw-alias-state-business-primary": pair("#161616", "#f4f4f4"),
  "--dsw-alias-state-business-tertiary": pair("#d2d2d2", "#303030"),
  "--dsw-alias-state-error-primary": pair("#8e3f3f", "#d08a82"),
  "--dsw-alias-state-error-secondary": pair("#a6534d", "#b97770"),
  "--dsw-alias-state-success-primary": pair("#4e674d", "#8da284"),
  "--dsw-alias-state-success-secondary": pair("#647b62", "#9aae91"),
  "--dsw-alias-state-success-tertiary": pair("#d9e0d4", "#30372e"),
  "--dsw-alias-state-warn-primary": pair("#735e20", "#c7aa62"),
  "--dsw-alias-toast-bg": pair("#161616", "#f4f4f4"),
  "--dsw-alias-tooltip-bg": pair("#ffffff", "#303030"),
  "--dsw-alias-tooltip-fg": pair("#161616", "#f4f4f4"),
  "--dsw-specific-bubble": pair("#ededed", "#282828"),
  "--dsw-specific-bubble-highlight": pair("#d2d2d2", "#303030"),
  "--dsw-specific-input-major": pair("#ffffff", "#222222"),
  "--dsw-specific-login-input": pair("#ffffff", "#222222"),
  "--dsw-specific-menu": pair("#ffffff", "#222222"),
  "--dsw-specific-selector": pair("#e8e8e8", "#303030"),
  "--dsw-specific-sidebar-fill": pair("#e8e8e8", "#222222"),
  "--dsw-specific-sidebar-nav-item-active": pair("#161616", "#f4f4f4"),
  "--dsw-specific-sidebar-nav-item-active-accent": pair("#ffffff", "#161616"),
  "--dsw-specific-sidebar-nav-item-hover": pair("#d2d2d2", "#303030"),
  "--dsw-specific-tip": pair("#e8e8e8", "#303030"),
  "--dsw-shadow-lv1": pair("1px 1px 0 #16161633", "1px 1px 0 #0008"),
  "--dsw-shadow-lv1-blur": pair("none", "none"),
  "--dsw-shadow-lv2": pair("2px 2px 0 #16161633", "2px 2px 0 #0008"),
  "--dsw-shadow-lv2-blur": pair("none", "none"),
  "--dsw-shadow-lv3": pair("2px 2px 0 #16161640", "2px 2px 0 #0009"),
  "--dsw-shadow-lv3-blur": pair("none", "none")
};

// src/client/index.ts
var STYLE_ID = "dsh-theme-eink-retro/style";
var ROOT_ATTRIBUTE = "data-dsh-theme-eink-retro";
var MODE_STORAGE_KEY = "dsh-theme-eink-retro:mode";
var MODE_EVENT = "dsh-theme-eink-retro:mode-change";
var THEME_STATE_KEY = "__dshEinkRetroThemeState__";
var BUILTIN_THEME_IDS = /* @__PURE__ */ new Set(["system", "light", "dark"]);
var inject = ["slots", "theme"];
function readMode() {
  const stored = window.localStorage.getItem(MODE_STORAGE_KEY);
  if (stored === "immersive" || stored === "off") return stored;
  return "balanced";
}
function writeMode(mode) {
  window.localStorage.setItem(MODE_STORAGE_KEY, mode);
}
function isBuiltinTheme(snapshot) {
  return BUILTIN_THEME_IDS.has(snapshot.preference);
}
function modeState(mode, snapshot) {
  return { mode, effective: mode !== "off" && isBuiltinTheme(snapshot) };
}
function dispatchModeState(state) {
  window.dispatchEvent(new CustomEvent(MODE_EVENT, { detail: state }));
}
function applyMode(root, mode, snapshot) {
  const state = modeState(mode, snapshot);
  if (state.effective) root.setAttribute(ROOT_ATTRIBUTE, mode);
  else root.removeAttribute(ROOT_ATTRIBUTE);
  dispatchModeState(state);
  return state;
}
function createSettingsSection(ctx, syncMode) {
  const options = [
    {
      mode: "balanced",
      label: "\u5E73\u8861\u6A21\u5F0F\uFF08\u63A8\u8350\uFF09",
      description: "\u7EDF\u4E00 DSH \u58F3\u5C42\u4E0E\u63A7\u4EF6\uFF0C\u4FDD\u7559\u63D2\u4EF6\u56FE\u8868\u3001\u544A\u8B66\u3001\u54C1\u724C\u548C\u5185\u5BB9\u989C\u8272\u3002"
    },
    {
      mode: "immersive",
      label: "\u5B8C\u5168\u6C89\u6D78",
      description: "\u628A\u7B2C\u4E09\u65B9\u63D2\u4EF6\u7684\u6570\u636E\u6807\u8BB0\u3001\u88C5\u9970\u76AE\u80A4\u548C\u5BA0\u7269\u4E5F\u6620\u5C04\u4E3A\u5355\u8272\u7070\u9636\u3002"
    },
    {
      mode: "off",
      label: "\u6682\u505C\u4E3B\u9898",
      description: "\u79FB\u9664 E\u2011Ink \u8986\u76D6\uFF0C\u663E\u793A\u5F53\u524D DSH \u6216\u7B2C\u4E09\u65B9\u76AE\u80A4\u7684\u539F\u59CB\u5916\u89C2\u3002"
    }
  ];
  return function EinkRetroSettings() {
    const [view, setView] = import_react.default.useState(() => modeState(readMode(), ctx.theme.getTheme()));
    import_react.default.useEffect(() => {
      const onModeChange = (event) => {
        setView(event.detail);
      };
      window.addEventListener(MODE_EVENT, onModeChange);
      return () => window.removeEventListener(MODE_EVENT, onModeChange);
    }, []);
    const selectMode = (mode) => {
      writeMode(mode);
      let snapshot = ctx.theme.getTheme();
      if (mode !== "off" && !isBuiltinTheme(snapshot)) {
        ctx.theme.setTheme("system");
        snapshot = ctx.theme.getTheme();
      }
      setView(syncMode(mode, snapshot));
    };
    return import_react.default.createElement(
      "section",
      { className: "eink-retro-settings", "aria-labelledby": "eink-retro-settings-title" },
      import_react.default.createElement("h2", { id: "eink-retro-settings-title" }, "E\u2011Ink Retro"),
      import_react.default.createElement(
        "p",
        { className: "eink-retro-settings__intro" },
        "\u9009\u62E9\u4E3B\u9898\u8986\u76D6\u8303\u56F4\u3002\u5207\u6362\u5176\u4ED6\u7B2C\u4E09\u65B9\u76AE\u80A4\u65F6\u4F1A\u81EA\u52A8\u6682\u505C\uFF1B\u56DE\u5230 DSH \u9ED8\u8BA4\u6D45\u8272\u3001\u6DF1\u8272\u6216\u8DDF\u968F\u7CFB\u7EDF\u540E\u6062\u590D\u3002"
      ),
      import_react.default.createElement(
        "div",
        { className: "eink-retro-settings__options", role: "radiogroup", "aria-label": "E\u2011Ink \u4E3B\u9898\u6A21\u5F0F" },
        ...options.map(
          (option) => import_react.default.createElement(
            "button",
            {
              key: option.mode,
              type: "button",
              role: "radio",
              "aria-checked": view.mode === option.mode,
              className: "eink-retro-settings__option",
              onClick: () => selectMode(option.mode)
            },
            import_react.default.createElement("span", { className: "eink-retro-settings__option-title" }, option.label),
            import_react.default.createElement("span", { className: "eink-retro-settings__option-description" }, option.description)
          )
        )
      ),
      !view.effective && view.mode !== "off" ? import_react.default.createElement(
        "p",
        { className: "eink-retro-settings__status", role: "status" },
        "\u5F53\u524D\u6B63\u5728\u4F7F\u7528\u53E6\u4E00\u5957\u7B2C\u4E09\u65B9\u76AE\u80A4\uFF0CE\u2011Ink Retro \u5DF2\u6682\u65F6\u505C\u7528\u3002"
      ) : null
    );
  };
}
function apply(ctx) {
  let disposeTokens = null;
  let installingTokens = false;
  let releasingTokens = false;
  let syncTimer = null;
  const releaseTokens = () => {
    if (!disposeTokens) return;
    const dispose = disposeTokens;
    disposeTokens = null;
    releasingTokens = true;
    try {
      dispose();
    } finally {
      releasingTokens = false;
    }
  };
  const syncMode = (mode, snapshot) => {
    const next = modeState(mode, snapshot);
    if (next.effective && !disposeTokens && !installingTokens) {
      installingTokens = true;
      disposeTokens = ctx.theme.overrideTokens("dsh-theme-eink-retro", EINK_TOKENS);
      installingTokens = false;
    } else if (!next.effective) {
      releaseTokens();
    }
    return applyMode(document.documentElement, mode, snapshot);
  };
  const tokensAreApplied = () => {
    const rootStyle = window.getComputedStyle(document.documentElement);
    const tokenStyle = window.getComputedStyle(document.body ?? document.documentElement);
    const expected = rootStyle.colorScheme.includes("dark") ? EINK_TOKEN_SENTINEL.dark : EINK_TOKEN_SENTINEL.light;
    return tokenStyle.getPropertyValue(EINK_TOKEN_SENTINEL.token).trim().toLowerCase() === expected;
  };
  const scheduleThemeSync = () => {
    if (syncTimer !== null) window.clearTimeout(syncTimer);
    syncTimer = window.setTimeout(() => {
      syncTimer = null;
      const mode = readMode();
      const snapshot = ctx.theme.getTheme();
      const next = modeState(mode, snapshot);
      if (!next.effective) {
        releaseTokens();
        applyMode(document.documentElement, mode, snapshot);
      } else if (!tokensAreApplied()) {
        releaseTokens();
        syncMode(mode, snapshot);
      } else {
        applyMode(document.documentElement, mode, snapshot);
      }
    }, 0);
  };
  ctx.effect(() => {
    const root = document.documentElement;
    const themeGlobal = globalThis;
    let state = themeGlobal[THEME_STATE_KEY];
    if (state) {
      state.users += 1;
      state.style.textContent = theme_default;
    } else {
      const style = document.createElement("style");
      style.dataset.plugin = "dsh-theme-eink-retro";
      style.dataset.pluginCss = STYLE_ID;
      style.textContent = theme_default;
      document.head.appendChild(style);
      state = {
        previousRootAttribute: root.getAttribute(ROOT_ATTRIBUTE),
        style,
        users: 1
      };
      themeGlobal[THEME_STATE_KEY] = state;
    }
    syncMode(readMode(), ctx.theme.getTheme());
    return () => {
      const current = themeGlobal[THEME_STATE_KEY];
      if (!current) return;
      current.users -= 1;
      if (current.users > 0) return;
      releaseTokens();
      if (syncTimer !== null) window.clearTimeout(syncTimer);
      current.style.remove();
      if (current.previousRootAttribute === null) root.removeAttribute(ROOT_ATTRIBUTE);
      else root.setAttribute(ROOT_ATTRIBUTE, current.previousRootAttribute);
      delete themeGlobal[THEME_STATE_KEY];
    };
  }, "dsh-theme-eink-retro: apply theme");
  ctx.on("theme/change", (snapshot) => {
    if (installingTokens || releasingTokens) return;
    void snapshot;
    scheduleThemeSync();
  });
  const SettingsSection = createSettingsSection(ctx, syncMode);
  ctx.slots.inject(
    "settings.section",
    () => ctx.slots.register(
      {
        name: "settings.section",
        id: "eink-retro",
        order: 11,
        label: "E\u2011Ink Retro"
      },
      SettingsSection
    )
  );
}

    return module.exports;
  },
});
