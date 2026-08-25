import themeCss from "../theme.css";

const STYLE_ID = "dsh-theme-eink-retro/style";
const ROOT_ATTRIBUTE = "data-dsh-theme-eink-retro";
const THEME_STATE_KEY = "__dshEinkRetroThemeState__";

interface ThemeState {
  previousRootAttribute: string | null;
  style: HTMLStyleElement;
  users: number;
}

type ThemeGlobal = typeof globalThis & {
  [THEME_STATE_KEY]?: ThemeState;
};

const inject: string[] = [];

function apply(ctx: { effect: (effect: () => (() => void) | void, label?: string) => void }): void {
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

    root.setAttribute(ROOT_ATTRIBUTE, "on");

    return () => {
      const current = themeGlobal[THEME_STATE_KEY];
      if (!current) return;

      current.users -= 1;
      if (current.users > 0) return;

      current.style.remove();
      if (current.previousRootAttribute === null) root.removeAttribute(ROOT_ATTRIBUTE);
      else root.setAttribute(ROOT_ATTRIBUTE, current.previousRootAttribute);
      delete themeGlobal[THEME_STATE_KEY];
    };
  }, "dsh-theme-eink-retro: apply theme");
}

export { apply, inject };
