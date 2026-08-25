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
var theme_default = `/* E\u2011Ink Retro has two layers:
 * 1. both modes share neutral semantic tokens, crisp geometry and black/white
 *    interaction states;
 * 2. immersive mode additionally maps selected decorative/data colors to gray.
 * User-authored media is never filtered. */

.eink-retro-settings {
  display: grid;
  gap: 14px;
  color: var(--dsw-alias-label-primary);
}

.eink-retro-settings h2,
.eink-retro-settings p {
  margin: 0;
}

.eink-retro-settings__intro,
.eink-retro-settings__enabled-description,
.eink-retro-settings__option-description,
.eink-retro-settings__status {
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  line-height: 1.55;
}

.eink-retro-settings__enabled {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 48px;
  cursor: pointer;
}

.eink-retro-settings__enabled-copy,
.eink-retro-settings__enabled-title,
.eink-retro-settings__enabled-description {
  display: block;
}

.eink-retro-settings__enabled-copy {
  min-width: 0;
}

.eink-retro-settings__enabled-title {
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 650;
}

.eink-retro-settings__enabled-input,
html[data-dsh-theme-eink-retro] .eink-retro-settings__enabled-input {
  flex: 0 0 auto;
  width: auto !important;
  height: auto !important;
  margin: 0;
  padding: 0 !important;
  appearance: auto !important;
  accent-color: auto !important;
  background: revert !important;
  border: revert !important;
  border-radius: revert !important;
  box-shadow: none !important;
  cursor: pointer;
}

html[data-dsh-theme-eink-retro] .eink-retro-settings__enabled-input:focus-visible {
  outline: auto !important;
  outline-offset: 2px;
  border: revert !important;
  box-shadow: none !important;
}

.eink-retro-settings__options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.eink-retro-settings__option {
  min-height: 112px;
  padding: 14px;
  color: var(--dsw-alias-label-primary);
  text-align: left;
  background: var(--dsw-alias-bg-layer-1);
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 2px;
  box-shadow: none;
  cursor: pointer;
}

.eink-retro-settings__option:hover {
  background: var(--dsw-alias-interactive-bg-hover-solid);
}

.eink-retro-settings__option[aria-checked="true"] {
  color: var(--dsw-alias-brand-primary-invert);
  background: var(--dsw-alias-brand-primary);
  border-color: var(--dsw-alias-brand-primary);
}

.eink-retro-settings__option:focus-visible {
  outline: 1px solid var(--dsw-alias-brand-primary);
  outline-offset: 2px;
}

.eink-retro-settings__option-title,
.eink-retro-settings__option-description {
  display: block;
}

.eink-retro-settings__option-title {
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 650;
}

.eink-retro-settings__option[aria-checked="true"] .eink-retro-settings__option-description {
  color: inherit;
  opacity: 0.78;
}

.eink-retro-settings__status {
  padding: 10px 12px;
  background: var(--dsw-alias-bg-layer-2);
  border-left: 3px solid var(--dsw-alias-state-warn-primary);
}

@media (max-width: 760px) {
  .eink-retro-settings__options {
    grid-template-columns: 1fr;
  }

  .eink-retro-settings__option {
    min-height: 0;
  }
}

html[data-dsh-theme-eink-retro] {
  --eink-paper: #f4f4f4;
  --eink-paper-bright: #ffffff;
  --eink-paper-raised: #e8e8e8;
  --eink-paper-inset: #d2d2d2;
  --eink-ink: #161616;
  --eink-ink-2: #4a4a4a;
  --eink-rule: #a8a8a8;
  --eink-rule-strong: #686868;
  --eink-selection-bg: #161616;
  --eink-selection-fg: #ffffff;
  --eink-shadow-1: 1px 1px 0 #16161633;
  --eink-shadow-2: 2px 2px 0 #16161633;
  --eink-radius-control: 2px;
  --eink-radius-surface: 2px;
  --eink-font-sans: "IBM Plex Sans SC", "Noto Sans SC", "Source Han Sans SC", "Microsoft YaHei UI", "Segoe UI", sans-serif;
  --eink-font-mono: "IBM Plex Mono", "Sarasa Mono SC", "Cascadia Mono", Consolas, monospace;
}

html[data-dsh-theme-eink-retro] body[data-ds-dark-theme] {
  --eink-paper: #181818;
  --eink-paper-bright: #222222;
  --eink-paper-raised: #303030;
  --eink-paper-inset: #121212;
  --eink-ink: #f4f4f4;
  --eink-ink-2: #c8c8c8;
  --eink-rule: #585858;
  --eink-rule-strong: #888888;
  --eink-selection-bg: #f4f4f4;
  --eink-selection-fg: #161616;
  --eink-shadow-1: 1px 1px 0 #0008;
  --eink-shadow-2: 2px 2px 0 #0008;
}

html[data-dsh-theme-eink-retro],
html[data-dsh-theme-eink-retro] body,
html[data-dsh-theme-eink-retro] #root {
  background-color: var(--dsw-alias-bg-base);
  background-image: none;
}

html[data-dsh-theme-eink-retro] body {
  color: var(--dsw-alias-label-primary);
  font-family: var(--eink-font-sans);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

@media (prefers-reduced-motion: reduce) {
  html[data-dsh-theme-eink-retro] *,
  html[data-dsh-theme-eink-retro] *::before,
  html[data-dsh-theme-eink-retro] *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}

html[data-dsh-theme-eink-retro] [data-pane="sidebar"],
html[data-dsh-theme-eink-retro] [data-pane="conversation"],
html[data-dsh-theme-eink-retro] [data-pane="details"] {
  background-color: var(--dsw-alias-bg-base);
  background-image: none;
  box-shadow: none;
}

html[data-dsh-theme-eink-retro] [data-pane="sidebar"] {
  background-color: var(--dsw-specific-sidebar-fill);
  border-right: 1px solid var(--eink-rule);
}

html[data-dsh-theme-eink-retro] [data-pane="conversation"] {
  border-right: 1px solid var(--eink-rule);
}

html[data-dsh-theme-eink-retro] [data-pane="details"] {
  background-color: var(--eink-paper-raised);
}

html[data-dsh-theme-eink-retro] :where(button, input, textarea, select, [role="button"]),
html[data-dsh-theme-eink-retro] :where(
  article,
  fieldset,
  [role="dialog"],
  [role="menu"],
  [role="listbox"],
  [role="tooltip"],
  [role="treeitem"],
  [class*="card" i],
  [class*="panel" i],
  [class*="modal" i],
  [class*="column" i]
) {
  border-radius: var(--eink-radius-surface) !important;
}

/* Some DSH and marketplace controls draw their visible surface on a wrapper
 * instead of the native input/card. Keep those shells in the same rectilinear
 * system without flattening charts or user content. */
html[data-dsh-theme-eink-retro] span[class*="tabSearch"],
html[data-dsh-theme-eink-retro] div[class$="_bar"]:has(> [class$="_label"]),
html[data-dsh-theme-eink-retro] div:has(> [class$="_sep"][aria-hidden="true"]) {
  border-radius: var(--eink-radius-surface) !important;
}

html[data-dsh-theme-eink-retro] :where(button, [role="button"], [role="tab"]) {
  box-shadow: none;
}

html[data-dsh-theme-eink-retro] :where(
  [role="radio"][aria-checked="true"],
  button[aria-pressed="true"],
  [data-state="checked"],
  [data-state="active"],
  [data-active="true"]
) {
  color: var(--eink-selection-fg) !important;
  background-color: var(--eink-selection-bg) !important;
  border-color: var(--eink-selection-bg) !important;
}

html[data-dsh-theme-eink-retro] :where(
  [role="radio"][aria-checked="true"],
  button[aria-pressed="true"],
  [data-state="checked"],
  [data-state="active"],
  [data-active="true"]
) * {
  color: inherit !important;
}

/* Switches own their state on the track, not on the button shell. Keeping the
 * shell transparent prevents a second black rectangle from showing around an
 * enabled track. */
html[data-dsh-theme-eink-retro] [role="switch"] {
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

html[data-dsh-theme-eink-retro] [role="switch"] > :last-child {
  box-sizing: border-box;
  width: 30px;
  height: 16px;
  background-color: var(--eink-paper-bright) !important;
  border: 1px solid var(--eink-ink) !important;
  border-radius: 1px !important;
}

html[data-dsh-theme-eink-retro] [role="switch"] > :last-child > * {
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  background-color: var(--eink-ink) !important;
  border: 0 !important;
  border-radius: 1px !important;
  box-shadow: none !important;
}

html[data-dsh-theme-eink-retro] [role="switch"]:not([aria-checked="true"]) > :last-child > * {
  background-color: var(--eink-ink) !important;
}

html[data-dsh-theme-eink-retro] [role="switch"][aria-checked="true"] > :last-child {
  background-color: var(--eink-selection-bg) !important;
  border-color: var(--eink-selection-bg) !important;
}

html[data-dsh-theme-eink-retro] [role="switch"][aria-checked="true"] > :last-child > * {
  background-color: var(--eink-selection-fg) !important;
}

/* Semantic destructive actions keep their warning color, but use the same
 * flat outline treatment as the rest of the control system. */
html[data-dsh-theme-eink-retro] button[class*="deleteButton" i] {
  background-color: transparent !important;
  border: 1px solid currentColor !important;
  box-shadow: none !important;
}

html[data-dsh-theme-eink-retro] button[class*="deleteButton" i]:hover {
  background-color: color-mix(in srgb, currentColor 8%, transparent) !important;
}

html[data-dsh-theme-eink-retro] :where([class*="badge" i], [class*="tag" i]):not(.lc-root *) {
  border-radius: 1px !important;
  filter: none;
}

html[data-dsh-theme-eink-retro="immersive"] :where([class*="badge" i], [class*="tag" i]):not(.lc-root *) {
  filter: grayscale(1);
}

/* Capability metadata is tertiary information, not an active control. Use a
 * quiet outline instead of a low-contrast filled status color. */
html[data-dsh-theme-eink-retro] [class*="badgeInvokable"] {
  color: var(--eink-ink-2) !important;
  background-color: transparent !important;
  border-color: var(--eink-rule) !important;
  padding: 2px 6px !important;
  font-size: 11px !important;
  font-weight: 550 !important;
  line-height: 1.3 !important;
  filter: none !important;
}

html[data-dsh-theme-eink-retro] :where(button:not(:disabled), [role="button"]:not([aria-disabled="true"]), [role="tab"]):active {
  transform: translate(1px, 1px);
}

html[data-dsh-theme-eink-retro] :where(input, textarea, select, [contenteditable="true"]) {
  background-color: var(--dsw-specific-input-major);
  border-color: var(--eink-rule-strong);
  box-shadow: inset 1px 1px 0 color-mix(in srgb, var(--eink-ink) 14%, transparent);
  caret-color: var(--eink-ink);
}

/* The composer keeps its visible text in a backdrop layer underneath a
 * transparent textarea. Let the outer composer card own the surface and
 * focus treatment; otherwise the backdrop is hidden and a second inset rule
 * remains visible after the textarea loses focus. */
html[data-dsh-theme-eink-retro] textarea[data-dsh-part="composer-input"] {
  background-color: transparent !important;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
}

/* DSH places a blue-gray fade on the composer seat itself. Retint that native
 * layer instead of removing the useful separation between the message stream
 * and composer. */
html[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"] > :has(
  [data-composer-card="true"]
)::before {
  background-image: linear-gradient(
    transparent 0,
    color-mix(in srgb, var(--dsw-alias-bg-base) 94%, transparent) 36px
  ) !important;
}

html[data-dsh-theme-eink-retro] [data-composer-card="true"]:has(
  textarea[data-dsh-part="composer-input"]:focus-visible
) {
  border-color: var(--eink-ink) !important;
  box-shadow: var(--eink-shadow-1) !important;
}

html[data-dsh-theme-eink-retro] :where(
  button,
  [role="button"],
  [role="tab"],
  [role="menuitem"],
  [role="treeitem"],
  [role="switch"],
  [role="radio"]
):focus-visible {
  outline: 1px solid var(--eink-ink);
  outline-offset: 2px;
  box-shadow: 0 0 0 1px var(--eink-paper-bright);
}

/* The workspace header clips an outward focus outline on its final icon
 * action, leaving only a detached vertical stroke. Keep the keyboard focus
 * frame inside that compact button instead. */
html[data-dsh-theme-eink-retro] button[aria-label="\u6DFB\u52A0\u5DE5\u4F5C\u533A"]:focus-visible {
  outline: 0 !important;
  box-shadow: inset 0 0 0 1px var(--eink-ink) !important;
}

/* The workspace search draws its visible shape on the wrapper, not the icon
 * button or input. Give that wrapper the same compact geometry as adjacent
 * actions, and let it own the expanded focus border. */
html[data-dsh-theme-eink-retro] :has(> button[aria-label="\u641C\u7D22\u4F1A\u8BDD"]) {
  border-radius: var(--eink-radius-control) !important;
}

html[data-dsh-theme-eink-retro] :has(> button[aria-label="\u641C\u7D22\u4F1A\u8BDD"][aria-expanded="true"]) {
  background-color: var(--eink-paper-bright) !important;
  border: 1px solid var(--eink-rule-strong) !important;
  box-shadow: none !important;
}

html[data-dsh-theme-eink-retro] :has(> button[aria-label="\u641C\u7D22\u4F1A\u8BDD"]) > input[placeholder="\u641C\u7D22\u4F1A\u8BDD\u2026"] {
  background-color: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
}

html[data-dsh-theme-eink-retro] :has(> input[placeholder="\u641C\u7D22\u4F1A\u8BDD\u2026"]:focus-visible) {
  border-color: var(--eink-ink) !important;
  box-shadow: none !important;
}

/* Native form controls already own a visible border. Strengthen that one
 * frame and add an inner baseline instead of drawing a second offset outline. */
html[data-dsh-theme-eink-retro] :where(input, textarea, select, [contenteditable="true"]):focus-visible {
  outline: 0 !important;
  border-color: var(--eink-ink) !important;
  box-shadow: inset 0 -2px 0 var(--eink-ink) !important;
}

html[data-dsh-theme-eink-retro] textarea[data-dsh-part="composer-input"]:focus-visible {
  box-shadow: none !important;
}

/* The trajectory search already has a semantic wrapper with its search icon.
 * Make that wrapper the only surface and the only focus owner. */
html[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) {
  gap: 4px;
}

html[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) button {
  min-height: 24px;
  padding: 2px 8px;
  color: var(--eink-ink-2);
  background-color: var(--eink-paper-bright);
  border: 1px solid var(--eink-rule);
}

html[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) :has(
  > input[type="search"]
) {
  min-height: 24px;
  background-color: var(--eink-paper-bright) !important;
  border: 1px solid var(--eink-rule-strong) !important;
  border-radius: var(--eink-radius-control) !important;
  box-shadow: none !important;
}

html[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) input[type="search"] {
  background-color: transparent !important;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
}

html[data-dsh-theme-eink-retro] [role="toolbar"]:has(input[type="search"]) :has(
  > input[type="search"]:focus-visible
) {
  border-color: var(--eink-ink) !important;
  box-shadow: inset 0 -2px 0 var(--eink-ink) !important;
}

html[data-dsh-theme-eink-retro] select option {
  color: var(--eink-ink);
  background-color: var(--eink-paper-bright);
}

html[data-dsh-theme-eink-retro] select option:checked {
  color: var(--eink-selection-fg);
  background-color: var(--eink-selection-bg);
}

html[data-dsh-theme-eink-retro] :where([role="dialog"], [data-dsh-part="dialog"]) {
  background-color: var(--dsw-alias-bg-layer-1);
  border: 1px solid var(--eink-rule-strong);
  box-shadow: var(--eink-shadow-2);
  backdrop-filter: none;
  border-radius: var(--eink-radius-surface) !important;
}

/* Modal masks should separate layers without simulating frosted glass. */
html[data-dsh-theme-eink-retro] [role="presentation"]:has(> [role="dialog"]) > :first-child {
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  background-color: color-mix(in srgb, var(--eink-ink) 18%, transparent) !important;
}

html[data-dsh-theme-eink-retro] :where([role="menu"], [role="listbox"]) {
  background-color: var(--dsw-specific-menu);
  border: 1px solid var(--eink-rule-strong);
  box-shadow: var(--eink-shadow-1);
}

/* Plugin settings are contributed by independent packages, so their card
 * implementations do not always consume DSH's shared surface tokens. Normalize
 * the semantic slot instead of coupling the theme to generated class names. */
html[data-dsh-theme-eink-retro]
  [data-dsh-surface="settings"]
  [data-slot="settings.plugin.item"]
  > :first-child {
  color: var(--eink-ink) !important;
  background-color: var(--eink-paper-inset) !important;
  background-image: none !important;
  border: 1px solid color-mix(in srgb, var(--eink-ink) 35%, transparent) !important;
  box-shadow: none !important;
}

html[data-dsh-theme-eink-retro]
  [data-dsh-surface="settings"]
  [data-slot="settings.plugin.item"]
  details
  > summary
  > :first-child
  > :last-child {
  color: var(--eink-ink-2) !important;
}

html[data-dsh-theme-eink-retro]
  [data-dsh-surface="settings"]
  [data-slot="settings.plugin.item"]
  input[type="radio"] {
  accent-color: var(--eink-ink) !important;
}

html[data-dsh-theme-eink-retro]
  [data-dsh-surface="settings"]
  [data-slot="settings.plugin.item"]
  label:has(> input[type="radio"]:checked) {
  border-color: var(--eink-ink) !important;
  box-shadow: inset 0 -2px 0 var(--eink-ink) !important;
}

html[data-dsh-theme-eink-retro]
  [data-dsh-surface="settings"]
  [data-slot="settings.plugin.item"]
  button[type="submit"] {
  color: var(--eink-selection-fg) !important;
  background-color: var(--eink-selection-bg) !important;
  border-color: var(--eink-selection-bg) !important;
}

html[data-dsh-theme-eink-retro] [role="tooltip"] {
  color: var(--eink-selection-fg) !important;
  background-color: var(--eink-selection-bg) !important;
  border: 1px solid var(--eink-rule-strong);
  box-shadow: var(--eink-shadow-1);
}

/* User messages are a quiet paper card, not a chat-app pill. The surrounding
 * message row carries stable semantic attributes even though the generated
 * bubble class changes between DSH builds. */
html[data-dsh-theme-eink-retro]
  [data-dsh-part="message-row"][data-chat-flow-kind="user"]
  [data-time-hover-root="true"]
  > :first-child
  > :last-child {
  padding: 8px 12px !important;
  background-color: var(--eink-paper-bright) !important;
  border: 1px solid var(--eink-rule) !important;
  border-radius: var(--eink-radius-surface) !important;
  box-shadow: none !important;
}

/* Approval requests are important without needing a warm warning wash. The
 * labelled body gives us a stable hook for its surrounding native card. */
html[data-dsh-theme-eink-retro] :has(> [aria-label="\u5BA1\u6279\u8BE6\u60C5"]) {
  background-color: var(--eink-paper-bright) !important;
  border-color: var(--eink-rule-strong) !important;
}

html[data-dsh-theme-eink-retro] :has(> [aria-label="\u5BA1\u6279\u8BE6\u60C5"]) > :first-child {
  color: var(--eink-ink) !important;
  background-color: var(--eink-paper-raised) !important;
  border-bottom: 1px solid var(--eink-rule) !important;
}

html[data-dsh-theme-eink-retro] :has(> [aria-label="\u5BA1\u6279\u8BE6\u60C5"]) > :first-child > :first-child {
  color: var(--eink-ink) !important;
  background-color: var(--eink-ink) !important;
}

/* DSH renders the active turn label with a continuous blue shimmer. Replace
 * it with a two-frame local refresh: a short contrast drop, then settled ink.
 * The live clock remains stable and continues to communicate progress. */
html[data-dsh-theme-eink-retro] [data-chat-flow] > [role="status"] {
  color: var(--eink-ink-2);
  -webkit-text-fill-color: currentColor !important;
  background-image: none !important;
  background-clip: border-box !important;
  animation: eink-retro-turn-status-refresh 2.4s steps(1, end) infinite !important;
}

@keyframes eink-retro-turn-status-refresh {
  0%,
  72%,
  100% {
    color: var(--eink-ink-2);
  }

  73%,
  84% {
    color: var(--eink-rule-strong);
  }
}

@media (prefers-reduced-motion: reduce) {
  html[data-dsh-theme-eink-retro] [data-chat-flow] > [role="status"] {
    color: var(--eink-ink-2) !important;
    animation: none !important;
  }
}

html[data-dsh-theme-eink-retro] :where(
  [role="treeitem"][aria-selected="true"],
  [aria-current="true"],
  [aria-current="page"]
) {
  color: var(--eink-selection-fg) !important;
  background-color: var(--eink-selection-bg) !important;
  background-image: none !important;
  border-color: var(--eink-selection-bg) !important;
  box-shadow: none !important;
}

html[data-dsh-theme-eink-retro] :where(
  [role="treeitem"][aria-selected="true"],
  [aria-current="true"],
  [aria-current="page"]
) * {
  color: inherit !important;
}

/* Tabs are secondary navigation. A baseline and stronger label keep their
 * original footprint; inverse fills are reserved for primary selections. */
html[data-dsh-theme-eink-retro] [role="tab"][aria-selected="true"] {
  color: var(--eink-ink) !important;
  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent !important;
  box-shadow: inset 0 -2px 0 var(--eink-ink) !important;
  font-weight: 650 !important;
}

html[data-dsh-theme-eink-retro] [role="tab"][aria-selected="true"] * {
  color: inherit !important;
}

html[data-dsh-theme-eink-retro] ::selection {
  color: var(--eink-selection-fg);
  background: var(--eink-selection-bg);
}

html[data-dsh-theme-eink-retro] hr {
  height: 1px;
  background: var(--eink-rule);
  border: 0;
}

html[data-dsh-theme-eink-retro] :where(code, kbd, samp, pre) {
  font-family: var(--eink-font-mono);
}

html[data-dsh-theme-eink-retro] :where(pre, [class*="code-block" i]) {
  background-color: var(--dsw-alias-markdown-code-block);
  border: 1px solid var(--eink-rule);
  border-radius: 2px;
  box-shadow: inset 2px 0 0 var(--eink-rule-strong);
}

html[data-dsh-theme-eink-retro] code:not(pre code) {
  background-color: var(--dsw-alias-markdown-inline-code);
  border: 1px solid var(--eink-rule);
  border-radius: 2px;
}

html[data-dsh-theme-eink-retro] blockquote {
  border-left: 2px solid var(--eink-rule-strong);
  background: transparent;
  padding: 2px 0 2px 14px;
}

html[data-dsh-theme-eink-retro] blockquote > :first-child {
  margin-top: 0 !important;
}

html[data-dsh-theme-eink-retro] blockquote > :last-child {
  margin-bottom: 0 !important;
}

html[data-dsh-theme-eink-retro] table {
  border-collapse: collapse;
}

html[data-dsh-theme-eink-retro] :where(th, td) {
  border: 1px solid var(--eink-rule);
  padding: 8px 12px !important;
  vertical-align: top;
}

html[data-dsh-theme-eink-retro] th {
  background: var(--eink-paper-raised);
  font-weight: 650;
}

/* DSH mounts composer menus inside the conversation scrollport. Their
 * absolutely positioned listboxes must not contribute their popup height to
 * the message stream, otherwise opening one changes the stream scrollHeight
 * and makes its scrollbar/thumb jump. Keep gutter reservation local to the
 * popup viewport: reserving it on the outer scrollport creates a second empty
 * track beside views such as the trajectory table. */
html[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"] :has(> [role="listbox"]) {
  contain: layout;
}

html[data-dsh-theme-eink-retro] [role="listbox"] > * {
  scrollbar-gutter: stable;
}

/* The trajectory view already owns its vertical range in an inner table
 * scroller. Keep the otherwise empty outer scrollport from acquiring a second
 * scrollbar while a composer popup mounts or finishes unmounting. */
html[data-dsh-theme-eink-retro] [data-dsh-part="scrollport"]:has(
  section[aria-label="Trajectory timeline"]
) {
  overflow-y: hidden;
}

html[data-dsh-theme-eink-retro] * {
  scrollbar-color: var(--dsw-alias-scrollbar-bg-l2) var(--dsw-alias-scrollbar-bg-l1);
  scrollbar-width: thin;
}

html[data-dsh-theme-eink-retro] *::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

html[data-dsh-theme-eink-retro] *::-webkit-scrollbar-track,
html[data-dsh-theme-eink-retro] *::-webkit-scrollbar-corner {
  background: var(--dsw-alias-scrollbar-bg-l1);
}

html[data-dsh-theme-eink-retro] *::-webkit-scrollbar-thumb {
  background: var(--dsw-alias-scrollbar-bg-l2);
  border: 2px solid var(--dsw-alias-scrollbar-bg-l1);
  border-radius: 0;
}

/* Optional compatibility adapter: dsh-context v0.31.x. The data colors are
 * preserved in balanced mode and mapped to luminance only in immersive mode. */
html[data-dsh-theme-eink-retro="immersive"] .lc-root :is(
  .lc-stacked-seg,
  .lc-bar-stack > div,
  .lc-bar-up > div,
  .lc-bar-down > div,
  .lc-turn,
  .lc-chip i,
  .lc-detail-row i,
  .lc-node i,
  .lc-br-cat-row i,
  .lc-bar-fill,
  .lc-event-icon,
  .lc-kind
) {
  filter: grayscale(1) contrast(1.12);
}

html[data-dsh-theme-eink-retro] .lc-root :is(.lc-card, .lc-stat, .lc-br-cat, .lc-ts-card) {
  border-radius: 2px;
  box-shadow: none;
}

html[data-dsh-theme-eink-retro] .lc-root .lc-gran {
  border-radius: var(--eink-radius-control) !important;
}

html[data-dsh-theme-eink-retro] .lc-root :is(.lc-gran-on, .lc-rich-seg-on) {
  color: var(--eink-selection-fg);
  background: var(--eink-selection-bg);
}

/* Skill Center is an app surface even though its panel is not exposed as a
 * dialog. Replace the soft 60px float shadow with the shared hard elevation. */
html[data-dsh-theme-eink-retro]
  [data-dsh-plugin="skill-explorer"]
  [data-dsh-part="card"] {
  background-color: var(--eink-paper-bright) !important;
  border: 1px solid var(--eink-rule-strong) !important;
  box-shadow: var(--eink-shadow-2) !important;
}

/* Optional decorative adapters. User-authored images, attachments, previews,
 * canvas content and media are intentionally never filtered. */
html[data-dsh-theme-eink-retro="immersive"] img[src*="/api/skin-center/"],
html[data-dsh-theme-eink-retro="immersive"] [style*="/pet/"][style*="spritesheet"] {
  filter: grayscale(1) contrast(1.08);
}
`;

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
      description: "\u628A\u7B2C\u4E09\u65B9\u63D2\u4EF6\u7684\u6570\u636E\u6807\u8BB0\u3001\u88C5\u9970\u76AE\u80A4\u548C\u5BA0\u7269\u4E5F\u6620\u5C04\u4E3A\u5355\u8272\u7070\u9636\u3002"
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
