# Contributing

Bug reports and focused pull requests are welcome.

Before opening an issue, disable E-Ink Retro and confirm whether the problem still occurs. If it does, report it to DeepSeek Harness instead. For theme-specific problems, include the DSH version, operating system, browser, selected mode, reproduction steps, and a screenshot with private information removed.

For code changes:

1. Install dependencies with `npm ci`.
2. Make the smallest change that resolves the problem.
3. Add or update tests when behavior changes.
4. Run `npm run check`.
5. Confirm `git diff --exit-code -- lib` exits successfully after the build.

Please keep generated files in `lib/` synchronized with their sources.
