# E-Ink Retro v0.3.0

This release follows the DSH 0.1.5 client. The hook layer the theme was built on
(`data-dsh-surface`, `data-dsh-part`, `data-dsh-plugin`) is gone from that build,
so every affected rule now uses a hook the current client actually emits, and the
surfaces reported against a live `0.1.5-rc.2` profile are repaired.

## Changes

- Shell panes, dividers, the composer seat, settings plugin cards, and the
  conversation scroll area follow the current `data-slot` anchors,
  `data-conversation-scroll`, and `data-composer-seat`. The removed hooks stay in
  the selectors as fallbacks for older builds.
- One frame per surface: the composer is a paper panel with a single rule and no
  blurred shadow, composer popups keep their surface on the floating container,
  code blocks are framed on all four sides with a squared banner, context and
  prompt bodies keep one surface, and user messages are quiet paper cards.
- Tab hover strengthens the host's bottom rule instead of filling the tab.
- Tool-call rows, sidebar section headers, the conversation header's split
  control, settings steppers, and resize separators take the theme's rectilinear
  radius, and round markers contributed by plugins are squared like the theme's
  own state dots.
- The usage widget and the desktop panel family get rectilinear geometry,
  opaque surfaces with hard elevation, and immersive-mode grayscale coverage for
  their decorative data hues.

## Install or update

```sh
dsh plugin --profile web add github:exoticknight/dsh-theme-eink-retro#v0.3.0
```

Restart DSH Web after changing versions, then open **Settings → E-Ink Retro**.
