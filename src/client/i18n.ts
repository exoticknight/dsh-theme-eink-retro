type Locale = "en" | "zh-CN";

interface ThemeModeMessages {
  description: string;
  label: string;
}

interface Messages {
  enabledDescription: string;
  enabledTitle: string;
  immersive: ThemeModeMessages;
  intro: string;
  modeGroupLabel: string;
  pausedStatus: string;
  balanced: ThemeModeMessages;
}

const messages: Record<Locale, Messages> = {
  en: {
    intro:
      "E‑Ink Retro pauses while another third-party theme is active. Re-enabling it or changing its mode switches DSH back to Follow system.",
    enabledTitle: "Enable theme",
    enabledDescription: "Turning this off removes all E‑Ink colors and component overrides.",
    modeGroupLabel: "E‑Ink theme mode",
    balanced: {
      label: "Balanced (recommended)",
      description: "Applies the paper-and-ink shell and controls while preserving semantic status colors and user content.",
    },
    immersive: {
      label: "Fully immersive",
      description: "Maps supported surfaces and compatibility layers to an ink ramp while leaving images, attachments, and video unchanged.",
    },
    pausedStatus: "Another third-party theme is active, so E‑Ink Retro is temporarily paused.",
  },
  "zh-CN": {
    intro: "切换其他第三方皮肤时，E‑Ink Retro 会暂停。重新启用或切换 E‑Ink 模式时，DSH 会回到跟随系统。",
    enabledTitle: "启用主题",
    enabledDescription: "关闭后移除全部 E‑Ink 颜色和组件覆盖。",
    modeGroupLabel: "E‑Ink 主题模式",
    balanced: {
      label: "平衡模式（推荐）",
      description: "统一 DSH 壳层与控件，保留承载状态含义的语义色和用户内容原色。",
    },
    immersive: {
      label: "完全沉浸",
      description: "将已适配的界面与兼容层转为墨色阶梯，图片、附件和视频保持原样。",
    },
    pausedStatus: "当前正在使用另一套第三方皮肤，E‑Ink Retro 已暂时停用。",
  },
};

function localeForLanguageTag(languageTag: string): Locale {
  try {
    const locale = new Intl.Locale(languageTag.trim());
    if (
      locale.language === "zh" &&
      (locale.script === "Hans" || (!locale.script && (!locale.region || locale.region === "CN" || locale.region === "SG")))
    ) {
      return "zh-CN";
    }
  } catch {
    // Invalid or missing language tags use the same English fallback as unsupported locales.
  }
  return "en";
}

function detectLocale(documentLanguage: string, browserLanguages: readonly string[]): Locale {
  const preferredLanguage = documentLanguage.trim() || browserLanguages.find((language) => language.trim()) || "en";
  return localeForLanguageTag(preferredLanguage);
}

function messagesForLocale(locale: Locale): Messages {
  return messages[locale];
}

function detectCurrentLocale(): Locale {
  return detectLocale(document.documentElement.lang, [...navigator.languages, navigator.language]);
}

function watchLocale(onChange: (locale: Locale) => void): () => void {
  const updateLocale = () => onChange(detectCurrentLocale());
  const observer = new MutationObserver(updateLocale);
  observer.observe(document.documentElement, { attributeFilter: ["lang"], attributes: true });
  window.addEventListener("languagechange", updateLocale);

  return () => {
    observer.disconnect();
    window.removeEventListener("languagechange", updateLocale);
  };
}

export {
  detectCurrentLocale,
  detectLocale,
  localeForLanguageTag,
  messagesForLocale,
  watchLocale,
  type Locale,
  type Messages,
};
