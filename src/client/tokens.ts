export interface ThemeTokenPair {
  dark: string;
  light: string;
}

export type ThemeTokenOverrides = Record<string, ThemeTokenPair>;

const pair = (light: string, dark: string): ThemeTokenPair => ({ light, dark });

/**
 * Probe used to detect whether our token layer is still attached after another
 * plugin rebuilds the active stylesheet. It must be a token whose value is the
 * same in both modes, otherwise switching to immersive would read as a lost
 * layer and trigger a needless reinstall on every theme event.
 */
export const EINK_TOKEN_SENTINEL = {
  token: "--dsw-alias-bg-layer-3",
  light: "#d2d2d2",
  dark: "#121212",
} as const;

/**
 * Official DSH semantic theme tokens only. The balanced layer deliberately
 * preserves low-saturation semantic colors and never reaches into third-party
 * token namespaces.
 */
export const EINK_BALANCED_TOKENS: ThemeTokenOverrides = {
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
  "--dsw-shadow-lv3-blur": pair("none", "none"),
};

/**
 * Immersive overlay. Balanced keeps the low-saturation status hues; immersive
 * replaces them with an ink ramp so the whole interface is genuinely
 * monochrome. Status stays readable through lightness instead of hue: error
 * carries the most ink, warn sits in the middle, success is the quietest.
 * Every step holds at least 4.9:1 against its own background.
 */
const EINK_IMMERSIVE_OVERLAY: ThemeTokenOverrides = {
  "--dsw-alias-interactive-bg-hover-danger": pair("#1616161a", "#f4f4f426"),
  "--dsw-alias-state-error-primary": pair("#161616", "#f4f4f4"),
  "--dsw-alias-state-error-secondary": pair("#3a3a3a", "#dedede"),
  "--dsw-alias-state-success-primary": pair("#5f5f5f", "#a8a8a8"),
  "--dsw-alias-state-success-secondary": pair("#6a6a6a", "#9a9a9a"),
  "--dsw-alias-state-success-tertiary": pair("#e0e0e0", "#303030"),
  "--dsw-alias-state-warn-primary": pair("#4a4a4a", "#c8c8c8"),
};

export const EINK_IMMERSIVE_TOKENS: ThemeTokenOverrides = {
  ...EINK_BALANCED_TOKENS,
  ...EINK_IMMERSIVE_OVERLAY,
};

/** Back-compat alias for the default (balanced) token layer. */
export const EINK_TOKENS = EINK_BALANCED_TOKENS;

export function tokensForMode(mode: "balanced" | "immersive"): ThemeTokenOverrides {
  return mode === "immersive" ? EINK_IMMERSIVE_TOKENS : EINK_BALANCED_TOKENS;
}
