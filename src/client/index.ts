import React, { type ComponentType, type ReactElement } from "react";
import themeCss from "../theme.css";
import { EINK_TOKEN_SENTINEL, tokensForMode, type ThemeTokenOverrides } from "./tokens.js";

const STYLE_ID = "dsh-theme-eink-retro/style";
const TOKEN_SOURCE = "dsh-theme-eink-retro";
const ROOT_ATTRIBUTE = "data-dsh-theme-eink-retro";
const MODE_STORAGE_KEY = "dsh-theme-eink-retro:mode";
const ACTIVE_MODE_STORAGE_KEY = "dsh-theme-eink-retro:active-mode";
const MODE_EVENT = "dsh-theme-eink-retro:mode-change";
const THEME_STATE_KEY = "__dshEinkRetroThemeState__";
const BUILTIN_THEME_IDS = new Set(["system", "light", "dark"]);

type ThemeMode = "balanced" | "immersive" | "off";
type ActiveThemeMode = Exclude<ThemeMode, "off">;

interface ThemeSnapshot {
  preference: string;
  active?: { id?: string };
}

interface ModeViewState {
  effective: boolean;
  mode: ThemeMode;
}

interface ClientContext {
  effect: (effect: () => (() => void) | void, label?: string) => void;
  on: (event: "theme/change", handler: (snapshot: ThemeSnapshot) => void) => void;
  slots: {
    inject: (name: string, register: () => unknown) => void;
    register: (descriptor: Record<string, unknown>, component: unknown) => unknown;
  };
  theme: {
    getTheme: () => ThemeSnapshot;
    overrideTokens: (source: string, tokens: ThemeTokenOverrides) => () => void;
    setTheme: (id: string) => void;
  };
}

interface ThemeState {
  previousRootAttribute: string | null;
  style: HTMLStyleElement;
  users: number;
}

type ThemeGlobal = typeof globalThis & {
  [THEME_STATE_KEY]?: ThemeState;
};

const inject = ["slots", "theme"];

function readMode(): ThemeMode {
  const stored = window.localStorage.getItem(MODE_STORAGE_KEY);
  if (stored === "immersive" || stored === "off") return stored;
  return "balanced";
}

function readActiveMode(): ActiveThemeMode {
  const stored = window.localStorage.getItem(ACTIVE_MODE_STORAGE_KEY);
  if (stored === "immersive") return stored;

  const currentMode = readMode();
  return currentMode === "immersive" ? currentMode : "balanced";
}

function writeMode(mode: ThemeMode): void {
  window.localStorage.setItem(MODE_STORAGE_KEY, mode);
  if (mode !== "off") window.localStorage.setItem(ACTIVE_MODE_STORAGE_KEY, mode);
}

function isBuiltinTheme(snapshot: ThemeSnapshot): boolean {
  return BUILTIN_THEME_IDS.has(snapshot.preference);
}

function modeState(mode: ThemeMode, snapshot: ThemeSnapshot): ModeViewState {
  return { mode, effective: mode !== "off" && isBuiltinTheme(snapshot) };
}

function dispatchModeState(state: ModeViewState): void {
  window.dispatchEvent(new CustomEvent<ModeViewState>(MODE_EVENT, { detail: state }));
}

function applyMode(root: HTMLElement, mode: ThemeMode, snapshot: ThemeSnapshot): ModeViewState {
  const state = modeState(mode, snapshot);
  if (state.effective) root.setAttribute(ROOT_ATTRIBUTE, mode);
  else root.removeAttribute(ROOT_ATTRIBUTE);
  dispatchModeState(state);
  return state;
}

type SyncMode = (mode: ThemeMode, snapshot: ThemeSnapshot) => ModeViewState;

function createSettingsSection(ctx: ClientContext, syncMode: SyncMode): ComponentType {
  const options: Array<{ description: string; label: string; mode: ActiveThemeMode }> = [
    {
      mode: "balanced",
      label: "平衡模式（推荐）",
      description: "统一 DSH 壳层与控件，保留插件图表、告警、品牌和内容颜色。",
    },
    {
      mode: "immersive",
      label: "完全沉浸",
      description: "状态色、数据标记、装饰皮肤一并转为墨色，界面完全黑白，状态改用墨色深浅区分。",
    },
  ];

  return function EinkRetroSettings(): ReactElement {
    const [view, setView] = React.useState<ModeViewState>(() => modeState(readMode(), ctx.theme.getTheme()));

    React.useEffect(() => {
      const onModeChange = (event: Event) => {
        setView((event as CustomEvent<ModeViewState>).detail);
      };
      window.addEventListener(MODE_EVENT, onModeChange);
      return () => window.removeEventListener(MODE_EVENT, onModeChange);
    }, []);

    const selectMode = (mode: ThemeMode) => {
      writeMode(mode);
      let snapshot = ctx.theme.getTheme();
      if (mode !== "off" && !isBuiltinTheme(snapshot)) {
        ctx.theme.setTheme("system");
        snapshot = ctx.theme.getTheme();
      }
      setView(syncMode(mode, snapshot));
    };

    const setEnabled = (enabled: boolean) => {
      selectMode(enabled ? readActiveMode() : "off");
    };

    const enabled = view.mode !== "off";

    return React.createElement(
      "section",
      { className: "eink-retro-settings", "aria-labelledby": "eink-retro-settings-title" },
      React.createElement("h2", { id: "eink-retro-settings-title" }, "E‑Ink Retro"),
      React.createElement(
        "p",
        { className: "eink-retro-settings__intro" },
        "启用主题后选择覆盖范围。切换其他第三方皮肤时会自动暂停；回到 DSH 默认浅色、深色或跟随系统后恢复。",
      ),
      React.createElement(
        "label",
        { className: "eink-retro-settings__enabled" },
        React.createElement(
          "span",
          { className: "eink-retro-settings__enabled-copy" },
          React.createElement("span", { className: "eink-retro-settings__enabled-title" }, "启用主题"),
          React.createElement(
            "span",
            { className: "eink-retro-settings__enabled-description" },
            "关闭后移除全部 E‑Ink 颜色和组件覆盖。",
          ),
        ),
        React.createElement(
          "input",
          {
            type: "checkbox",
            className: "eink-retro-settings__enabled-input",
            checked: enabled,
            onChange: (event: { currentTarget: { checked: boolean } }) => setEnabled(event.currentTarget.checked),
          },
        ),
      ),
      enabled
        ? React.createElement(
            "div",
            { className: "eink-retro-settings__options", role: "radiogroup", "aria-label": "E‑Ink 主题模式" },
            ...options.map((option) =>
              React.createElement(
                "button",
                {
                  key: option.mode,
                  type: "button",
                  role: "radio",
                  "aria-checked": view.mode === option.mode,
                  className: "eink-retro-settings__option",
                  onClick: () => selectMode(option.mode),
                },
                React.createElement("span", { className: "eink-retro-settings__option-title" }, option.label),
                React.createElement("span", { className: "eink-retro-settings__option-description" }, option.description),
              ),
            ),
          )
        : null,
      !view.effective && view.mode !== "off"
        ? React.createElement(
            "p",
            { className: "eink-retro-settings__status", role: "status" },
            "当前正在使用另一套第三方皮肤，E‑Ink Retro 已暂时停用。",
          )
        : null,
    );
  };
}

function apply(ctx: ClientContext): void {
  let disposeTokens: (() => void) | null = null;
  let installedMode: ActiveThemeMode | null = null;
  let installingTokens = false;
  let releasingTokens = false;
  let syncTimer: number | null = null;

  const releaseTokens = (): void => {
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

  const installTokens = (mode: ActiveThemeMode): void => {
    installingTokens = true;
    try {
      disposeTokens = ctx.theme.overrideTokens(TOKEN_SOURCE, tokensForMode(mode));
      installedMode = mode;
    } finally {
      installingTokens = false;
    }
  };

  const syncMode: SyncMode = (mode, snapshot) => {
    const next = modeState(mode, snapshot);

    if (next.effective) {
      // Balanced and immersive ship different token layers, so a mode switch
      // has to swap the layer, not just the root attribute.
      const activeMode = mode as ActiveThemeMode;
      if (!installingTokens && (!disposeTokens || installedMode !== activeMode)) {
        releaseTokens();
        installTokens(activeMode);
      }
    } else {
      releaseTokens();
    }

    return applyMode(document.documentElement, mode, snapshot);
  };

  // The probe answers one question: is our token layer still attached? It
  // accepts either variant on purpose, so it never needs to work out which
  // theme is active — that is the token layer's job, and a second opinion here
  // could only ever disagree with it.
  const tokensAreApplied = (): boolean => {
    const tokenStyle = window.getComputedStyle(document.body ?? document.documentElement);
    const value = tokenStyle.getPropertyValue(EINK_TOKEN_SENTINEL.token).trim().toLowerCase();
    return value === EINK_TOKEN_SENTINEL.light || value === EINK_TOKEN_SENTINEL.dark;
  };

  const scheduleThemeSync = (): void => {
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
        // ThemeRuntime can rebuild the active stylesheet after another plugin
        // changes the theme. The old disposer then remains callable even though
        // its token layer is gone, so discard it and install a fresh layer.
        releaseTokens();
        syncMode(mode, snapshot);
      } else {
        applyMode(document.documentElement, mode, snapshot);
      }
    }, 0);
  };

  ctx.effect(() => {
    const root = document.documentElement;
    const themeGlobal = globalThis as ThemeGlobal;
    let state = themeGlobal[THEME_STATE_KEY];

    if (state) {
      state.users += 1;
      state.style.textContent = themeCss;
    } else {
      const style = document.createElement("style");
      style.dataset.plugin = "dsh-theme-eink-retro";
      style.dataset.pluginCss = STYLE_ID;
      style.textContent = themeCss;
      document.head.appendChild(style);

      state = {
        previousRootAttribute: root.getAttribute(ROOT_ATTRIBUTE),
        style,
        users: 1,
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
  ctx.slots.inject("settings.section", () =>
    ctx.slots.register(
      {
        name: "settings.section",
        id: "eink-retro",
        order: 11,
        label: "E‑Ink Retro",
      },
      SettingsSection,
    ),
  );
}

export { apply, inject };
