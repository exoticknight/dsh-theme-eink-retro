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
var theme_default = '/* E\u2011Ink Retro has two layers:\r\n * 1. both modes share neutral semantic tokens, crisp geometry and black/white\r\n *    interaction states;\r\n * 2. immersive mode swaps the status hues for an ink ramp and maps the\r\n *    remaining decorative/data colors to gray.\r\n * User-authored media is never filtered.\r\n *\r\n * Everything the theme adds lives under `html[data-dsh-theme-eink-retro]`, with\r\n * one deliberate exception: the block below styles this plugin\'s own settings\r\n * section, which must also look right while the theme is switched off. It is\r\n * namespaced by the `eink-retro-settings` class instead. */\r\n\r\n.eink-retro-settings {\r\n  display: grid;\r\n  gap: 14px;\r\n  color: var(--dsw-alias-label-primary);\r\n}\r\n\r\n.eink-retro-settings h2,\r\n.eink-retro-settings p {\r\n  margin: 0;\r\n}\r\n\r\n.eink-retro-settings__intro,\r\n.eink-retro-settings__enabled-description,\r\n.eink-retro-settings__option-description,\r\n.eink-retro-settings__status {\r\n  color: var(--dsw-alias-label-secondary);\r\n  font-size: var(--eink-text-body, 13px);\r\n  line-height: 1.55;\r\n}\r\n\r\n.eink-retro-settings__enabled {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 18px;\r\n  min-height: 48px;\r\n  cursor: pointer;\r\n}\r\n\r\n.eink-retro-settings__enabled-copy,\r\n.eink-retro-settings__enabled-title,\r\n.eink-retro-settings__enabled-description {\r\n  display: block;\r\n}\r\n\r\n.eink-retro-settings__enabled-copy {\r\n  min-width: 0;\r\n}\r\n\r\n.eink-retro-settings__enabled-title {\r\n  margin-bottom: 2px;\r\n  font-size: var(--eink-text-title, 14px);\r\n  font-weight: var(--eink-weight-strong, 650);\r\n}\r\n\r\n.eink-retro-settings__enabled-input,\r\nhtml[data-dsh-theme-eink-retro] .eink-retro-settings__enabled-input {\r\n  flex: 0 0 auto;\r\n  width: auto !important;\r\n  height: auto !important;\r\n  margin: 0;\r\n  padding: 0 !important;\r\n  appearance: auto !important;\r\n  accent-color: auto !important;\r\n  background: revert !important;\r\n  border: revert !important;\r\n  border-radius: revert !important;\r\n  box-shadow: none !important;\r\n  cursor: pointer;\r\n}\r\n\r\n/* The control keeps its native shape either way, but once the theme is on it\r\n * must not be the one blue object left on screen. */\r\nhtml[data-dsh-theme-eink-retro] .eink-retro-settings__enabled-input {\r\n  accent-color: var(--eink-ink) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] .eink-retro-settings__enabled-input:focus-visible {\r\n  outline: 1px solid var(--eink-ink) !important;\r\n  outline-offset: 2px;\r\n  border: revert !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.eink-retro-settings__options {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 10px;\r\n}\r\n\r\n.eink-retro-settings__option {\r\n  min-height: 112px;\r\n  padding: 14px;\r\n  color: var(--dsw-alias-label-primary);\r\n  text-align: left;\r\n  background: var(--dsw-alias-bg-layer-1);\r\n  border: 1px solid var(--dsw-alias-border-l3);\r\n  border-radius: var(--eink-radius-surface, 2px);\r\n  box-shadow: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.eink-retro-settings__option:hover {\r\n  background: var(--dsw-alias-interactive-bg-hover-solid);\r\n}\r\n\r\n.eink-retro-settings__option[aria-checked="true"] {\r\n  color: var(--dsw-alias-brand-primary-invert);\r\n  background: var(--dsw-alias-brand-primary);\r\n  border-color: var(--dsw-alias-brand-primary);\r\n}\r\n\r\n.eink-retro-settings__option:focus-visible {\r\n  outline: 1px solid var(--dsw-alias-brand-primary);\r\n  outline-offset: 2px;\r\n}\r\n\r\n.eink-retro-settings__option-title,\r\n.eink-retro-settings__option-description {\r\n  display: block;\r\n}\r\n\r\n.eink-retro-settings__option-title {\r\n  margin-bottom: 8px;\r\n  font-size: var(--eink-text-title, 14px);\r\n  font-weight: var(--eink-weight-strong, 650);\r\n}\r\n\r\n.eink-retro-settings__option[aria-checked="true"] .eink-retro-settings__option-description {\r\n  color: inherit;\r\n  opacity: 0.78;\r\n}\r\n\r\n.eink-retro-settings__status {\r\n  padding: 10px 12px;\r\n  background: var(--dsw-alias-bg-layer-2);\r\n  border-left: 3px solid var(--dsw-alias-state-warn-primary);\r\n}\r\n\r\n@media (max-width: 760px) {\r\n  .eink-retro-settings__options {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .eink-retro-settings__option {\r\n    min-height: 0;\r\n  }\r\n}\r\n\r\n/* Design language tokens.\r\n *\r\n * Every color derives from the official DSH token layer this plugin installs,\r\n * so light/dark and balanced/immersive stay in sync from a single source and\r\n * the theme needs no dark-mode detector of its own. The literal fallbacks are\r\n * the light values, which is also what a missing token layer should degrade\r\n * to. The two rule colors are the only authored values: they are ink mixed\r\n * into paper, so they follow the palette in both directions.\r\n *\r\n * Line hierarchy \u2014 pick by role, not by how heavy it should look:\r\n *   --eink-rule         quiet separators and static surfaces: pane dividers,\r\n *                       tables, code blocks, message bubbles, badges, hr\r\n *   --eink-rule-strong  anything that can be operated or floats above the\r\n *                       page: inputs, framed buttons, menus, dialogs, cards\r\n *\r\n * Elevation hierarchy \u2014 hard offset, never blurred:\r\n *   --eink-shadow-1     attached popups: menus, listboxes, tooltips\r\n *   --eink-shadow-2     floating layers: dialogs, elevated cards\r\n *   (controls stay flat: a control earns a frame, not a shadow)\r\n *\r\n * Weights are mid-steps on purpose. On a variable face they render as drawn;\r\n * on a 400/700 system face the browser resolves both to the nearest real\r\n * weight, which is why they are named by role rather than by number. */\r\nhtml[data-dsh-theme-eink-retro],\r\nhtml[data-dsh-theme-eink-retro] body {\r\n  --eink-paper: var(--dsw-alias-bg-base, #f4f4f4);\r\n  --eink-paper-bright: var(--dsw-alias-bg-layer-1, #ffffff);\r\n  --eink-paper-raised: var(--dsw-alias-bg-layer-2, #e8e8e8);\r\n  --eink-paper-inset: var(--dsw-alias-bg-layer-3, #d2d2d2);\r\n  --eink-ink: var(--dsw-alias-label-primary, #161616);\r\n  --eink-ink-2: var(--dsw-alias-label-secondary, #4a4a4a);\r\n  --eink-ink-3: var(--dsw-alias-label-tertiary, #6a6a6a);\r\n  --eink-selection-bg: var(--dsw-alias-brand-primary, #161616);\r\n  --eink-selection-fg: var(--dsw-alias-brand-primary-invert, #ffffff);\r\n  /* Mixed into the layer-1 surface rather than the base: DSH gives the window\r\n   * base a translucent fill in dark mode, and a rule that inherits that alpha\r\n   * lets whatever sits behind the window bleed through the line. */\r\n  --eink-rule: color-mix(in srgb, var(--eink-ink) 36%, var(--eink-paper-bright));\r\n  --eink-rule-strong: color-mix(in srgb, var(--eink-ink) 63%, var(--eink-paper-bright));\r\n  --eink-shadow-1: var(--dsw-shadow-lv1, 1px 1px 0 #16161633);\r\n  --eink-shadow-2: var(--dsw-shadow-lv2, 2px 2px 0 #16161633);\r\n  --eink-well: inset 1px 1px 0 color-mix(in srgb, var(--eink-ink) 14%, transparent);\r\n  --eink-radius-tight: 1px;\r\n  --eink-radius-control: 2px;\r\n  --eink-radius-surface: 2px;\r\n  --eink-weight-medium: 550;\r\n  --eink-weight-strong: 650;\r\n  --eink-text-caption: 11px;\r\n  --eink-text-sm: 12px;\r\n  --eink-text-body: 13px;\r\n  --eink-text-title: 14px;\r\n  --eink-font-sans: "IBM Plex Sans SC", "Noto Sans SC", "Source Han Sans SC", -apple-system,\r\n    BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", "Microsoft YaHei UI", ui-sans-serif, sans-serif;\r\n  --eink-font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, "Sarasa Mono SC",\r\n    "Cascadia Mono", Consolas, monospace;\r\n}\r\n\r\n/* Compatibility bridge for DSH surfaces and plugins that still consume\r\n * pre-semantic or unsuffixed token names. Values resolve through the current\r\n * official token layer, so balanced/immersive and light/dark stay in sync. */\r\nhtml[data-dsh-theme-eink-retro],\r\nhtml[data-dsh-theme-eink-retro] body {\r\n  --dsw-alias-border: var(--dsw-alias-border-l3);\r\n  --dsw-alias-fill-primary: var(--dsw-alias-bg-layer-1);\r\n  --dsw-alias-text-primary: var(--dsw-alias-label-primary);\r\n  --dsw-alias-accent: var(--dsw-alias-brand-primary);\r\n  --dsw-alias-text-on-accent: var(--dsw-alias-brand-primary-invert);\r\n  --dsw-alias-button-info-label: var(--dsw-alias-brand-primary-invert);\r\n  --dsw-alias-danger: var(--dsw-alias-state-error-primary);\r\n  --dsw-alias-label-danger: var(--dsw-alias-state-error-primary);\r\n  --dsw-alias-label-error: var(--dsw-alias-state-error-primary);\r\n  --dsw-alias-label-on-danger: var(--dsw-alias-brand-primary-invert);\r\n  --dsw-alias-label-on-primary: var(--dsw-alias-brand-primary-invert);\r\n  --dsw-alias-label-quaternary: var(--dsw-alias-label-dimmed);\r\n  --dsw-alias-separator-primary: var(--dsw-alias-border-l2);\r\n  --dsw-alias-state-danger: var(--dsw-alias-state-error-primary);\r\n  --dsw-alias-state-warning-primary: var(--dsw-alias-state-warn-primary);\r\n  --dsw-alias-text-danger: var(--dsw-alias-state-error-primary);\r\n  --dsw-font-mono: var(--eink-font-mono);\r\n  --dsh-font-mono: var(--eink-font-mono);\r\n  --dsh-color-surface: var(--dsw-alias-bg-layer-3);\r\n  --dsh-color-border: var(--dsw-alias-border-l3);\r\n  --dsh-color-accent: var(--dsw-alias-brand-primary);\r\n  --dsh-color-text: var(--dsw-alias-label-primary);\r\n  --dsh-color-text-secondary: var(--dsw-alias-label-secondary);\r\n  --dsh-state-ongoing: var(--dsw-alias-state-warn-primary);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro],\r\nhtml[data-dsh-theme-eink-retro] body,\r\nhtml[data-dsh-theme-eink-retro] #root {\r\n  background-color: var(--dsw-alias-bg-base);\r\n  background-image: none;\r\n}\r\n\r\n/* `accent-color` is inherited, so one declaration covers every native\r\n * checkbox, radio, range and progress element in the app. Without it those\r\n * controls keep the OS accent and are the only saturated color on screen. */\r\nhtml[data-dsh-theme-eink-retro] body {\r\n  color: var(--dsw-alias-label-primary);\r\n  font-family: var(--eink-font-sans);\r\n  font-synthesis: none;\r\n  text-rendering: optimizeLegibility;\r\n  accent-color: var(--eink-ink);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] ::placeholder {\r\n  color: var(--eink-ink-3);\r\n  opacity: 1;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  html[data-dsh-theme-eink-retro] *,\r\n  html[data-dsh-theme-eink-retro] *::before,\r\n  html[data-dsh-theme-eink-retro] *::after {\r\n    scroll-behavior: auto !important;\r\n    transition-duration: 0.01ms !important;\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n  }\r\n}\r\n\r\n/* Shell regions. `data-dsh-surface` marks each region with a zero-size anchor\r\n * rather than the column that paints it, so the column is addressed as the\r\n * anchor\'s parent. That keeps the hook public and hash-free while still\r\n * landing on the element that actually has a background. */\r\nhtml[data-dsh-theme-eink-retro] :where(\r\n  :has(> [data-dsh-surface="sidebar"]),\r\n  :has(> [data-dsh-surface="conversation"]),\r\n  :has(> [data-dsh-surface="details"])\r\n) {\r\n  background-color: var(--dsw-alias-bg-base);\r\n  background-image: none;\r\n  box-shadow: none;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :has(> [data-dsh-surface="sidebar"]) {\r\n  background-color: var(--dsw-specific-sidebar-fill);\r\n  border-right: 1px solid var(--eink-rule);\r\n}\r\n\r\n/* Only a details pane that is actually on screen earns a divider, otherwise\r\n * the rule lands on the right edge of the window. */\r\nhtml[data-dsh-theme-eink-retro]\r\n  :not([data-details-collapsed="true"])\r\n  > :has(> [data-dsh-surface="conversation"]) {\r\n  border-right: 1px solid var(--eink-rule);\r\n}\r\n\r\n/* The two side panes are one pair. Sourcing both from the sidebar fill keeps\r\n * that relationship identical in light and dark; `--eink-paper-raised` reads\r\n * as a lighter, detached slab in dark mode only. */\r\nhtml[data-dsh-theme-eink-retro] :has(> [data-dsh-surface="details"]) {\r\n  background-color: var(--dsw-specific-sidebar-fill);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where(button, input, textarea, select, [role="button"]) {\r\n  border-radius: var(--eink-radius-control) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where(\r\n  article,\r\n  fieldset,\r\n  [role="dialog"],\r\n  [role="menu"],\r\n  [role="listbox"],\r\n  [role="tooltip"],\r\n  [role="treeitem"],\r\n  [class*="card" i],\r\n  [class*="panel" i],\r\n  [class*="modal" i],\r\n  [class*="column" i]\r\n) {\r\n  border-radius: var(--eink-radius-surface) !important;\r\n}\r\n\r\n/* Some DSH and marketplace controls draw their visible surface on a wrapper\r\n * instead of the native input/card. Keep those shells in the same rectilinear\r\n * system without flattening charts or user content. */\r\nhtml[data-dsh-theme-eink-retro] span[class*="tabSearch"],\r\nhtml[data-dsh-theme-eink-retro] div[class$="_bar"]:has(> [class$="_label"]),\r\nhtml[data-dsh-theme-eink-retro] div:has(> [class$="_sep"][aria-hidden="true"]) {\r\n  border-radius: var(--eink-radius-surface) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where(button, [role="button"], [role="tab"]) {\r\n  box-shadow: none;\r\n}\r\n\r\n/* Links are ink, not chrome blue. Chrome-level links \u2014 nav items, icon\r\n * actions, anything already drawn as a control \u2014 take the color only. Links\r\n * inside prose additionally carry a rule, so they stay identifiable in a\r\n * palette that has no hue left to spend on them.\r\n *\r\n * The whole selector sits inside `:where()` so it keeps the theme\'s baseline\r\n * specificity: a link a component deliberately colors through two class names\r\n * still wins, and a selected nav item keeps its inverted label. */\r\nhtml[data-dsh-theme-eink-retro] :where(\r\n  a:not([role="button"], [class*="button" i], [aria-current], [aria-selected="true"])\r\n) {\r\n  color: var(--eink-ink);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro]\r\n  :where(p, li, dd, td, th, blockquote, h1, h2, h3, h4, h5, h6)\r\n  a:not([role="button"], :has(> img, > svg)) {\r\n  text-decoration: underline;\r\n  text-decoration-thickness: 1px;\r\n  text-underline-offset: 2px;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro]\r\n  :where(p, li, dd, td, th, blockquote, h1, h2, h3, h4, h5, h6)\r\n  a:not([role="button"], :has(> img, > svg)):hover {\r\n  text-decoration-thickness: 2px;\r\n}\r\n\r\n/* Disabled controls lose ink weight, not shape: the frame stays put, the\r\n * label drops to tertiary ink, and the press offset never fires. */\r\nhtml[data-dsh-theme-eink-retro] :where(button, input, textarea, select):disabled,\r\nhtml[data-dsh-theme-eink-retro] :where([aria-disabled="true"]) {\r\n  color: var(--eink-ink-3);\r\n  border-color: var(--eink-rule);\r\n  box-shadow: none;\r\n  cursor: not-allowed;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where(\r\n  [role="radio"][aria-checked="true"],\r\n  button[aria-pressed="true"],\r\n  [data-state="checked"],\r\n  [data-state="active"],\r\n  [data-active="true"]\r\n) {\r\n  color: var(--eink-selection-fg) !important;\r\n  background-color: var(--eink-selection-bg) !important;\r\n  border-color: var(--eink-selection-bg) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where(\r\n  [role="radio"][aria-checked="true"],\r\n  button[aria-pressed="true"],\r\n  [data-state="checked"],\r\n  [data-state="active"],\r\n  [data-active="true"]\r\n) * {\r\n  color: inherit !important;\r\n}\r\n\r\n/* Switches own their state on the track, not on the button shell. Keeping the\r\n * shell transparent prevents a second black rectangle from showing around an\r\n * enabled track. */\r\nhtml[data-dsh-theme-eink-retro] [role="switch"] {\r\n  background-color: transparent !important;\r\n  border-color: transparent !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] [role="switch"] > :last-child {\r\n  box-sizing: border-box;\r\n  width: 30px;\r\n  height: 16px;\r\n  background-color: var(--eink-paper-bright) !important;\r\n  border: 1px solid var(--eink-ink) !important;\r\n  border-radius: var(--eink-radius-tight) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] [role="switch"] > :last-child > * {\r\n  box-sizing: border-box;\r\n  width: 10px;\r\n  height: 10px;\r\n  background-color: var(--eink-ink) !important;\r\n  border: 0 !important;\r\n  border-radius: var(--eink-radius-tight) !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] [role="switch"]:not([aria-checked="true"]) > :last-child > * {\r\n  background-color: var(--eink-ink) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] [role="switch"][aria-checked="true"] > :last-child {\r\n  background-color: var(--eink-selection-bg) !important;\r\n  border-color: var(--eink-selection-bg) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] [role="switch"][aria-checked="true"] > :last-child > * {\r\n  background-color: var(--eink-selection-fg) !important;\r\n}\r\n\r\n/* Semantic destructive actions keep their warning color, but use the same\r\n * flat outline treatment as the rest of the control system. */\r\nhtml[data-dsh-theme-eink-retro] button[class*="deleteButton" i] {\r\n  background-color: transparent !important;\r\n  border: 1px solid currentColor !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] button[class*="deleteButton" i]:hover {\r\n  background-color: color-mix(in srgb, currentColor 8%, transparent) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where([class*="badge" i], [class*="tag" i]):not(.lc-root *) {\r\n  border-radius: var(--eink-radius-tight) !important;\r\n  filter: none;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro="immersive"] :where([class*="badge" i], [class*="tag" i]):not(.lc-root *) {\r\n  filter: grayscale(1);\r\n}\r\n\r\n/* Capability metadata is tertiary information, not an active control. Use a\r\n * quiet outline instead of a low-contrast filled status color. */\r\nhtml[data-dsh-theme-eink-retro] [class*="badgeInvokable"] {\r\n  color: var(--eink-ink-2) !important;\r\n  background-color: transparent !important;\r\n  border-color: var(--eink-rule) !important;\r\n  padding: 2px 6px !important;\r\n  font-size: var(--eink-text-caption) !important;\r\n  font-weight: var(--eink-weight-medium) !important;\r\n  line-height: 1.3 !important;\r\n  filter: none !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where(button:not(:disabled), [role="button"]:not([aria-disabled="true"]), [role="tab"]):active {\r\n  transform: translate(1px, 1px);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where(input, textarea, select, [contenteditable="true"]) {\r\n  background-color: var(--dsw-specific-input-major);\r\n  border-color: var(--eink-rule-strong);\r\n  box-shadow: var(--eink-well);\r\n  caret-color: var(--eink-ink);\r\n}\r\n\r\n/* The composer keeps its visible text in a backdrop layer underneath a\r\n * transparent textarea. Let the outer composer card own the surface and\r\n * focus treatment; otherwise the backdrop is hidden and a second inset rule\r\n * remains visible after the textarea loses focus. */\r\nhtml[data-dsh-theme-eink-retro] textarea[data-dsh-part="composer-input"] {\r\n  background-color: transparent !important;\r\n  border: 0 !important;\r\n  outline: 0 !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n/* The context meter is only 14px wide, so DSH\'s tertiary label and translucent\r\n * border tokens collapse into one mid-gray ring after the e-ink token map. Use\r\n * an explicit paper rule for the capacity track and primary ink for the used\r\n * arc. The structural hook is language-independent and avoids hashed classes. */\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-composer-card="true"]\r\n  button[aria-haspopup="dialog"]:has(> svg > circle[stroke-dasharray])\r\n  circle:not([stroke-dasharray]) {\r\n  stroke: var(--eink-rule) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-composer-card="true"]\r\n  button[aria-haspopup="dialog"]:has(> svg > circle[stroke-dasharray])\r\n  circle[stroke-dasharray] {\r\n  stroke: var(--eink-ink) !important;\r\n}\r\n\r\n/* DSH places a blue-gray fade on the composer seat itself. Retint that native\r\n * layer instead of removing the useful separation between the message stream\r\n * and composer. */\r\nhtml[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"] > :has(\r\n  [data-composer-card="true"]\r\n)::before {\r\n  background-image: linear-gradient(\r\n    transparent 0,\r\n    color-mix(in srgb, var(--dsw-alias-bg-base) 94%, transparent) 36px\r\n  ) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] [data-composer-card="true"]:has(\r\n  textarea[data-dsh-part="composer-input"]:focus-visible\r\n) {\r\n  border-color: var(--eink-ink) !important;\r\n  box-shadow: var(--eink-shadow-1) !important;\r\n}\r\n\r\n/* One focus frame for everything that can be reached by keyboard. Ink is by\r\n * definition the highest-contrast value against paper, and `outline-offset`\r\n * leaves the gap showing the ground the control sits on, so the frame stays\r\n * visible on any surface. An added paper-colored halo would only be right on\r\n * the one surface it was sampled from, so there is none. */\r\nhtml[data-dsh-theme-eink-retro] :where(\r\n  a,\r\n  button,\r\n  summary,\r\n  [role="button"],\r\n  [role="link"],\r\n  [role="tab"],\r\n  [role="menuitem"],\r\n  [role="menuitemcheckbox"],\r\n  [role="menuitemradio"],\r\n  [role="option"],\r\n  [role="treeitem"],\r\n  [role="switch"],\r\n  [role="checkbox"],\r\n  [role="radio"],\r\n  [tabindex]:not([tabindex="-1"])\r\n):focus-visible {\r\n  outline: 1px solid var(--eink-ink);\r\n  outline-offset: 2px;\r\n}\r\n\r\n/* A few DSH affordances are only identifiable by their accessible name, which\r\n * is localized. Those rules match the name by substring across the locales we\r\n * know and always pair it with a structural guard, so a similarly named\r\n * control elsewhere in the app cannot pick the rule up. Adding a locale means\r\n * extending the lists here \u2014 never dropping the structural half. */\r\n\r\n/* The workspace header clips an outward focus outline on its final icon\r\n * action, leaving only a detached vertical stroke. Keep the keyboard focus\r\n * frame inside that compact button instead. */\r\nhtml[data-dsh-theme-eink-retro] button[aria-label*="\u6DFB\u52A0\u5DE5\u4F5C\u533A"]:focus-visible,\r\nhtml[data-dsh-theme-eink-retro] button[aria-label*="Add workspace" i]:focus-visible {\r\n  outline: 0 !important;\r\n  box-shadow: inset 0 0 0 1px var(--eink-ink) !important;\r\n}\r\n\r\n/* The workspace search draws its visible shape on the wrapper, not the icon\r\n * button or input. Give that wrapper the same compact geometry as adjacent\r\n * actions, and let it own the expanded focus border. */\r\n/* The collapsed shell holds nothing but the icon button \u2014 the input is only\r\n * mounted once it expands \u2014 so this rule cannot ask for one. Without it the\r\n * shell keeps its 50% radius and reads as a circle among square actions. */\r\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="\u641C\u7D22\u4F1A\u8BDD"]),\r\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="Search" i]) {\r\n  border-radius: var(--eink-radius-control) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="\u641C\u7D22\u4F1A\u8BDD"][aria-expanded="true"]):has(> input),\r\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="Search" i][aria-expanded="true"]):has(> input) {\r\n  background-color: var(--eink-paper-bright) !important;\r\n  border: 1px solid var(--eink-rule-strong) !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="\u641C\u7D22\u4F1A\u8BDD"]) > input,\r\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="Search" i]) > input {\r\n  background-color: transparent !important;\r\n  border: 0 !important;\r\n  border-radius: 0 !important;\r\n  outline: 0 !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="\u641C\u7D22\u4F1A\u8BDD"]):has(> input:focus-visible),\r\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="Search" i]):has(> input:focus-visible) {\r\n  border-color: var(--eink-ink) !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n/* Native form controls already own a visible border. Strengthen that one\r\n * frame and add an inner baseline instead of drawing a second offset outline.\r\n * The inset well is kept in the stack so the depth of the field does not\r\n * change the moment it takes focus. */\r\nhtml[data-dsh-theme-eink-retro] :where(input, textarea, select, [contenteditable="true"]):focus-visible {\r\n  outline: 0 !important;\r\n  border-color: var(--eink-ink) !important;\r\n  box-shadow: var(--eink-well), inset 0 -2px 0 var(--eink-ink) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] textarea[data-dsh-part="composer-input"]:focus-visible {\r\n  box-shadow: none !important;\r\n}\r\n\r\n/* The trajectory search already has a semantic wrapper with its search icon.\r\n * Make that wrapper the only surface and the only focus owner. */\r\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) {\r\n  gap: 4px;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) button {\r\n  min-height: 24px;\r\n  padding: 2px 8px;\r\n  color: var(--eink-ink-2);\r\n  background-color: var(--eink-paper-bright);\r\n  border: 1px solid var(--eink-rule-strong);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) :has(\r\n  > input[type="search"]\r\n) {\r\n  min-height: 24px;\r\n  background-color: var(--eink-paper-bright) !important;\r\n  border: 1px solid var(--eink-rule-strong) !important;\r\n  border-radius: var(--eink-radius-control) !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) input[type="search"] {\r\n  background-color: transparent !important;\r\n  border: 0 !important;\r\n  outline: 0 !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) :has(\r\n  > input[type="search"]:focus-visible\r\n) {\r\n  border-color: var(--eink-ink) !important;\r\n  box-shadow: inset 0 -2px 0 var(--eink-ink) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] select option {\r\n  color: var(--eink-ink);\r\n  background-color: var(--eink-paper-bright);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] select option:checked {\r\n  color: var(--eink-selection-fg);\r\n  background-color: var(--eink-selection-bg);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where([role="dialog"], [data-dsh-part="dialog"]) {\r\n  background-color: var(--dsw-alias-bg-layer-1);\r\n  border: 1px solid var(--eink-rule-strong);\r\n  box-shadow: var(--eink-shadow-2);\r\n  backdrop-filter: none;\r\n  border-radius: var(--eink-radius-surface) !important;\r\n}\r\n\r\n/* Modal masks should separate layers without simulating frosted glass. */\r\nhtml[data-dsh-theme-eink-retro] [role="presentation"]:has(> [role="dialog"]) > :first-child {\r\n  backdrop-filter: none !important;\r\n  -webkit-backdrop-filter: none !important;\r\n  background-color: color-mix(in srgb, var(--eink-ink) 18%, transparent) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where([role="menu"], [role="listbox"]) {\r\n  background-color: var(--dsw-specific-menu);\r\n  border: 1px solid var(--eink-rule-strong);\r\n  box-shadow: var(--eink-shadow-1);\r\n}\r\n\r\n/* Plugin settings are contributed by independent packages, so their card\r\n * implementations do not always consume DSH\'s shared surface tokens. Normalize\r\n * the semantic slot instead of coupling the theme to generated class names. */\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-dsh-surface="settings"]\r\n  [data-slot="settings.plugin.item"]\r\n  > :first-child {\r\n  color: var(--eink-ink) !important;\r\n  background-color: var(--eink-paper-inset) !important;\r\n  background-image: none !important;\r\n  border: 1px solid color-mix(in srgb, var(--eink-ink) 35%, transparent) !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-dsh-surface="settings"]\r\n  [data-slot="settings.plugin.item"]\r\n  details\r\n  > summary\r\n  > :first-child\r\n  > :last-child {\r\n  color: var(--eink-ink-2) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-dsh-surface="settings"]\r\n  [data-slot="settings.plugin.item"]\r\n  input[type="radio"] {\r\n  accent-color: var(--eink-ink) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-dsh-surface="settings"]\r\n  [data-slot="settings.plugin.item"]\r\n  label:has(> input[type="radio"]:checked) {\r\n  border-color: var(--eink-ink) !important;\r\n  box-shadow: inset 0 -2px 0 var(--eink-ink) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-dsh-surface="settings"]\r\n  [data-slot="settings.plugin.item"]\r\n  button[type="submit"] {\r\n  color: var(--eink-selection-fg) !important;\r\n  background-color: var(--eink-selection-bg) !important;\r\n  border-color: var(--eink-selection-bg) !important;\r\n}\r\n\r\n/* An inverted tooltip already separates itself from paper. Border on the fill\r\n * color keeps the box metrics without drawing a gray ring that is invisible\r\n * on black in light mode and doubled in dark mode. */\r\nhtml[data-dsh-theme-eink-retro] [role="tooltip"] {\r\n  color: var(--eink-selection-fg) !important;\r\n  background-color: var(--eink-selection-bg) !important;\r\n  border: 1px solid var(--eink-selection-bg);\r\n  box-shadow: var(--eink-shadow-1);\r\n}\r\n\r\n/* User messages are a quiet paper card, not a chat-app pill. The surrounding\r\n * message row carries stable semantic attributes even though the generated\r\n * bubble class changes between DSH builds. */\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-dsh-part="message-row"][data-chat-flow-kind="user"]\r\n  [data-time-hover-root="true"]\r\n  > :first-child\r\n  > :last-child {\r\n  padding: 8px 12px !important;\r\n  background-color: var(--eink-paper-bright) !important;\r\n  border: 1px solid var(--eink-rule) !important;\r\n  border-radius: var(--eink-radius-surface) !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n/* Turn-tail editing is a compact form, not a second composer. Give the\r\n * textarea one frame and keep both actions on the same control scale. The\r\n * slot only carries a textarea while a message is being edited, so the\r\n * structure identifies the state without reading its placeholder. */\r\nhtml[data-dsh-theme-eink-retro] [data-slot="conversation.chat.turnTail"] textarea {\r\n  border: 1px solid var(--eink-rule-strong) !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-slot="conversation.chat.turnTail"]\r\n  :has(> textarea)\r\n  > :nth-child(2)\r\n  > button {\r\n  box-sizing: border-box;\r\n  min-height: 24px;\r\n  padding: 0 10px;\r\n  font-size: var(--eink-text-sm);\r\n  font-weight: var(--eink-weight-medium);\r\n  line-height: 22px;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-slot="conversation.chat.turnTail"]\r\n  :has(> textarea)\r\n  > :nth-child(2)\r\n  > button:first-child {\r\n  background-color: var(--eink-paper-bright) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-slot="conversation.chat.turnTail"]\r\n  :has(> textarea)\r\n  > :nth-child(2)\r\n  > button:last-child {\r\n  border: 1px solid var(--eink-selection-bg) !important;\r\n}\r\n\r\n/* Approval requests are important without needing a warm warning wash. The\r\n * labelled body gives us a stable hook for its surrounding native card. */\r\nhtml[data-dsh-theme-eink-retro] :has(> [aria-label*="\u5BA1\u6279\u8BE6\u60C5"]),\r\nhtml[data-dsh-theme-eink-retro] :has(> [aria-label*="Approval details" i]) {\r\n  background-color: var(--eink-paper-bright) !important;\r\n  border-color: var(--eink-rule-strong) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :has(> [aria-label*="\u5BA1\u6279\u8BE6\u60C5"]) > :first-child,\r\nhtml[data-dsh-theme-eink-retro] :has(> [aria-label*="Approval details" i]) > :first-child {\r\n  color: var(--eink-ink) !important;\r\n  background-color: var(--eink-paper-raised) !important;\r\n  border-bottom: 1px solid var(--eink-rule) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :has(> [aria-label*="\u5BA1\u6279\u8BE6\u60C5"]) > :first-child > :first-child,\r\nhtml[data-dsh-theme-eink-retro] :has(> [aria-label*="Approval details" i]) > :first-child > :first-child {\r\n  color: var(--eink-ink) !important;\r\n  background-color: var(--eink-ink) !important;\r\n}\r\n\r\n/* DSH renders the active turn label with a continuous blue shimmer. Replace\r\n * it with a two-frame local refresh: a short contrast drop, then settled ink.\r\n * The live clock remains stable and continues to communicate progress. */\r\nhtml[data-dsh-theme-eink-retro] [data-chat-flow] > [role="status"] {\r\n  color: var(--eink-ink-2);\r\n  -webkit-text-fill-color: currentColor !important;\r\n  background-image: none !important;\r\n  background-clip: border-box !important;\r\n  animation: eink-retro-turn-status-refresh 2.4s steps(1, end) infinite !important;\r\n}\r\n\r\n@keyframes eink-retro-turn-status-refresh {\r\n  0%,\r\n  72%,\r\n  100% {\r\n    color: var(--eink-ink-2);\r\n  }\r\n\r\n  73%,\r\n  84% {\r\n    color: var(--eink-rule-strong);\r\n  }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  html[data-dsh-theme-eink-retro] [data-chat-flow] > [role="status"] {\r\n    color: var(--eink-ink-2) !important;\r\n    animation: none !important;\r\n  }\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where(\r\n  [role="treeitem"][aria-selected="true"],\r\n  [aria-current="true"],\r\n  [aria-current="page"]\r\n) {\r\n  color: var(--eink-selection-fg) !important;\r\n  background-color: var(--eink-selection-bg) !important;\r\n  background-image: none !important;\r\n  border-color: var(--eink-selection-bg) !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where(\r\n  [role="treeitem"][aria-selected="true"],\r\n  [aria-current="true"],\r\n  [aria-current="page"]\r\n) * {\r\n  color: inherit !important;\r\n}\r\n\r\n/* Tabs are secondary navigation. A baseline and stronger label keep their\r\n * original footprint; inverse fills are reserved for primary selections. */\r\nhtml[data-dsh-theme-eink-retro] [role="tab"][aria-selected="true"] {\r\n  color: var(--eink-ink) !important;\r\n  background-color: transparent !important;\r\n  background-image: none !important;\r\n  border-color: transparent !important;\r\n  box-shadow: inset 0 -2px 0 var(--eink-ink) !important;\r\n  font-weight: var(--eink-weight-strong) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] [role="tab"][aria-selected="true"] * {\r\n  color: inherit !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] ::selection {\r\n  color: var(--eink-selection-fg);\r\n  background: var(--eink-selection-bg);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] hr {\r\n  height: 1px;\r\n  background: var(--eink-rule);\r\n  border: 0;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where(code, kbd, samp, pre) {\r\n  font-family: var(--eink-font-mono);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where(pre, [class*="code-block" i]) {\r\n  background-color: var(--dsw-alias-markdown-code-block);\r\n  border: 1px solid var(--eink-rule);\r\n  border-radius: var(--eink-radius-surface);\r\n  box-shadow: inset 2px 0 0 var(--eink-rule-strong);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] code:not(pre code) {\r\n  background-color: var(--dsw-alias-markdown-inline-code);\r\n  border: 1px solid var(--eink-rule);\r\n  border-radius: var(--eink-radius-control);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] blockquote {\r\n  border-left: 2px solid var(--eink-rule-strong);\r\n  background: transparent;\r\n  padding: 2px 0 2px 14px;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] blockquote > :first-child {\r\n  margin-top: 0 !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] blockquote > :last-child {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] table {\r\n  border-collapse: collapse;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] :where(th, td) {\r\n  border: 1px solid var(--eink-rule);\r\n  padding: 8px 12px !important;\r\n  vertical-align: top;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] th {\r\n  background: var(--eink-paper-raised);\r\n  font-weight: var(--eink-weight-strong);\r\n}\r\n\r\n/* DSH mounts composer menus inside the conversation scrollport. Their\r\n * absolutely positioned listboxes must not contribute their popup height to\r\n * the message stream, otherwise opening one changes the stream scrollHeight\r\n * and makes its scrollbar/thumb jump. Keep gutter reservation local to the\r\n * popup viewport: reserving it on the outer scrollport creates a second empty\r\n * track beside views such as the trajectory table. */\r\nhtml[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"] :has(> [role="listbox"]) {\r\n  contain: layout;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] [role="listbox"] > * {\r\n  scrollbar-gutter: stable;\r\n}\r\n\r\n/* The trajectory view already owns its vertical range in an inner table\r\n * scroller. Keep the otherwise empty outer scrollport from acquiring a second\r\n * scrollbar while a composer popup mounts or finishes unmounting. */\r\nhtml[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"]:has(\r\n  section[aria-label*="Trajectory" i]\r\n),\r\nhtml[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"]:has(\r\n  section[aria-label*="\u8F68\u8FF9"]\r\n) {\r\n  overflow-y: hidden;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] * {\r\n  scrollbar-color: var(--dsw-alias-scrollbar-bg-l2) var(--dsw-alias-scrollbar-bg-l1);\r\n  scrollbar-width: thin;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar {\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-track,\r\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-corner {\r\n  background: var(--dsw-alias-scrollbar-bg-l1);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-thumb {\r\n  background: var(--dsw-alias-scrollbar-bg-l2);\r\n  border: 2px solid var(--dsw-alias-scrollbar-bg-l1);\r\n  border-radius: 0;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-thumb:hover {\r\n  background: var(--dsw-alias-scrollbar-hover-l2);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-thumb:active {\r\n  background: var(--dsw-alias-scrollbar-hover-l1);\r\n}\r\n\r\n/* Optional compatibility adapter: dsh-context v0.31.x. The data colors are\r\n * preserved in balanced mode and mapped to luminance only in immersive mode. */\r\nhtml[data-dsh-theme-eink-retro="immersive"] .lc-root :is(\r\n  .lc-stacked-seg,\r\n  .lc-bar-stack > div,\r\n  .lc-bar-up > div,\r\n  .lc-bar-down > div,\r\n  .lc-turn,\r\n  .lc-chip i,\r\n  .lc-detail-row i,\r\n  .lc-node i,\r\n  .lc-br-cat-row i,\r\n  .lc-bar-fill,\r\n  .lc-event-icon,\r\n  .lc-kind\r\n) {\r\n  filter: grayscale(1) contrast(1.12);\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] .lc-root :is(.lc-card, .lc-stat, .lc-br-cat, .lc-ts-card) {\r\n  border-radius: var(--eink-radius-surface);\r\n  box-shadow: none;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] .lc-root .lc-gran {\r\n  border-radius: var(--eink-radius-control) !important;\r\n}\r\n\r\nhtml[data-dsh-theme-eink-retro] .lc-root :is(.lc-gran-on, .lc-rich-seg-on) {\r\n  color: var(--eink-selection-fg);\r\n  background: var(--eink-selection-bg);\r\n}\r\n\r\n/* Skill Center is an app surface even though its panel is not exposed as a\r\n * dialog. Replace the soft 60px float shadow with the shared hard elevation. */\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-dsh-plugin="skill-explorer"]\r\n  [data-dsh-part="card"] {\r\n  background-color: var(--eink-paper-bright) !important;\r\n  border: 1px solid var(--eink-rule-strong) !important;\r\n  box-shadow: var(--eink-shadow-2) !important;\r\n}\r\n\r\n/* The empty composer sits on a decorative glow with a hard-coded blue fill.\r\n * It is marked aria-hidden, so it carries no meaning to retint around: the\r\n * fill drops to a neutral wash and the composition DSH intended survives.\r\n * Kept out of the immersive block on purpose \u2014 a saturated glow is off\r\n * palette in balanced mode too. */\r\nhtml[data-dsh-theme-eink-retro]\r\n  [data-slot="conversation.composer"]\r\n  svg[aria-hidden="true"]\r\n  :is(ellipse, circle)[fill]:not([fill="none"]):not([fill="currentColor"]) {\r\n  fill: var(--eink-paper-raised);\r\n}\r\n\r\n/* Optional decorative adapters. User-authored images, attachments, previews,\r\n * canvas content and media are intentionally never filtered. The pet is\r\n * addressed through its wrapper so its own chrome \u2014 the close button and its\r\n * tinted border \u2014 is covered along with the sprite. */\r\nhtml[data-dsh-theme-eink-retro="immersive"] img[src*="/api/skin-center/"],\r\nhtml[data-dsh-theme-eink-retro="immersive"] :has(> [style*="spritesheet"]) {\r\n  filter: grayscale(1) contrast(1.08);\r\n}\r\n\r\n/* Windows High Contrast replaces the palette wholesale, so the decorative\r\n * layer only gets in its way: hard shadows and grayscale filters are dropped\r\n * and the focus frame is redrawn in a system color. */\r\n@media (forced-colors: active) {\r\n  html[data-dsh-theme-eink-retro] *,\r\n  html[data-dsh-theme-eink-retro] *::before,\r\n  html[data-dsh-theme-eink-retro] *::after {\r\n    box-shadow: none !important;\r\n    filter: none !important;\r\n  }\r\n\r\n  html[data-dsh-theme-eink-retro] :where(\r\n    input,\r\n    textarea,\r\n    select,\r\n    [contenteditable="true"]\r\n  ):focus-visible {\r\n    outline: 2px solid CanvasText !important;\r\n    outline-offset: 0 !important;\r\n  }\r\n}\r\n\r\n/* Paper is the premise, so print is the one place the theme needs no\r\n * translation. Backgrounds are dropped rather than trusted \u2014 browsers omit\r\n * them by default, and an inverted selection would otherwise print as black\r\n * on black \u2014 which is also why type collapses to a single ink. */\r\n@media print {\r\n  html[data-dsh-theme-eink-retro],\r\n  html[data-dsh-theme-eink-retro] body,\r\n  html[data-dsh-theme-eink-retro] #root {\r\n    background: #ffffff !important;\r\n  }\r\n\r\n  html[data-dsh-theme-eink-retro] *,\r\n  html[data-dsh-theme-eink-retro] *::before,\r\n  html[data-dsh-theme-eink-retro] *::after {\r\n    color: #000000 !important;\r\n    background: transparent !important;\r\n    box-shadow: none !important;\r\n    text-shadow: none !important;\r\n    filter: none !important;\r\n  }\r\n\r\n  html[data-dsh-theme-eink-retro] :where(:has(> [data-dsh-surface="sidebar"]), [role="tooltip"]),\r\n  html[data-dsh-theme-eink-retro] [data-composer-card="true"] {\r\n    display: none !important;\r\n  }\r\n\r\n  html[data-dsh-theme-eink-retro] :where(pre, blockquote, table, tr, img) {\r\n    break-inside: avoid;\r\n  }\r\n}\r\n';

// src/client/tokens.ts
var pair = (light, dark) => ({ light, dark });
var EINK_TOKEN_SENTINEL = {
  token: "--dsw-alias-bg-layer-3",
  light: "#d2d2d2",
  dark: "#121212"
};
var EINK_BALANCED_TOKENS = {
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
  "--dsw-alias-label-dimmed": pair("#6f6f6f", "#8a8a8a"),
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
var EINK_IMMERSIVE_OVERLAY = {
  "--dsw-alias-interactive-bg-hover-danger": pair("#1616161a", "#f4f4f426"),
  "--dsw-alias-state-error-primary": pair("#161616", "#f4f4f4"),
  "--dsw-alias-state-error-secondary": pair("#3a3a3a", "#dedede"),
  "--dsw-alias-state-success-primary": pair("#5f5f5f", "#a8a8a8"),
  "--dsw-alias-state-success-secondary": pair("#6a6a6a", "#9a9a9a"),
  "--dsw-alias-state-success-tertiary": pair("#e0e0e0", "#303030"),
  "--dsw-alias-state-warn-primary": pair("#4a4a4a", "#c8c8c8")
};
var EINK_IMMERSIVE_TOKENS = {
  ...EINK_BALANCED_TOKENS,
  ...EINK_IMMERSIVE_OVERLAY
};
function tokensForMode(mode) {
  return mode === "immersive" ? EINK_IMMERSIVE_TOKENS : EINK_BALANCED_TOKENS;
}

// src/client/index.ts
var STYLE_ID = "dsh-theme-eink-retro/style";
var TOKEN_SOURCE = "dsh-theme-eink-retro";
var ROOT_ATTRIBUTE = "data-dsh-theme-eink-retro";
var MODE_STORAGE_KEY = "dsh-theme-eink-retro:mode";
var ACTIVE_MODE_STORAGE_KEY = "dsh-theme-eink-retro:active-mode";
var MODE_EVENT = "dsh-theme-eink-retro:mode-change";
var THEME_STATE_KEY = "__dshEinkRetroThemeState__";
var BUILTIN_THEME_IDS = /* @__PURE__ */ new Set(["system", "light", "dark"]);
var inject = ["slots", "theme"];
function readMode() {
  const stored = window.localStorage.getItem(MODE_STORAGE_KEY);
  if (stored === "immersive" || stored === "off") return stored;
  return "balanced";
}
function readActiveMode() {
  const stored = window.localStorage.getItem(ACTIVE_MODE_STORAGE_KEY);
  if (stored === "immersive") return stored;
  const currentMode = readMode();
  return currentMode === "immersive" ? currentMode : "balanced";
}
function writeMode(mode) {
  window.localStorage.setItem(MODE_STORAGE_KEY, mode);
  if (mode !== "off") window.localStorage.setItem(ACTIVE_MODE_STORAGE_KEY, mode);
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
      description: "\u72B6\u6001\u8272\u3001\u6570\u636E\u6807\u8BB0\u3001\u88C5\u9970\u76AE\u80A4\u4E00\u5E76\u8F6C\u4E3A\u58A8\u8272\uFF0C\u754C\u9762\u5B8C\u5168\u9ED1\u767D\uFF0C\u72B6\u6001\u6539\u7528\u58A8\u8272\u6DF1\u6D45\u533A\u5206\u3002"
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
    const setEnabled = (enabled2) => {
      selectMode(enabled2 ? readActiveMode() : "off");
    };
    const enabled = view.mode !== "off";
    return import_react.default.createElement(
      "section",
      { className: "eink-retro-settings", "aria-labelledby": "eink-retro-settings-title" },
      import_react.default.createElement("h2", { id: "eink-retro-settings-title" }, "E\u2011Ink Retro"),
      import_react.default.createElement(
        "p",
        { className: "eink-retro-settings__intro" },
        "\u542F\u7528\u4E3B\u9898\u540E\u9009\u62E9\u8986\u76D6\u8303\u56F4\u3002\u5207\u6362\u5176\u4ED6\u7B2C\u4E09\u65B9\u76AE\u80A4\u65F6\u4F1A\u81EA\u52A8\u6682\u505C\uFF1B\u56DE\u5230 DSH \u9ED8\u8BA4\u6D45\u8272\u3001\u6DF1\u8272\u6216\u8DDF\u968F\u7CFB\u7EDF\u540E\u6062\u590D\u3002"
      ),
      import_react.default.createElement(
        "label",
        { className: "eink-retro-settings__enabled" },
        import_react.default.createElement(
          "span",
          { className: "eink-retro-settings__enabled-copy" },
          import_react.default.createElement("span", { className: "eink-retro-settings__enabled-title" }, "\u542F\u7528\u4E3B\u9898"),
          import_react.default.createElement(
            "span",
            { className: "eink-retro-settings__enabled-description" },
            "\u5173\u95ED\u540E\u79FB\u9664\u5168\u90E8 E\u2011Ink \u989C\u8272\u548C\u7EC4\u4EF6\u8986\u76D6\u3002"
          )
        ),
        import_react.default.createElement(
          "input",
          {
            type: "checkbox",
            className: "eink-retro-settings__enabled-input",
            checked: enabled,
            onChange: (event) => setEnabled(event.currentTarget.checked)
          }
        )
      ),
      enabled ? import_react.default.createElement(
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
      ) : null,
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
  let installedMode = null;
  let installingTokens = false;
  let releasingTokens = false;
  let syncTimer = null;
  const releaseTokens = () => {
    if (!disposeTokens) return;
    const dispose = disposeTokens;
    disposeTokens = null;
    installedMode = null;
    releasingTokens = true;
    try {
      dispose();
    } finally {
      releasingTokens = false;
    }
  };
  const installTokens = (mode) => {
    installingTokens = true;
    try {
      disposeTokens = ctx.theme.overrideTokens(TOKEN_SOURCE, tokensForMode(mode));
      installedMode = mode;
    } finally {
      installingTokens = false;
    }
  };
  const syncMode = (mode, snapshot) => {
    const next = modeState(mode, snapshot);
    if (next.effective) {
      const activeMode = mode;
      if (!installingTokens && (!disposeTokens || installedMode !== activeMode)) {
        releaseTokens();
        installTokens(activeMode);
      }
    } else {
      releaseTokens();
    }
    return applyMode(document.documentElement, mode, snapshot);
  };
  const tokensAreApplied = () => {
    const tokenStyle = window.getComputedStyle(document.body ?? document.documentElement);
    const value = tokenStyle.getPropertyValue(EINK_TOKEN_SENTINEL.token).trim().toLowerCase();
    return value === EINK_TOKEN_SENTINEL.light || value === EINK_TOKEN_SENTINEL.dark;
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
