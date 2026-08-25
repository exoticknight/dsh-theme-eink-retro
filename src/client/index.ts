import themeCss from "../theme.css";

const STYLE_ID = "dsh-theme-eink-retro/style";
const ROOT_ATTRIBUTE = "data-dsh-theme-eink-retro";

const inject: string[] = [];

function apply(ctx: { effect: (effect: () => (() => void) | void, label?: string) => void }): void {
  ctx.effect(() => {
    const root = document.documentElement;
    const previous = root.getAttribute(ROOT_ATTRIBUTE);
    const existing = document.querySelector<HTMLStyleElement>(
      `style[data-plugin-css="${STYLE_ID}"]`,
    );
    const style = existing ?? document.createElement("style");

    root.setAttribute(ROOT_ATTRIBUTE, "on");
    style.dataset.plugin = "dsh-theme-eink-retro";
    style.dataset.pluginCss = STYLE_ID;
    style.textContent = themeCss;
    if (!existing) document.head.appendChild(style);

    return () => {
      style.remove();
      if (previous === null) root.removeAttribute(ROOT_ATTRIBUTE);
      else root.setAttribute(ROOT_ATTRIBUTE, previous);
    };
  }, "dsh-theme-eink-retro: apply theme");
}

export { apply, inject };
