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
var theme_default = '/* E\u2011Ink Retro has two layers:\n * 1. both modes share neutral semantic tokens, crisp geometry and black/white\n *    interaction states;\n * 2. immersive mode swaps the status hues for an ink ramp and maps the\n *    remaining decorative/data colors to gray.\n * User-authored media is never filtered.\n *\n * Everything the theme adds lives under `html[data-dsh-theme-eink-retro]`, with\n * one deliberate exception: the block below styles this plugin\'s own settings\n * section, which must also look right while the theme is switched off. It is\n * namespaced by the `eink-retro-settings` class instead. */\n\n.eink-retro-settings {\n  display: grid;\n  gap: 14px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.eink-retro-settings h2,\n.eink-retro-settings p {\n  margin: 0;\n}\n\n.eink-retro-settings__intro,\n.eink-retro-settings__enabled-description,\n.eink-retro-settings__option-description,\n.eink-retro-settings__status {\n  color: var(--dsw-alias-label-secondary);\n  font-size: var(--eink-text-body, 13px);\n  line-height: 1.55;\n}\n\n.eink-retro-settings__enabled {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  min-height: 48px;\n  cursor: pointer;\n}\n\n.eink-retro-settings__enabled-copy,\n.eink-retro-settings__enabled-title,\n.eink-retro-settings__enabled-description {\n  display: block;\n}\n\n.eink-retro-settings__enabled-copy {\n  min-width: 0;\n}\n\n.eink-retro-settings__enabled-title {\n  margin-bottom: 2px;\n  font-size: var(--eink-text-title, 14px);\n  font-weight: var(--eink-weight-strong, 650);\n}\n\n.eink-retro-settings__enabled-input,\nhtml[data-dsh-theme-eink-retro] .eink-retro-settings__enabled-input {\n  flex: 0 0 auto;\n  width: auto !important;\n  height: auto !important;\n  margin: 0;\n  padding: 0 !important;\n  appearance: auto !important;\n  accent-color: auto !important;\n  background: revert !important;\n  border: revert !important;\n  border-radius: revert !important;\n  box-shadow: none !important;\n  cursor: pointer;\n}\n\n/* The control keeps its native shape either way, but once the theme is on it\n * must not be the one blue object left on screen. */\nhtml[data-dsh-theme-eink-retro] .eink-retro-settings__enabled-input {\n  accent-color: var(--eink-ink) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] .eink-retro-settings__enabled-input:focus-visible {\n  outline: 1px solid var(--eink-ink) !important;\n  outline-offset: 2px;\n  border: revert !important;\n  box-shadow: none !important;\n}\n\n.eink-retro-settings__options {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.eink-retro-settings__option {\n  min-height: 112px;\n  padding: 14px;\n  color: var(--dsw-alias-label-primary);\n  text-align: left;\n  background: var(--dsw-alias-bg-layer-1);\n  border: 1px solid var(--dsw-alias-border-l3);\n  border-radius: var(--eink-radius-surface, 2px);\n  box-shadow: none;\n  cursor: pointer;\n}\n\n.eink-retro-settings__option:hover {\n  background: var(--dsw-alias-interactive-bg-hover-solid);\n}\n\n.eink-retro-settings__option[aria-checked="true"] {\n  color: var(--dsw-alias-brand-primary-invert);\n  background: var(--dsw-alias-brand-primary);\n  border-color: var(--dsw-alias-brand-primary);\n}\n\n.eink-retro-settings__option:focus-visible {\n  outline: 1px solid var(--dsw-alias-brand-primary);\n  outline-offset: 2px;\n}\n\n.eink-retro-settings__option-title,\n.eink-retro-settings__option-description {\n  display: block;\n}\n\n.eink-retro-settings__option-title {\n  margin-bottom: 8px;\n  font-size: var(--eink-text-title, 14px);\n  font-weight: var(--eink-weight-strong, 650);\n}\n\n.eink-retro-settings__option[aria-checked="true"] .eink-retro-settings__option-description {\n  color: inherit;\n  opacity: 0.78;\n}\n\n.eink-retro-settings__status {\n  padding: 10px 12px;\n  background: var(--dsw-alias-bg-layer-2);\n  border-left: 3px solid var(--dsw-alias-state-warn-primary);\n}\n\n@media (max-width: 760px) {\n  .eink-retro-settings__options {\n    grid-template-columns: 1fr;\n  }\n\n  .eink-retro-settings__option {\n    min-height: 0;\n  }\n}\n\n/* Design language tokens.\n *\n * Every color derives from the official DSH token layer this plugin installs,\n * so light/dark and balanced/immersive stay in sync from a single source and\n * the theme needs no dark-mode detector of its own. The literal fallbacks are\n * the light values, which is also what a missing token layer should degrade\n * to. The two rule colors are the only authored values: they are ink mixed\n * into paper, so they follow the palette in both directions.\n *\n * Line hierarchy \u2014 pick by role, not by how heavy it should look:\n *   --eink-rule         quiet separators and static surfaces: pane dividers,\n *                       tables, code blocks, message bubbles, badges, hr\n *   --eink-rule-strong  anything that can be operated or floats above the\n *                       page: inputs, framed buttons, menus, dialogs, cards\n *\n * Elevation hierarchy \u2014 hard offset, never blurred:\n *   --eink-shadow-1     attached popups: menus, listboxes, tooltips\n *   --eink-shadow-2     floating layers: dialogs, elevated cards\n *   (controls stay flat: a control is shaped by its fill or its frame;\n *   ghost icon actions carry neither and rely on their label)\n *\n * Interaction hierarchy \u2014 never spend elevation on state:\n *   hover                 changes fill or border color only\n *   focus                 adds one complete inner frame; elevation is retained\n *   selected session tab  keeps the host\'s bottom rule and adds label weight\n *\n * Weights are mid-steps on purpose. On a variable face they render as drawn;\n * on a 400/700 system face the browser resolves both to the nearest real\n * weight, which is why they are named by role rather than by number. */\nhtml[data-dsh-theme-eink-retro],\nhtml[data-dsh-theme-eink-retro] body {\n  --eink-paper: var(--dsw-alias-bg-base, #f4f4f4);\n  --eink-paper-bright: var(--dsw-alias-bg-layer-1, #ffffff);\n  --eink-paper-raised: var(--dsw-alias-bg-layer-2, #e8e8e8);\n  --eink-paper-inset: var(--dsw-alias-bg-layer-3, #d2d2d2);\n  --eink-ink: var(--dsw-alias-label-primary, #161616);\n  --eink-ink-2: var(--dsw-alias-label-secondary, #4a4a4a);\n  --eink-ink-3: var(--dsw-alias-label-tertiary, #6a6a6a);\n  --eink-selection-bg: var(--dsw-alias-brand-primary, #161616);\n  --eink-selection-fg: var(--dsw-alias-brand-primary-invert, #ffffff);\n  /* Mixed into the layer-1 surface rather than the base: DSH gives the window\n   * base a translucent fill in dark mode, and a rule that inherits that alpha\n   * lets whatever sits behind the window bleed through the line. */\n  --eink-rule: color-mix(in srgb, var(--eink-ink) 36%, var(--eink-paper-bright));\n  --eink-rule-strong: color-mix(in srgb, var(--eink-ink) 63%, var(--eink-paper-bright));\n  --eink-shadow-1: var(--dsw-shadow-lv1, 1px 1px 0 var(--eink-ink));\n  --eink-shadow-2: var(--dsw-shadow-lv2, 2px 2px 0 var(--eink-ink));\n  --eink-well: inset 1px 1px 0 color-mix(in srgb, var(--eink-ink) 14%, transparent);\n  --eink-focus-ring: inset 0 0 0 1px var(--eink-ink);\n  --eink-focus-ring-inverse: inset 0 0 0 1px var(--eink-selection-fg);\n  --eink-radius-tight: 1px;\n  --eink-radius-control: 2px;\n  --eink-radius-surface: 2px;\n  --eink-weight-medium: 550;\n  --eink-weight-strong: 650;\n  --eink-text-caption: 11px;\n  --eink-text-sm: 12px;\n  --eink-text-body: 13px;\n  --eink-text-title: 14px;\n  --eink-font-sans: "IBM Plex Sans SC", "Noto Sans SC", "Source Han Sans SC", -apple-system,\n    BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", "Microsoft YaHei UI", ui-sans-serif, sans-serif;\n  --eink-font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, "Sarasa Mono SC",\n    "Cascadia Mono", Consolas, monospace;\n}\n\n/* Compatibility bridge for DSH surfaces and plugins that still consume\n * pre-semantic or unsuffixed token names. Values resolve through the current\n * official token layer, so balanced/immersive and light/dark stay in sync. */\nhtml[data-dsh-theme-eink-retro],\nhtml[data-dsh-theme-eink-retro] body {\n  --dsw-alias-border: var(--dsw-alias-border-l3);\n  --dsw-alias-fill-primary: var(--dsw-alias-bg-layer-1);\n  --dsw-alias-text-primary: var(--dsw-alias-label-primary);\n  --dsw-alias-accent: var(--dsw-alias-brand-primary);\n  --dsw-alias-text-on-accent: var(--dsw-alias-brand-primary-invert);\n  --dsw-alias-button-info-label: var(--dsw-alias-brand-primary-invert);\n  --dsw-alias-danger: var(--dsw-alias-state-error-primary);\n  --dsw-alias-label-danger: var(--dsw-alias-state-error-primary);\n  --dsw-alias-label-error: var(--dsw-alias-state-error-primary);\n  --dsw-alias-label-on-danger: var(--dsw-alias-brand-primary-invert);\n  --dsw-alias-label-on-primary: var(--dsw-alias-brand-primary-invert);\n  --dsw-alias-label-quaternary: var(--dsw-alias-label-dimmed);\n  --dsw-alias-separator-primary: var(--dsw-alias-border-l2);\n  --dsw-alias-state-danger: var(--dsw-alias-state-error-primary);\n  --dsw-alias-state-warning-primary: var(--dsw-alias-state-warn-primary);\n  --dsw-alias-text-danger: var(--dsw-alias-state-error-primary);\n  --dsw-font-mono: var(--eink-font-mono);\n  --dsh-font-mono: var(--eink-font-mono);\n  --dsh-color-surface: var(--dsw-alias-bg-layer-3);\n  --dsh-color-border: var(--dsw-alias-border-l3);\n  --dsh-color-accent: var(--dsw-alias-brand-primary);\n  --dsh-color-text: var(--dsw-alias-label-primary);\n  --dsh-color-text-secondary: var(--dsw-alias-label-secondary);\n  --dsh-state-ongoing: var(--dsw-alias-state-warn-primary);\n}\n\nhtml[data-dsh-theme-eink-retro],\nhtml[data-dsh-theme-eink-retro] body,\nhtml[data-dsh-theme-eink-retro] #root {\n  background-color: var(--dsw-alias-bg-base);\n  background-image: none;\n}\n\n/* `accent-color` is inherited, so one declaration covers every native\n * checkbox, radio, range and progress element in the app. Without it those\n * controls keep the OS accent and are the only saturated color on screen. */\nhtml[data-dsh-theme-eink-retro] body {\n  color: var(--dsw-alias-label-primary);\n  font-family: var(--eink-font-sans);\n  font-synthesis: none;\n  text-rendering: optimizeLegibility;\n  accent-color: var(--eink-ink);\n}\n\nhtml[data-dsh-theme-eink-retro] ::placeholder {\n  color: var(--eink-ink-3);\n  opacity: 1;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html[data-dsh-theme-eink-retro] *,\n  html[data-dsh-theme-eink-retro] *::before,\n  html[data-dsh-theme-eink-retro] *::after {\n    scroll-behavior: auto !important;\n    transition-duration: 0.01ms !important;\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n  }\n}\n\n/* Shell regions. `data-dsh-surface` marks each region with a zero-size anchor\n * rather than the column that paints it, so the column is addressed as the\n * anchor\'s parent. That keeps the hook public and hash-free while still\n * landing on the element that actually has a background. */\nhtml[data-dsh-theme-eink-retro] :where(\n  :has(> [data-dsh-surface="sidebar"]),\n  :has(> [data-dsh-surface="conversation"]),\n  :has(> [data-dsh-surface="details"])\n) {\n  background-color: var(--dsw-alias-bg-base);\n  background-image: none;\n  box-shadow: none;\n}\n\nhtml[data-dsh-theme-eink-retro] :has(> [data-dsh-surface="sidebar"]) {\n  background-color: var(--dsw-specific-sidebar-fill);\n  border-right: 1px solid var(--eink-rule);\n}\n\n/* Only a details pane that is actually on screen earns a divider, otherwise\n * the rule lands on the right edge of the window. */\nhtml[data-dsh-theme-eink-retro]\n  :not([data-details-collapsed="true"])\n  > :has(> [data-dsh-surface="conversation"]) {\n  border-right: 1px solid var(--eink-rule);\n}\n\n/* The two side panes are one pair. Sourcing both from the sidebar fill keeps\n * that relationship identical in light and dark; `--eink-paper-raised` reads\n * as a lighter, detached slab in dark mode only. */\nhtml[data-dsh-theme-eink-retro] :has(> [data-dsh-surface="details"]) {\n  background-color: var(--dsw-specific-sidebar-fill);\n}\n\nhtml[data-dsh-theme-eink-retro] :where(button, input, textarea, select, [role="button"]) {\n  border-radius: var(--eink-radius-control) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(\n  article,\n  fieldset,\n  [role="alert"],\n  [role="dialog"],\n  [role="menu"],\n  [role="listbox"],\n  [role="tooltip"],\n  [role="treeitem"],\n  [class*="card" i],\n  [class*="panel" i],\n  [class*="modal" i],\n  [class*="column" i]\n) {\n  border-radius: var(--eink-radius-surface) !important;\n}\n\n/* Some DSH and marketplace controls draw their visible surface on a wrapper\n * instead of the native input/card. Keep those shells in the same rectilinear\n * system without flattening charts or user content. */\nhtml[data-dsh-theme-eink-retro] span[class*="tabSearch"],\nhtml[data-dsh-theme-eink-retro] div[class$="_bar"]:has(> [class$="_label"]),\nhtml[data-dsh-theme-eink-retro] div:has(> [class$="_sep"][aria-hidden="true"]) {\n  border-radius: var(--eink-radius-surface) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(button, [role="button"], [role="tab"]) {\n  box-shadow: none;\n}\n\n/* Links are ink, not chrome blue. Chrome-level links \u2014 nav items, icon\n * actions, anything already drawn as a control \u2014 take the color only. Links\n * inside prose additionally carry a rule, so they stay identifiable in a\n * palette that has no hue left to spend on them.\n *\n * The whole selector sits inside `:where()` so it keeps the theme\'s baseline\n * specificity: a link a component deliberately colors through two class names\n * still wins, and a selected nav item keeps its inverted label. */\nhtml[data-dsh-theme-eink-retro] :where(\n  a:not([role="button"], [class*="button" i], [aria-current], [aria-selected="true"])\n) {\n  color: var(--eink-ink);\n}\n\nhtml[data-dsh-theme-eink-retro]\n  :where(p, li, dd, td, th, blockquote, h1, h2, h3, h4, h5, h6)\n  a:not([role="button"], :has(> img, > svg)) {\n  text-decoration: underline;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 2px;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  :where(p, li, dd, td, th, blockquote, h1, h2, h3, h4, h5, h6)\n  a:not([role="button"], :has(> img, > svg)):hover {\n  text-decoration-thickness: 2px;\n}\n\n/* Disabled controls lose ink weight, not shape: the frame stays put, the\n * label drops to tertiary ink, and the press offset never fires. */\nhtml[data-dsh-theme-eink-retro] :where(button, input, textarea, select):disabled,\nhtml[data-dsh-theme-eink-retro] :where([aria-disabled="true"]) {\n  color: var(--eink-ink-3);\n  border-color: var(--eink-rule);\n  box-shadow: none;\n  cursor: not-allowed;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(\n  [role="radio"][aria-checked="true"],\n  [role="checkbox"][aria-checked="true"],\n  [role="menuitemcheckbox"][aria-checked="true"],\n  [role="menuitemradio"][aria-checked="true"],\n  button[aria-pressed="true"],\n  [data-state="checked"],\n  [data-state="active"],\n  [data-active="true"]\n) {\n  color: var(--eink-selection-fg) !important;\n  background-color: var(--eink-selection-bg) !important;\n  border-color: var(--eink-selection-bg) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(\n  [role="radio"][aria-checked="true"],\n  [role="checkbox"][aria-checked="true"],\n  [role="menuitemcheckbox"][aria-checked="true"],\n  [role="menuitemradio"][aria-checked="true"],\n  button[aria-pressed="true"],\n  [data-state="checked"],\n  [data-state="active"],\n  [data-active="true"]\n) * {\n  color: inherit !important;\n}\n\n/* Question choices are long reading rows, so a full inverse fill gives the\n * selected answer far more weight than the question itself. Keep the row on a\n * quiet raised paper and spend the inverse treatment only on its compact\n * number/check marker. `data-question-key` is the package\'s stable takeover\n * boundary; the role structure distinguishes its option list without relying\n * on generated CSS-module names or localized copy. */\nhtml[data-dsh-theme-eink-retro]\n  [data-question-key]\n  :where([role="radiogroup"], [role="group"])\n  > :where([role="radio"], [role="checkbox"])[aria-checked="true"] {\n  color: var(--eink-ink) !important;\n  background-color: var(--eink-paper-raised) !important;\n  border-color: var(--eink-rule-strong) !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-question-key]\n  :where([role="radiogroup"], [role="group"])\n  > :where([role="radio"], [role="checkbox"])[aria-checked="true"]\n  > :first-child {\n  color: var(--eink-selection-fg) !important;\n  background-color: var(--eink-selection-bg) !important;\n  border-radius: var(--eink-radius-control) !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-question-key]\n  :where([role="radiogroup"], [role="group"])\n  > :where([role="radio"], [role="checkbox"])[aria-checked="true"]\n  [class$="_description"] {\n  color: var(--eink-ink-2) !important;\n}\n\n/* DSH switches use either a button wrapping a track and thumb, or the button\n * itself as the track with one direct thumb. In both variants the track is an\n * empty paper frame when off and fills with ink when on, with the thumb\n * inverting against it.\n *\n * The offsets are authored against the track\'s padding box, which its own 1px\n * border already insets \u2014 so a 10px thumb centres in a 30 \xD7 16 track at 2px,\n * not 3px, and rests 3px from either end across a 14px travel. Every rule is\n * gated on that structure: a switch built some other way is left to DSH\n * rather than styled from a guess about its shape. */\nhtml[data-dsh-theme-eink-retro] [role="switch"]:has(> :last-child > :only-child) {\n  box-sizing: border-box;\n  background-color: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [role="switch"]:has(> :last-child > :only-child)\n  > :last-child {\n  box-sizing: border-box;\n  width: 30px !important;\n  height: 16px !important;\n  background-color: var(--eink-paper-bright) !important;\n  border: 1px solid var(--eink-ink) !important;\n  border-radius: var(--eink-radius-tight) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [role="switch"]:has(> :last-child > :only-child)\n  > :last-child\n  > :only-child {\n  box-sizing: border-box;\n  width: 10px !important;\n  height: 10px !important;\n  top: 2px !important;\n  left: 2px !important;\n  background-color: var(--eink-ink) !important;\n  border: 0 !important;\n  border-radius: var(--eink-radius-tight) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [role="switch"][aria-checked="true"]:has(> :last-child > :only-child)\n  > :last-child {\n  background-color: var(--eink-selection-bg) !important;\n  border-color: var(--eink-selection-bg) !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [role="switch"][aria-checked="true"]:has(> :last-child > :only-child)\n  > :last-child\n  > :only-child {\n  left: 16px !important;\n  background-color: var(--eink-selection-fg) !important;\n}\n\n/* Skill management uses the button itself as the track. The leaf-child guard\n * keeps this adapter disjoint from the wrapped-track switch above. */\nhtml[data-dsh-theme-eink-retro]\n  [role="switch"]:has(> :only-child):not(:has(> :only-child > *)) {\n  box-sizing: border-box;\n  width: 30px !important;\n  height: 16px !important;\n  padding: 0 !important;\n  background-color: var(--eink-paper-bright) !important;\n  background-image: none !important;\n  border: 1px solid var(--eink-ink) !important;\n  border-radius: var(--eink-radius-tight) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [role="switch"]:has(> :only-child):not(:has(> :only-child > *))\n  > :only-child {\n  box-sizing: border-box;\n  width: 10px !important;\n  height: 10px !important;\n  top: 2px !important;\n  left: 2px !important;\n  background-color: var(--eink-ink) !important;\n  border: 0 !important;\n  border-radius: var(--eink-radius-tight) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [role="switch"][aria-checked="true"]:has(> :only-child):not(:has(> :only-child > *)) {\n  background-color: var(--eink-selection-bg) !important;\n  border-color: var(--eink-selection-bg) !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [role="switch"][aria-checked="true"]:has(> :only-child):not(:has(> :only-child > *))\n  > :only-child {\n  left: 16px !important;\n  background-color: var(--eink-selection-fg) !important;\n}\n\n/* Semantic destructive actions keep their warning color, but use the same\n * flat outline treatment as the rest of the control system. */\nhtml[data-dsh-theme-eink-retro] button[class*="deleteButton" i] {\n  background-color: transparent !important;\n  border: 1px solid currentColor !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] button[class*="deleteButton" i]:hover {\n  background-color: color-mix(in srgb, currentColor 8%, transparent) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where([class*="badge" i], [class*="tag" i]):not(.lc-root *) {\n  border-radius: var(--eink-radius-tight) !important;\n  filter: none;\n}\n\nhtml[data-dsh-theme-eink-retro="immersive"] :where([class*="badge" i], [class*="tag" i]):not(.lc-root *) {\n  filter: grayscale(1);\n}\n\n/* Capability metadata is tertiary information, not an active control. Use a\n * quiet outline instead of a low-contrast filled status color. */\nhtml[data-dsh-theme-eink-retro] [class*="badgeInvokable"] {\n  color: var(--eink-ink-2) !important;\n  background-color: transparent !important;\n  border-color: var(--eink-rule) !important;\n  padding: 2px 6px !important;\n  font-size: var(--eink-text-caption) !important;\n  font-weight: var(--eink-weight-medium) !important;\n  line-height: 1.3 !important;\n  filter: none !important;\n}\n\n/* StateDot owns a component-local blue fallback, so the inherited compatibility\n * token above cannot retint its running matrix by itself. Restore the theme\'s\n * muted status ink at the primitive\'s stable semantic hook, then give the\n * pixel chase a slightly clearer head-to-tail contrast. The selected row still\n * inverts the matrix through its own currentColor rule. A completed state stays\n * still; only its quiet halo gains enough density to read at sidebar scale. */\nhtml[data-dsh-theme-eink-retro] svg[data-state="ongoing"][aria-hidden="true"][viewBox="0 0 10 10"] {\n  --dsh-state-ongoing: var(--eink-ink-2) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] svg[data-state="ongoing"][aria-hidden="true"][viewBox="0 0 10 10"] > rect {\n  animation-name: eink-retro-state-dot-chase !important;\n}\n\n@keyframes eink-retro-state-dot-chase {\n  0%,\n  12.4% {\n    opacity: 1;\n  }\n\n  12.5%,\n  24.9% {\n    opacity: 0.58;\n  }\n\n  25%,\n  37.4% {\n    opacity: 0.3;\n  }\n\n  37.5%,\n  100% {\n    opacity: 0.1;\n  }\n}\n\nhtml[data-dsh-theme-eink-retro] span[data-state="done"][aria-hidden="true"]::before {\n  opacity: 0.16;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(button:not(:disabled), [role="button"]:not([aria-disabled="true"]), [role="tab"]):active {\n  transform: translate(1px, 1px);\n}\n\nhtml[data-dsh-theme-eink-retro] :where(input, textarea, select, [contenteditable="true"]) {\n  background-color: var(--dsw-specific-input-major);\n  border-color: var(--eink-rule-strong);\n  box-shadow: var(--eink-well);\n  caret-color: var(--eink-ink);\n}\n\n/* In a question with predefined choices, the custom answer is one peer row.\n * Its generated component puts the textarea inside a mirrored auto-grow field,\n * so the row owns the complete frame and the native textarea stays transparent.\n * Requiring a role option sibling keeps the standalone, block answer field on\n * its native layout. */\nhtml[data-dsh-theme-eink-retro]\n  [data-question-key]\n  :where([role="radiogroup"], [role="group"]):has(> [role="radio"], > [role="checkbox"])\n  > :has(> :last-child > textarea) {\n  background-color: var(--eink-paper-bright) !important;\n  border: 1px solid var(--eink-rule-strong) !important;\n  border-radius: var(--eink-radius-control) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-question-key]\n  :where([role="radiogroup"], [role="group"]):has(> [role="radio"], > [role="checkbox"])\n  > :has(> :last-child > textarea):hover {\n  border-color: var(--eink-ink-2) !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-question-key]\n  :where([role="radiogroup"], [role="group"]):has(> [role="radio"], > [role="checkbox"])\n  > :has(> :last-child > textarea):focus-within {\n  border-color: var(--eink-ink) !important;\n  box-shadow: var(--eink-focus-ring) !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-question-key]\n  :where([role="radiogroup"], [role="group"]):has(> [role="radio"], > [role="checkbox"])\n  > :has(> :last-child > textarea)\n  textarea {\n  background-color: transparent !important;\n  border: 0 !important;\n  outline: 0 !important;\n  box-shadow: none !important;\n}\n\n/* The composer keeps its visible text in a backdrop layer underneath a\n * transparent textarea. Let the outer composer card own the surface and\n * focus treatment; otherwise the backdrop is hidden and a second inset rule\n * remains visible after the textarea loses focus. Newer DSH builds expose the\n * backdrop/mirror structure instead of the legacy composer-input part. */\nhtml[data-dsh-theme-eink-retro] textarea[data-dsh-part="composer-input"],\nhtml[data-dsh-theme-eink-retro]\n  [data-composer-card="true"]\n  [data-input-scroll="true"]\n  > :has(> [data-input-backdrop="true"]):has(> [data-input-mirror="true"])\n  > textarea {\n  background-color: transparent !important;\n  border: 0 !important;\n  outline: 0 !important;\n  box-shadow: none !important;\n}\n\n/* Before a Workspace exists, DSH turns the resident composer into the picker\n * trigger and draws a 22px dashed SVG-mask ring over its real border. The ring\n * survives the card\'s rectilinear theme radius and reads like a drop zone.\n * Keep the generous whole-card target, but express it as the same solid paper\n * panel used everywhere else. The card keeps one border and no drop shadow so\n * its lower edge cannot read as a stray rule; the border survives forced colors. */\nhtml[data-dsh-theme-eink-retro] [data-composer-card="true"]:has(\n  textarea[aria-haspopup="menu"][readonly]\n) {\n  background-color: var(--eink-paper-bright) !important;\n  border: 1px solid var(--eink-rule-strong) !important;\n  border-radius: var(--eink-radius-surface) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [data-composer-card="true"]:has(\n  textarea[aria-haspopup="menu"][readonly]\n)::after {\n  content: none !important;\n  -webkit-mask: none !important;\n  mask: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [data-composer-card="true"]:has(\n  textarea[aria-haspopup="menu"][readonly]\n):hover {\n  border-color: var(--eink-ink) !important;\n}\n\n/* The context meter is only 14px wide, so DSH\'s tertiary label and translucent\n * border tokens collapse into one mid-gray ring after the e-ink token map. Use\n * an explicit paper rule for the capacity track and primary ink for the used\n * arc. The structural hook is language-independent and avoids hashed classes. */\nhtml[data-dsh-theme-eink-retro]\n  [data-composer-card="true"]\n  button[aria-haspopup="dialog"]:has(> svg > circle[stroke-dasharray])\n  circle:not([stroke-dasharray]) {\n  stroke: var(--eink-rule) !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-composer-card="true"]\n  button[aria-haspopup="dialog"]:has(> svg > circle[stroke-dasharray])\n  circle[stroke-dasharray] {\n  stroke: var(--eink-ink) !important;\n}\n\n/* DSH places a blue-gray fade on the composer seat itself. Retint that native\n * layer instead of removing the useful separation between the message stream\n * and composer. */\nhtml[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"] > :has(\n  [data-composer-card="true"]\n)::before {\n  background-image: linear-gradient(\n    transparent 0,\n    color-mix(in srgb, var(--dsw-alias-bg-base) 94%, transparent) 36px\n  ) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [data-composer-card="true"]:has(\n  textarea[data-dsh-part="composer-input"]:focus-visible\n),\nhtml[data-dsh-theme-eink-retro] [data-composer-card="true"]:has(\n  [data-input-scroll="true"] textarea:focus-visible\n) {\n  border-color: var(--eink-ink) !important;\n  box-shadow: var(--eink-focus-ring) !important;\n}\n\n/* One focus frame for everything that can be reached by keyboard. Ink is by\n * definition the highest-contrast value against paper, and `outline-offset`\n * leaves the gap showing the ground the control sits on, so the frame stays\n * visible on any surface. An added paper-colored halo would only be right on\n * the one surface it was sampled from, so there is none. */\nhtml[data-dsh-theme-eink-retro] :where(\n  a,\n  button,\n  summary,\n  [role="button"],\n  [role="link"],\n  [role="tab"],\n  [role="menuitem"],\n  [role="menuitemcheckbox"],\n  [role="menuitemradio"],\n  [role="option"],\n  [role="treeitem"],\n  [role="switch"],\n  [role="checkbox"],\n  [role="radio"],\n  [tabindex]:not([tabindex="-1"])\n):focus-visible {\n  outline: 1px solid var(--eink-ink);\n  outline-offset: 2px;\n}\n\n/* A few DSH affordances are only identifiable by their accessible name, which\n * is localized. Those rules match the name by substring across the locales we\n * know and always pair it with a structural guard, so a similarly named\n * control elsewhere in the app cannot pick the rule up. Adding a locale means\n * extending the lists here \u2014 never dropping the structural half. */\n\n/* The workspace header clips an outward focus outline on its final icon\n * action, leaving only a detached vertical stroke. Keep the keyboard focus\n * frame inside that compact button instead. */\nhtml[data-dsh-theme-eink-retro] button[aria-label*="\u6DFB\u52A0\u5DE5\u4F5C\u533A"]:focus-visible,\nhtml[data-dsh-theme-eink-retro] button[aria-label*="Add workspace" i]:focus-visible {\n  outline: 0 !important;\n  box-shadow: var(--eink-focus-ring) !important;\n}\n\n/* The workspace search draws its visible shape on the wrapper, not the icon\n * button or input. Give that wrapper the same compact geometry as adjacent\n * actions, and let it own the expanded focus border. */\n/* The collapsed shell holds nothing but the icon button \u2014 the input is only\n * mounted once it expands \u2014 so this rule cannot ask for one. Without it the\n * shell keeps its 50% radius and reads as a circle among square actions. */\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="\u641C\u7D22\u4F1A\u8BDD"]),\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="Search" i]) {\n  border-radius: var(--eink-radius-control) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="\u641C\u7D22\u4F1A\u8BDD"][aria-expanded="true"]):has(> input),\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="Search" i][aria-expanded="true"]):has(> input) {\n  background-color: var(--eink-paper-bright) !important;\n  border: 1px solid var(--eink-rule-strong) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="\u641C\u7D22\u4F1A\u8BDD"]) > input,\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="Search" i]) > input {\n  background-color: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  outline: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="\u641C\u7D22\u4F1A\u8BDD"]):has(> input:focus-visible),\nhtml[data-dsh-theme-eink-retro] :has(> button[aria-label*="Search" i]):has(> input:focus-visible) {\n  border-color: var(--eink-ink) !important;\n  box-shadow: var(--eink-focus-ring) !important;\n}\n\n/* Native form controls already own a visible border. Focus replaces the quiet\n * inset well with one complete inner frame: no extra baseline, no elevation,\n * and no layout shift from changing border width. */\nhtml[data-dsh-theme-eink-retro] :where(input, textarea, select, [contenteditable="true"]):focus-visible {\n  outline: 0 !important;\n  border-color: var(--eink-ink) !important;\n  box-shadow: var(--eink-focus-ring) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] textarea[data-dsh-part="composer-input"]:focus-visible,\nhtml[data-dsh-theme-eink-retro]\n  [data-composer-card="true"]\n  [data-input-scroll="true"]\n  > :has(> [data-input-backdrop="true"]):has(> [data-input-mirror="true"])\n  > textarea:focus-visible {\n  box-shadow: none !important;\n}\n\n/* The trajectory search already has a semantic wrapper with its search icon.\n * Make that wrapper the only surface and the only focus owner. */\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) {\n  gap: 4px;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) button {\n  min-height: 24px;\n  padding: 2px 8px;\n  color: var(--eink-ink-2);\n  background-color: var(--eink-paper-bright);\n  border: 1px solid var(--eink-rule-strong);\n}\n\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) :has(\n  > input[type="search"]\n) {\n  min-height: 24px;\n  background-color: var(--eink-paper-bright) !important;\n  border: 1px solid var(--eink-rule-strong) !important;\n  border-radius: var(--eink-radius-control) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) input[type="search"] {\n  background-color: transparent !important;\n  border: 0 !important;\n  outline: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) :has(\n  > input[type="search"]:focus-visible\n) {\n  border-color: var(--eink-ink) !important;\n  box-shadow: var(--eink-focus-ring) !important;\n}\n\n/* Git Graph exposes a stable popover hook, but its search field draws three\n * nested shapes: the floating listbox, a thick rounded search wrapper, and a\n * second focused input frame. Keep the listbox as the elevated surface and let\n * the search wrapper own exactly one control frame. */\nhtml[data-dsh-theme-eink-retro] [data-gitgraph-popover="true"] > :has(> input) {\n  background-color: var(--eink-paper-bright) !important;\n  border: 1px solid var(--eink-rule-strong) !important;\n  border-radius: var(--eink-radius-control) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [data-gitgraph-popover="true"] > :has(> input) > input {\n  background-color: transparent !important;\n  border: 0 !important;\n  outline: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [data-gitgraph-popover="true"] > :has(\n  > input:focus-visible\n) {\n  border-color: var(--eink-ink) !important;\n  box-shadow: var(--eink-focus-ring) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] select option {\n  color: var(--eink-ink);\n  background-color: var(--eink-paper-bright);\n}\n\nhtml[data-dsh-theme-eink-retro] select option:checked {\n  color: var(--eink-selection-fg);\n  background-color: var(--eink-selection-bg);\n}\n\nhtml[data-dsh-theme-eink-retro] :where([role="dialog"], [data-dsh-part="dialog"]) {\n  background-color: var(--dsw-alias-bg-layer-1);\n  border: 1px solid var(--eink-rule-strong);\n  box-shadow: var(--eink-shadow-2);\n  backdrop-filter: none;\n  border-radius: var(--eink-radius-surface) !important;\n}\n\n/* Modal masks should separate layers without simulating frosted glass. */\nhtml[data-dsh-theme-eink-retro] [role="presentation"]:has(> [role="dialog"]) > :first-child {\n  backdrop-filter: none !important;\n  -webkit-backdrop-filter: none !important;\n  background-color: color-mix(in srgb, var(--eink-ink) 18%, transparent) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where([role="menu"], [role="listbox"]) {\n  background-color: var(--eink-paper-bright) !important;\n  background-image: none !important;\n  border: 1px solid var(--eink-rule-strong);\n  box-shadow: var(--eink-shadow-1);\n  backdrop-filter: none !important;\n  -webkit-backdrop-filter: none !important;\n}\n\n/* Trigger tooltips add no information once a menu/listbox is open and can sit\n * on top of the floating surface after a pointer click. Suppress that stale\n * hover layer while a richer popup is present. */\nhtml[data-dsh-theme-eink-retro]:has(:where([role="menu"], [role="listbox"])) [role="tooltip"] {\n  display: none !important;\n}\n\n/* Plugin settings are contributed by independent packages, so their card\n * implementations do not always consume DSH\'s shared surface tokens. Normalize\n * the semantic slot instead of coupling the theme to generated class names. */\nhtml[data-dsh-theme-eink-retro]\n  [data-dsh-surface="settings"]\n  [data-slot="settings.plugin.item"]\n  > :first-child {\n  color: var(--eink-ink) !important;\n  background-color: var(--eink-paper-inset) !important;\n  background-image: none !important;\n  border: 1px solid color-mix(in srgb, var(--eink-ink) 35%, transparent) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-dsh-surface="settings"]\n  [data-slot="settings.plugin.item"]\n  details\n  > summary\n  > :first-child\n  > :last-child {\n  color: var(--eink-ink-2) !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-dsh-surface="settings"]\n  [data-slot="settings.plugin.item"]\n  input[type="radio"] {\n  accent-color: var(--eink-ink) !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-dsh-surface="settings"]\n  [data-slot="settings.plugin.item"]\n  label:has(> input[type="radio"]:checked) {\n  background-color: var(--eink-paper-bright) !important;\n  border-color: var(--eink-ink) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-dsh-surface="settings"]\n  [data-slot="settings.plugin.item"]\n  button[type="submit"] {\n  color: var(--eink-selection-fg) !important;\n  background-color: var(--eink-selection-bg) !important;\n  border-color: var(--eink-selection-bg) !important;\n}\n\n/* An inverted tooltip already separates itself from paper. Border on the fill\n * color keeps the box metrics without drawing a gray ring that is invisible\n * on black in light mode and doubled in dark mode. */\nhtml[data-dsh-theme-eink-retro] [role="tooltip"] {\n  color: var(--eink-selection-fg) !important;\n  background-color: var(--eink-selection-bg) !important;\n  border: 1px solid var(--eink-selection-bg);\n  box-shadow: var(--eink-shadow-1);\n}\n\n/* User messages are a quiet paper card, not a chat-app pill. The surrounding\n * message row carries stable semantic attributes even though the generated\n * bubble class changes between DSH builds. */\nhtml[data-dsh-theme-eink-retro]\n  [data-dsh-part="message-row"][data-chat-flow-kind="user"]\n  [data-time-hover-root="true"]\n  > :first-child\n  > :last-child {\n  padding: 8px 12px !important;\n  background-color: var(--eink-paper-bright) !important;\n  border: 1px solid var(--eink-rule) !important;\n  border-radius: var(--eink-radius-surface) !important;\n  box-shadow: none !important;\n}\n\n/* Turn-tail editing is a compact form, not a second composer. Give the\n * textarea one frame and keep both actions on the same control scale. The\n * slot only carries a textarea while a message is being edited, so the\n * structure identifies the state without reading its placeholder. */\nhtml[data-dsh-theme-eink-retro] [data-slot="conversation.chat.turnTail"] textarea {\n  border: 1px solid var(--eink-rule-strong) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-slot="conversation.chat.turnTail"]\n  :has(> textarea)\n  > :nth-child(2)\n  > button {\n  box-sizing: border-box;\n  min-height: 24px;\n  padding: 0 10px;\n  font-size: var(--eink-text-sm);\n  font-weight: var(--eink-weight-medium);\n  line-height: 22px;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-slot="conversation.chat.turnTail"]\n  :has(> textarea)\n  > :nth-child(2)\n  > button:first-child {\n  background-color: var(--eink-paper-bright) !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-slot="conversation.chat.turnTail"]\n  :has(> textarea)\n  > :nth-child(2)\n  > button:last-child {\n  border: 1px solid var(--eink-selection-bg) !important;\n}\n\n/* Approval requests are important without needing a warm warning wash. The\n * labelled body gives us a stable hook for its surrounding native card. */\nhtml[data-dsh-theme-eink-retro] :has(> [aria-label*="\u5BA1\u6279\u8BE6\u60C5"]),\nhtml[data-dsh-theme-eink-retro] :has(> [aria-label*="Approval details" i]) {\n  background-color: var(--eink-paper-bright) !important;\n  border-color: var(--eink-rule-strong) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :has(> [aria-label*="\u5BA1\u6279\u8BE6\u60C5"]) > :first-child,\nhtml[data-dsh-theme-eink-retro] :has(> [aria-label*="Approval details" i]) > :first-child {\n  color: var(--eink-ink) !important;\n  background-color: var(--eink-paper-raised) !important;\n  border-bottom: 1px solid var(--eink-rule) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :has(> [aria-label*="\u5BA1\u6279\u8BE6\u60C5"]) > :first-child > :first-child,\nhtml[data-dsh-theme-eink-retro] :has(> [aria-label*="Approval details" i]) > :first-child > :first-child {\n  color: var(--eink-ink) !important;\n  background-color: var(--eink-ink) !important;\n}\n\n/* DSH renders the active turn label with a continuous blue shimmer. Replace\n * it with a two-frame local refresh: a short contrast drop, then settled ink.\n * The live clock remains stable and continues to communicate progress. */\nhtml[data-dsh-theme-eink-retro] [data-chat-flow] > [role="status"] {\n  color: var(--eink-ink-2);\n  -webkit-text-fill-color: currentColor !important;\n  background-image: none !important;\n  background-clip: border-box !important;\n  animation: eink-retro-turn-status-refresh 2.4s steps(1, end) infinite !important;\n}\n\n@keyframes eink-retro-turn-status-refresh {\n  0%,\n  72%,\n  100% {\n    color: var(--eink-ink-2);\n  }\n\n  73%,\n  84% {\n    color: var(--eink-rule-strong);\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html[data-dsh-theme-eink-retro] [data-chat-flow] > [role="status"] {\n    color: var(--eink-ink-2) !important;\n    animation: none !important;\n  }\n}\n\nhtml[data-dsh-theme-eink-retro] :where(\n  [role="treeitem"][aria-selected="true"],\n  [aria-current="true"],\n  [aria-current="page"]\n) {\n  color: var(--eink-selection-fg) !important;\n  background-color: var(--eink-selection-bg) !important;\n  background-image: none !important;\n  border-color: var(--eink-selection-bg) !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(\n  [role="treeitem"][aria-selected="true"],\n  [aria-current="true"],\n  [aria-current="page"]\n) * {\n  color: inherit !important;\n}\n\n/* A selected/current control already owns the strongest ink fill. Drawing an\n * offset ink outline around that fill reads as two nested selections. Keep the\n * focus cue inside the selected surface, where inverse paper stays visible. */\nhtml[data-dsh-theme-eink-retro] :where(\n  [role="treeitem"][aria-selected="true"],\n  [aria-current="true"],\n  [aria-current="page"],\n  [aria-pressed="true"]\n):focus-visible {\n  outline: 0 !important;\n  box-shadow: var(--eink-focus-ring-inverse) !important;\n}\n\n/* Tabs are secondary navigation, not a row of outlined buttons. Their resting\n * state is flat, hover spends only a quiet tonal fill, and the current view\n * adds label weight. Keyboard focus temporarily inverts the same flat tab\n * instead of wrapping it in a button-like outline. */\nhtml[data-dsh-theme-eink-retro] [role="tab"] {\n  background-color: transparent !important;\n  background-image: none !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="tab"]:hover {\n  background-color: var(--eink-paper-raised) !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="tab"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="tab"][aria-selected="true"] {\n  color: var(--eink-ink) !important;\n  background-color: transparent !important;\n  background-image: none !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n  font-weight: var(--eink-weight-strong) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="tab"][aria-selected="true"] * {\n  color: inherit !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="tab"]:focus-visible {\n  color: var(--eink-selection-fg) !important;\n  background-color: var(--eink-selection-bg) !important;\n  outline: 0 !important;\n  box-shadow: var(--eink-focus-ring-inverse) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="tab"]:focus-visible * {\n  color: inherit !important;\n}\n\n/* The conversation header\'s public responsive hook identifies the tab set in\n * the reference without localized labels or generated classes. It already\n * paints one 2px selected indicator on the tab\'s ::after, so this group drops\n * the generic tonal block and keeps that native line as its sole active cue. */\nhtml[data-dsh-theme-eink-retro]\n  [data-dsh-responsive-part="session-tablist"]\n  > [role="tab"] {\n  background-color: transparent !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-dsh-responsive-part="session-tablist"]\n  > [role="tab"]:hover {\n  color: var(--eink-ink) !important;\n  background-color: transparent !important;\n  box-shadow: inset 0 -1px 0 var(--eink-rule-strong) !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-dsh-responsive-part="session-tablist"]\n  > [role="tab"][aria-selected="true"] {\n  color: var(--eink-ink) !important;\n  background-color: transparent !important;\n  box-shadow: none !important;\n  font-weight: var(--eink-weight-strong) !important;\n}\n\nhtml[data-dsh-theme-eink-retro]\n  [data-dsh-responsive-part="session-tablist"]\n  > [role="tab"]:focus-visible {\n  color: var(--eink-ink) !important;\n  background-color: transparent !important;\n  box-shadow: var(--eink-focus-ring) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] ::selection {\n  color: var(--eink-selection-fg);\n  background: var(--eink-selection-bg);\n}\n\nhtml[data-dsh-theme-eink-retro] hr {\n  height: 1px;\n  background: var(--eink-rule);\n  border: 0;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(code, kbd, samp, pre) {\n  font-family: var(--eink-font-mono);\n}\n\n/* A key is a physical thing on paper: a keycap frame with the same hard\n * offset the rest of the elevation scale uses. */\nhtml[data-dsh-theme-eink-retro] kbd {\n  padding: 1px 5px;\n  color: var(--eink-ink);\n  background-color: var(--eink-paper-bright);\n  border: 1px solid var(--eink-rule-strong);\n  border-radius: var(--eink-radius-tight);\n  box-shadow: var(--eink-shadow-1);\n  font-size: 0.9em;\n  line-height: 1.4;\n  white-space: nowrap;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(pre, [class*="code-block" i]) {\n  background-color: var(--dsw-alias-markdown-code-block);\n  border: 1px solid var(--eink-rule);\n  border-radius: var(--eink-radius-surface);\n  box-shadow: inset 2px 0 0 var(--eink-rule-strong);\n}\n\nhtml[data-dsh-theme-eink-retro] code:not(pre code) {\n  background-color: var(--dsw-alias-markdown-inline-code);\n  border: 1px solid var(--eink-rule);\n  border-radius: var(--eink-radius-control);\n}\n\nhtml[data-dsh-theme-eink-retro] blockquote {\n  border-left: 2px solid var(--eink-rule-strong);\n  background: transparent;\n  padding: 2px 0 2px 14px;\n}\n\nhtml[data-dsh-theme-eink-retro] blockquote > :first-child {\n  margin-top: 0 !important;\n}\n\nhtml[data-dsh-theme-eink-retro] blockquote > :last-child {\n  margin-bottom: 0 !important;\n}\n\nhtml[data-dsh-theme-eink-retro] table {\n  border-collapse: collapse;\n}\n\nhtml[data-dsh-theme-eink-retro] :where(th, td) {\n  border: 1px solid var(--eink-rule);\n  padding: 8px 12px !important;\n  vertical-align: top;\n}\n\nhtml[data-dsh-theme-eink-retro] th {\n  background: var(--eink-paper-raised);\n  font-weight: var(--eink-weight-strong);\n}\n\n/* DSH mounts composer menus inside the conversation scrollport. Their\n * absolutely positioned listboxes must not contribute their popup height to\n * the message stream, otherwise opening one changes the stream scrollHeight\n * and makes its scrollbar/thumb jump. Keep gutter reservation local to the\n * popup viewport: reserving it on the outer scrollport creates a second empty\n * track beside views such as the trajectory table. */\nhtml[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"] :has(> [role="listbox"]) {\n  contain: layout;\n}\n\nhtml[data-dsh-theme-eink-retro] [role="listbox"] > * {\n  scrollbar-gutter: stable;\n}\n\n/* The trajectory view already owns its vertical range in an inner table\n * scroller. Keep the otherwise empty outer scrollport from acquiring a second\n * scrollbar while a composer popup mounts or finishes unmounting. */\nhtml[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"]:has(\n  section[aria-label*="Trajectory" i]\n),\nhtml[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"]:has(\n  section[aria-label*="\u8F68\u8FF9"]\n) {\n  overflow-y: hidden;\n}\n\nhtml[data-dsh-theme-eink-retro] * {\n  scrollbar-color: var(--dsw-alias-scrollbar-bg-l2) var(--dsw-alias-scrollbar-bg-l1);\n  scrollbar-width: thin;\n}\n\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-track,\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-corner {\n  background: var(--dsw-alias-scrollbar-bg-l1);\n}\n\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-thumb {\n  background: var(--dsw-alias-scrollbar-bg-l2);\n  border: 2px solid var(--dsw-alias-scrollbar-bg-l1);\n  border-radius: 0;\n}\n\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-thumb:hover {\n  background: var(--dsw-alias-scrollbar-hover-l2);\n}\n\nhtml[data-dsh-theme-eink-retro] *::-webkit-scrollbar-thumb:active {\n  background: var(--dsw-alias-scrollbar-hover-l1);\n}\n\n/* Optional compatibility adapter: dsh-context v0.31.x. The data colors are\n * preserved in balanced mode and mapped to luminance only in immersive mode. */\nhtml[data-dsh-theme-eink-retro="immersive"] .lc-root :is(\n  .lc-stacked-seg,\n  .lc-bar-stack > div,\n  .lc-bar-up > div,\n  .lc-bar-down > div,\n  .lc-turn,\n  .lc-chip i,\n  .lc-detail-row i,\n  .lc-node i,\n  .lc-br-cat-row i,\n  .lc-bar-fill,\n  .lc-event-icon,\n  .lc-kind\n) {\n  filter: grayscale(1) contrast(1.12);\n}\n\nhtml[data-dsh-theme-eink-retro] .lc-root :is(.lc-card, .lc-stat, .lc-br-cat, .lc-ts-card) {\n  border-radius: var(--eink-radius-surface);\n  box-shadow: none;\n}\n\nhtml[data-dsh-theme-eink-retro] .lc-root .lc-gran {\n  border-radius: var(--eink-radius-control) !important;\n}\n\nhtml[data-dsh-theme-eink-retro] .lc-root :is(.lc-gran-on, .lc-rich-seg-on) {\n  color: var(--eink-selection-fg);\n  background: var(--eink-selection-bg);\n}\n\n/* Skill Center is an app surface even though its panel is not exposed as a\n * dialog. Replace the soft 60px float shadow with the shared hard elevation. */\nhtml[data-dsh-theme-eink-retro]\n  [data-dsh-plugin="skill-explorer"]\n  [data-dsh-part="card"] {\n  background-color: var(--eink-paper-bright) !important;\n  border: 1px solid var(--eink-rule-strong) !important;\n  box-shadow: var(--eink-shadow-2) !important;\n}\n\n/* The empty composer sits on a decorative glow with a hard-coded blue fill.\n * It is marked aria-hidden, so it carries no meaning to retint around: the\n * fill drops to a neutral wash and the composition DSH intended survives.\n * Kept out of the immersive block on purpose \u2014 a saturated glow is off\n * palette in balanced mode too. */\nhtml[data-dsh-theme-eink-retro]\n  [data-slot="conversation.composer"]\n  svg[aria-hidden="true"]\n  :is(ellipse, circle)[fill]:not([fill="none"]):not([fill="currentColor"]) {\n  fill: var(--eink-paper-raised);\n}\n\n/* Optional decorative adapters. User-authored images, attachments, previews,\n * canvas content and media are intentionally never filtered. The pet is\n * addressed through its wrapper so its own chrome \u2014 the close button and its\n * tinted border \u2014 is covered along with the sprite. */\nhtml[data-dsh-theme-eink-retro="immersive"] img[src*="/api/skin-center/"],\nhtml[data-dsh-theme-eink-retro="immersive"] :has(> [style*="spritesheet"]) {\n  filter: grayscale(1) contrast(1.08);\n}\n\n/* Windows High Contrast replaces the palette wholesale, so the decorative\n * layer only gets in its way: hard shadows and grayscale filters are dropped\n * and the focus frame is redrawn in a system color. */\n@media (forced-colors: active) {\n  html[data-dsh-theme-eink-retro] *,\n  html[data-dsh-theme-eink-retro] *::before,\n  html[data-dsh-theme-eink-retro] *::after {\n    box-shadow: none !important;\n    filter: none !important;\n  }\n\n  html[data-dsh-theme-eink-retro] :where(\n    input,\n    textarea,\n    select,\n    [contenteditable="true"]\n  ):focus-visible {\n    outline: 2px solid CanvasText !important;\n    outline-offset: 0 !important;\n  }\n}\n\n/* Paper is the premise, so print is the one place the theme needs no\n * translation. Backgrounds are dropped rather than trusted \u2014 browsers omit\n * them by default, and an inverted selection would otherwise print as black\n * on black \u2014 which is also why type collapses to a single ink. */\n@media print {\n  html[data-dsh-theme-eink-retro],\n  html[data-dsh-theme-eink-retro] body,\n  html[data-dsh-theme-eink-retro] #root {\n    background: #ffffff !important;\n  }\n\n  html[data-dsh-theme-eink-retro] *,\n  html[data-dsh-theme-eink-retro] *::before,\n  html[data-dsh-theme-eink-retro] *::after {\n    color: #000000 !important;\n    background: transparent !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n    filter: none !important;\n  }\n\n  html[data-dsh-theme-eink-retro] :where(:has(> [data-dsh-surface="sidebar"]), [role="tooltip"]),\n  html[data-dsh-theme-eink-retro] [data-composer-card="true"] {\n    display: none !important;\n  }\n\n  html[data-dsh-theme-eink-retro] :where(pre, blockquote, table, tr, img) {\n    break-inside: avoid;\n  }\n}\n';

// src/client/i18n.ts
var messages = {
  en: {
    intro: "E\u2011Ink Retro pauses while another third-party theme is active. Re-enabling it or changing its mode switches DSH back to Follow system.",
    enabledTitle: "Enable theme",
    enabledDescription: "Turning this off removes all E\u2011Ink colors and component overrides.",
    modeGroupLabel: "E\u2011Ink theme mode",
    balanced: {
      label: "Balanced (recommended)",
      description: "Applies the paper-and-ink shell and controls while preserving semantic status colors and user content."
    },
    immersive: {
      label: "Fully immersive",
      description: "Maps supported surfaces and compatibility layers to an ink ramp while leaving images, attachments, and video unchanged."
    },
    pausedStatus: "Another third-party theme is active, so E\u2011Ink Retro is temporarily paused."
  },
  "zh-CN": {
    intro: "\u5207\u6362\u5176\u4ED6\u7B2C\u4E09\u65B9\u76AE\u80A4\u65F6\uFF0CE\u2011Ink Retro \u4F1A\u6682\u505C\u3002\u91CD\u65B0\u542F\u7528\u6216\u5207\u6362 E\u2011Ink \u6A21\u5F0F\u65F6\uFF0CDSH \u4F1A\u56DE\u5230\u8DDF\u968F\u7CFB\u7EDF\u3002",
    enabledTitle: "\u542F\u7528\u4E3B\u9898",
    enabledDescription: "\u5173\u95ED\u540E\u79FB\u9664\u5168\u90E8 E\u2011Ink \u989C\u8272\u548C\u7EC4\u4EF6\u8986\u76D6\u3002",
    modeGroupLabel: "E\u2011Ink \u4E3B\u9898\u6A21\u5F0F",
    balanced: {
      label: "\u5E73\u8861\u6A21\u5F0F\uFF08\u63A8\u8350\uFF09",
      description: "\u7EDF\u4E00 DSH \u58F3\u5C42\u4E0E\u63A7\u4EF6\uFF0C\u4FDD\u7559\u627F\u8F7D\u72B6\u6001\u542B\u4E49\u7684\u8BED\u4E49\u8272\u548C\u7528\u6237\u5185\u5BB9\u539F\u8272\u3002"
    },
    immersive: {
      label: "\u5B8C\u5168\u6C89\u6D78",
      description: "\u5C06\u5DF2\u9002\u914D\u7684\u754C\u9762\u4E0E\u517C\u5BB9\u5C42\u8F6C\u4E3A\u58A8\u8272\u9636\u68AF\uFF0C\u56FE\u7247\u3001\u9644\u4EF6\u548C\u89C6\u9891\u4FDD\u6301\u539F\u6837\u3002"
    },
    pausedStatus: "\u5F53\u524D\u6B63\u5728\u4F7F\u7528\u53E6\u4E00\u5957\u7B2C\u4E09\u65B9\u76AE\u80A4\uFF0CE\u2011Ink Retro \u5DF2\u6682\u65F6\u505C\u7528\u3002"
  }
};
function localeForLanguageTag(languageTag) {
  try {
    const locale = new Intl.Locale(languageTag.trim());
    if (locale.language === "zh" && (locale.script === "Hans" || !locale.script && (!locale.region || locale.region === "CN" || locale.region === "SG"))) {
      return "zh-CN";
    }
  } catch {
  }
  return "en";
}
function detectLocale(documentLanguage, browserLanguages) {
  const preferredLanguage = documentLanguage.trim() || browserLanguages.find((language) => language.trim()) || "en";
  return localeForLanguageTag(preferredLanguage);
}
function messagesForLocale(locale) {
  return messages[locale];
}
function detectCurrentLocale() {
  return detectLocale(document.documentElement.lang, [...navigator.languages, navigator.language]);
}
function watchLocale(onChange) {
  const updateLocale = () => onChange(detectCurrentLocale());
  const observer = new MutationObserver(updateLocale);
  observer.observe(document.documentElement, { attributeFilter: ["lang"], attributes: true });
  window.addEventListener("languagechange", updateLocale);
  return () => {
    observer.disconnect();
    window.removeEventListener("languagechange", updateLocale);
  };
}

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
  /**
   * Solid ink, no alpha. A 1-bit display cannot express a 20%-gray shadow, and
   * neither can print: the offset either lands or it does not. A translucent
   * offset reads as a soft modern drop, which is the one place the palette was
   * still hedging.
   */
  "--dsw-shadow-lv1": pair("1px 1px 0 #161616", "1px 1px 0 #000000"),
  "--dsw-shadow-lv1-blur": pair("none", "none"),
  "--dsw-shadow-lv2": pair("2px 2px 0 #161616", "2px 2px 0 #000000"),
  "--dsw-shadow-lv2-blur": pair("none", "none"),
  "--dsw-shadow-lv3": pair("2px 2px 0 #161616", "2px 2px 0 #000000"),
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
  return function EinkRetroSettings() {
    const [view, setView] = import_react.default.useState(() => modeState(readMode(), ctx.theme.getTheme()));
    const [locale, setLocale] = import_react.default.useState(detectCurrentLocale);
    import_react.default.useEffect(() => {
      const onModeChange = (event) => {
        setView(event.detail);
      };
      window.addEventListener(MODE_EVENT, onModeChange);
      return () => window.removeEventListener(MODE_EVENT, onModeChange);
    }, []);
    import_react.default.useEffect(() => watchLocale(setLocale), []);
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
    const copy = messagesForLocale(locale);
    const options = [
      { mode: "balanced", ...copy.balanced },
      { mode: "immersive", ...copy.immersive }
    ];
    return import_react.default.createElement(
      "section",
      { className: "eink-retro-settings", "aria-labelledby": "eink-retro-settings-title" },
      import_react.default.createElement("h2", { id: "eink-retro-settings-title" }, "E\u2011Ink Retro"),
      import_react.default.createElement(
        "p",
        { className: "eink-retro-settings__intro" },
        copy.intro
      ),
      import_react.default.createElement(
        "label",
        { className: "eink-retro-settings__enabled" },
        import_react.default.createElement(
          "span",
          { className: "eink-retro-settings__enabled-copy" },
          import_react.default.createElement("span", { className: "eink-retro-settings__enabled-title" }, copy.enabledTitle),
          import_react.default.createElement(
            "span",
            { className: "eink-retro-settings__enabled-description" },
            copy.enabledDescription
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
        { className: "eink-retro-settings__options", role: "radiogroup", "aria-label": copy.modeGroupLabel },
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
        copy.pausedStatus
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
