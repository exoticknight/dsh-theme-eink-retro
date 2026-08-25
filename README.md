# E‑Ink Retro for DeepSeek Harness

[English](README.md) | [简体中文](README.zh-CN.md)

E‑Ink Retro is a client-side theme plugin for DeepSeek Harness. Its design language is paper and ink: neutral gray surfaces, true black type, hard offset shadows, square corners, and selection states that flip between black and white. The geometry draws on classic Macintosh and lands as a modern, quiet interface.

## Who it's for

- People who spend long hours in DSH and want an interface that stays out of the way
- People who prefer paper-and-ink aesthetics: gray surfaces, black text, restrained color
- People who appreciate classic Macintosh geometry and want it in a modern app

## What changes

- Paper-and-ink palette: light `#f4f4f4` surfaces with `#161616` ink, dark `#181818` with `#f4f4f4`; kept strictly neutral
- One corner-radius scale: 1px on chips and switch parts, 2px on controls and panels
- Hard offset shadows at 1px and 2px on floating layers, flat like print; controls carry a frame instead of a shadow
- Selection states flip fully between black and white
- Switch drawn as a rectangular track with a square knob
- Links are ink, with a rule under prose links so they stay identifiable without hue
- Native checkboxes, radios, ranges, and progress bars follow the ink accent instead of the OS one
- One focus frame for everything reachable by keyboard: links, menu options, tree items, switches, and native fields
- Stable scroll areas in conversation overlays and trajectory views
- Adapters for the composer, message editing, approvals, plugin settings cards, workspace search, trajectory, Skill Center, and the dsh-context plugin
- Explicit high-contrast and print treatments
- Unloading removes every injected token and style

## Modes

| Mode | Description |
| --- | --- |
| **Balanced** (default) | Applies the paper-and-ink shell and control language. Keeps semantic colors where they carry meaning: status, chart, brand, and content colors are preserved in low saturation. |
| **Immersive** | Fully monochrome. The remaining status hues are replaced by an ink ramp — error carries the most ink, warn sits in the middle, success is the quietest — and verified decorative and compatibility surfaces are grayscaled. User media (images, attachments, video) stays untouched. |
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
Low-saturation semantic colors keep status information distinguishable by hue. Immersive mode is fully monochrome and moves that job to lightness: each status step holds at least 4.9:1 against its own background, so nothing becomes unreadable on the way.

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

- `src/client/tokens.ts`: the balanced token values and the immersive ink-ramp overlay
- `src/theme.css`: design tokens, component geometry, interaction states, and compatibility adapters
- `src/client/index.ts`: mode storage, token-layer installation, DSH theme coordination, settings UI, and cleanup
- `tests/theme.test.mjs`: package and theme-boundary regression checks

Conventions:

- Keep new CSS scoped under `html[data-dsh-theme-eink-retro]`. The one exception is this plugin's own settings section, which has to look right while the theme is off and is namespaced by `.eink-retro-settings` instead.
- Take colors from the `--eink-*` tokens, and define new ones by deriving from the official DSH token layer. The theme has no dark-mode detector of its own, and adding one would give it two sources of truth.
- Pick a line by role: `--eink-rule` for separators and static surfaces, `--eink-rule-strong` for anything operable or floating. Shadows are `--eink-shadow-1` for attached popups and `--eink-shadow-2` for floating layers; controls stay flat.
- Put monochrome-only adapters under the `immersive` attribute selector, and status color changes in the immersive token overlay rather than in a filter.
- Avoid global media filters. Selectors tied to generated class names are allowed only as commented compatibility adapters for surfaces that expose no stable hook.
- A selector that matches a localized accessible name must match it by substring, list every locale we support, and pair it with a structural guard. The tests reject exact-match selectors on a localized string.

## License

[MIT](LICENSE)
