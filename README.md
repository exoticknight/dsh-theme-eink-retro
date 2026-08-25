# E‑Ink Retro for DeepSeek Harness

[English](README.md) | [简体中文](README.zh-CN.md)

E‑Ink Retro is a client-side theme plugin for DeepSeek Harness. Its design language is paper and ink: neutral gray surfaces, true black type, hard offset shadows, square corners, and selection states that flip between black and white. The geometry draws on classic Macintosh and lands as a modern, quiet interface.

## Who it's for

- People who spend long hours in DSH and want an interface that stays out of the way
- People who prefer paper-and-ink aesthetics: gray surfaces, black text, restrained color
- People who appreciate classic Macintosh geometry and want it in a modern app

## What changes

- Paper-and-ink palette: light `#f4f4f4` surfaces with `#161616` ink, dark `#181818` with `#f4f4f4`; kept strictly neutral
- 2px corner radius on controls and panels
- Hard offset shadows at 1px and 2px, flat like print
- Selection states flip fully between black and white
- Switch drawn as a rectangular track with a square knob
- One focus frame shared by the composer, search fields, inputs, and selects
- Stable scroll areas in conversation overlays and trajectory views
- Verified adapters for conversation, context, settings, task board, SSH, skill center, plugin market, and workshop screens
- Unloading removes every injected token and style

## Modes

| Mode | Description |
| --- | --- |
| **Balanced** (default) | Applies the paper-and-ink shell and control language. Keeps semantic colors where they carry meaning: status, chart, brand, and content colors are preserved in low saturation. |
| **Immersive** | Adds grayscale treatment to verified decorative and compatibility surfaces only. User media (images, attachments, video) stays untouched. |
| **Off** | Removes all theme tokens and CSS overrides via the native settings checkbox. The plugin stays installed. |

Both modes work with DSH's built-in System, Light, and Dark themes. When a third-party theme is selected, E‑Ink Retro suspends itself; switching back to a built-in theme restores your previous mode.

## Install from source

Requirements:

- Node.js 20 or newer
- A DSH installation with the `web` profile

Clone or download this repository, then run:

```sh
npm install
npm run build
```

Link the built plugin into DSH. Replace the example path with the absolute path to this repository:

```sh
dsh plugin --profile web add link:/absolute/path/to/dsh-theme-eink-retro
```

Windows example:

```powershell
dsh plugin --profile web add link:C:/path/to/dsh-theme-eink-retro
```

Reload DSH after linking the plugin.

## Use

Open **Settings → E‑Ink Retro**. Enable the theme with the native checkbox, then choose Balanced or Immersive. The selection is stored in the browser for the current DSH profile.

Start with Balanced. Switch to Immersive once your active screens and plugins look right in monochrome. Clear the checkbox to compare against the stock DSH interface.

## Compatibility boundaries

The theme works through DSH's semantic token system and verified public component surfaces. Components built on DSH tokens pick up the palette directly.

The theme styles only the surfaces it has verified. What stays untouched:

- Images, attachments, video, canvas output, and iframe content keep their original rendering.
- Native select menus may use OS styling once opened.
- Plugins with hard-coded colors, Shadow DOM, or isolated rendering inherit only part of the theme.
- Balanced mode keeps low-saturation semantic colors where they carry status or meaning.

## FAQ

**Why does Balanced mode keep colors?**
Low-saturation semantic colors keep status information distinguishable. Immersive mode provides the fully monochrome look.

**Where does the Macintosh influence come in?**
The geometry and inverted selection follow classic Macintosh; the layout and behavior stay modern DSH.

**Will it affect plugin content?**
The theme styles only verified surfaces. Images, attachments, video, canvas, and iframes keep their original rendering; plugins using Shadow DOM or hard-coded colors inherit only part of the theme.

**Does it have a performance cost?**
The theme ships as one stylesheet plus a token override, synced only when the theme changes.

**Does uninstalling clean up after itself?**
Unloading removes the injected style node and token overrides.

## Development

Run the full local check before submitting a change:

```sh
npm run check
```

This runs the TypeScript check, regression tests, and production build. Build output goes to `lib/index.js` and `lib/client.js`.

The main implementation files are:

- `src/client/tokens.ts`: light and dark semantic token values
- `src/theme.css`: component geometry, interaction states, and compatibility adapters
- `src/client/index.ts`: mode storage, DSH theme coordination, settings UI, and cleanup
- `tests/theme.test.mjs`: package and theme-boundary regression checks

Keep new CSS scoped under `html[data-dsh-theme-eink-retro]`. Put monochrome-only adapters under the `immersive` attribute selector. Avoid global media filters and selectors tied to generated class hashes.

## License

[MIT](LICENSE)
