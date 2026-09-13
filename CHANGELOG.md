# Changelog

All notable changes to this project are documented here.

## [0.3.1] - 2026-09-13

### Fixed

- The no-workspace picker drops the host's 22px dashed mask ring: the composer is a solid rectilinear paper panel in that state, as it is everywhere else. The trigger moved from a readonly editor to a contenteditable text surface, so the picker is now matched by that shared role plus its menu attribute instead of by one build's element.

## [0.3.0] - 2026-09-13

### Fixed

- Shell panes, dividers, and the conversation scroll area follow the current `data-slot` anchors and `data-conversation-scroll` instead of the removed `data-dsh-surface` and `data-dsh-part` hooks.
- The composer input, popups, code blocks, context and prompt bodies, and user message bubbles each keep a single frame instead of drawing a second box inside their own surface.
- Composer popups keep their surface on the floating container with the viewport inside left bare, and a control that mounts its menu inside the trigger wrapper no longer paints that wrapper instead of the menu.
- Code blocks are framed on all four sides; the ink spine that a banner then hid is gone.
- Settings plugin cards hang off their slot alone; the removed settings surface anchor no longer gates them.
- The composer is a paper panel with one rule and no blurred drop shadow, and its no-workspace picker trigger matches the current readonly editor.

### Changed

- Tab hover strengthens the host's bottom rule instead of filling the tab, across every tab set.
- Tool-call rows, sidebar section headers, the conversation header's split control, settings steppers, and resize separators take the theme's rectilinear radius.
- Round markers contributed by plugins are squared like the theme's own state dots.

### Added

- Compatibility adapters for the usage widget and the desktop panel family: rectilinear geometry, opaque surfaces with hard elevation, and immersive-mode grayscale coverage for their decorative data hues.

## [0.2.1] - 2026-08-29

### Fixed

- Skill management switches use the paper-and-ink switch treatment across both DSH switch structures.
- Selected tabs keep their native underline without an additional gray fill.
- The current DSH composer input structure keeps one outer frame in resting and focus states.

## [0.2.0] - 2026-08-28

### Added

- English and Simplified Chinese theme settings that follow page and browser language changes.

### Changed

- Question choices use a quiet selected row with an inverse number or check marker.
- Session tabs retain the DSH selected underline with paper-and-ink hover and focus states.

### Fixed

- Custom question answers use one complete input frame without a second textarea border.

## [0.1.0] - 2026-08-26

### Added

- Balanced, Immersive, and Off theme modes.
- Paper surfaces, near-black typography, hard offset shadows, and compact control geometry.
- Keyboard focus treatment for adapted interactive controls.
- Compatibility styling for verified DSH client surfaces.
- Local settings for theme enablement and mode selection.
- English and Simplified Chinese documentation.

[0.2.1]: https://github.com/exoticknight/dsh-theme-eink-retro/releases/tag/v0.2.1
[0.2.0]: https://github.com/exoticknight/dsh-theme-eink-retro/releases/tag/v0.2.0
[0.1.0]: https://github.com/exoticknight/dsh-theme-eink-retro/releases/tag/v0.1.0
