# E-Ink Retro v0.3.2

This patch release adapts E-Ink Retro to DSH 0.1.7-rc.1 and fixes several interaction details.

## Changes

- Update theme hooks for the current DSH surfaces and remove the obsolete `@deepseek-ai/dsh-client-runtime` injection.
- Keep the user-message copy tooltip legible, square the right-sidebar guide card, and position switch thumbs independently of upstream transforms.
- Show horizontal scrolling on wide Markdown tables only when their content overflows.
- Keep popup options stationary while pressed so they do not create a transient scrollbar at the edge of a scroll viewport.

## Install or update

```sh
dsh plugin --profile web add github:exoticknight/dsh-theme-eink-retro#v0.3.2
```

Restart DSH Web after changing versions, then open **Settings → E-Ink Retro**.
