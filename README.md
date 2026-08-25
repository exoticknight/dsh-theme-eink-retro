# E-Ink Retro for DeepSeek Harness

[English](README.md) | [简体中文](README.zh-CN.md)

E-Ink Retro is a client-side theme plugin for DeepSeek Harness (DSH). It gives the app a clear, restrained interface built from neutral surfaces, black-and-white controls, crisp borders, and compact geometry.

The theme keeps DSH's layout and workflows intact. It changes semantic colors and verified component styles. It does not turn DSH into a terminal UI or reproduce a vintage desktop. Classic Macintosh design informs the hierarchy and control shapes, while the result remains suited to a modern application.

## What the theme changes

- Neutral light and dark palettes without a beige paper tint or green cast
- Square, low-radius controls and surfaces
- Clear black-and-white selected states for buttons, tabs, and switches
- Consistent focus frames for the composer, search fields, inputs, and selects
- Stable scroll ownership for conversation overlays and trajectory views
- Focused adapters for DSH's conversation, context, settings, task board, SSH, skill center, plugin market, and workshop screens
- Automatic cleanup of injected tokens and styles when the plugin unloads

## Modes

| Mode | Intended use | Color treatment |
| --- | --- | --- |
| **Balanced** | Default. Use it for daily work and mixed plugin content. | Applies the E-Ink shell and control language while preserving meaningful status, chart, brand, and content colors. |
| **Immersive** | Use it when you want a stronger monochrome environment. | Adds grayscale treatment only to verified decorative and compatibility surfaces. User media stays unchanged. |
| **Off** | Temporarily disable the theme with the native checkbox in settings. | Removes the theme's token and CSS overrides. |

Balanced and Immersive work with DSH's built-in System, Light, and Dark themes. If you select another third-party theme, E-Ink Retro yields to it. Returning to a built-in theme restores your selected E-Ink mode.

## Install from source

Requirements:

- Node.js 20 or newer
- A working DSH installation with the `web` profile

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

Open **Settings → E-Ink Retro**. Use the native checkbox to enable or disable the theme. When enabled, choose Balanced or Immersive. The selection is stored in the browser for the current DSH profile.

Start with Balanced. Switch to Immersive when the active screens and plugins look correct in monochrome. Clear the checkbox when comparing behavior with the base DSH interface.

## Compatibility boundaries

The theme targets DSH's semantic token system and verified public component surfaces. Components that use DSH tokens inherit the palette with little or no special handling.

Some content stays outside the theme's control:

- Images, attachments, video, canvas output, and iframe content are not globally filtered.
- Native select menus may use operating-system styling after they open.
- Plugins with hard-coded colors, Shadow DOM, or isolated rendering may only inherit part of the theme.
- Balanced mode keeps low-saturation semantic colors when removing them would hide status or meaning.

These boundaries prevent the theme from damaging content or changing another plugin's interface without a verified adapter.

## Development

Run the full local check before submitting a change:

```sh
npm run check
```

This command runs the TypeScript check, regression tests, and production build. Build output is written to `lib/index.js` and `lib/client.js`.

The main implementation files are:

- `src/client/tokens.ts`: light and dark semantic token values
- `src/theme.css`: component geometry, interaction states, and compatibility adapters
- `src/client/index.ts`: mode storage, DSH theme coordination, settings UI, and cleanup
- `tests/theme.test.mjs`: package and theme-boundary regression checks

Keep new CSS scoped under `html[data-dsh-theme-eink-retro]`. Put monochrome-only adapters under the `immersive` attribute selector. Avoid global media filters and selectors tied to generated class hashes.

## License

[MIT](LICENSE)
