# E-Ink Retro v0.3.1

This is a one-fix release for the composer state before a Workspace is selected.

## Changes

- Before a Workspace exists, DSH turns the resident composer into the picker
  trigger and paints a 22px dashed ring over its real border with an SVG mask on
  the card's `::after`. The mask keeps the host's radius whatever the card is set
  to, and v0.3.0 looked for that trigger on a readonly editor that the current
  client no longer renders, so the ring stayed on screen inside an otherwise
  rectilinear theme.
- The picker state is now matched by the composer text surface's role plus its
  menu attribute, which covers both the readonly textarea an older client shipped
  and the contenteditable text surface the current one renders, and which the
  mode buttons cannot satisfy because they only mount once a Workspace exists.
- In that state the card is the same solid paper panel used everywhere else: one
  strong rule, the theme's rectilinear radius, no shadow, and no ring. The editor
  inside it takes no frame of its own and no native text selection, since its only
  copy is the placeholder painted under it.

## Install or update

```sh
dsh plugin --profile web add github:exoticknight/dsh-theme-eink-retro#v0.3.1
```

Restart DSH Web after changing versions, then open **Settings → E-Ink Retro**.
