# Issue tracker: GitHub

Issues and specs for this repo live as GitHub issues. Use the `gh` CLI for all operations.

## Conventions

- Create issues with `gh issue create`.
- Read issues with `gh issue view <number> --comments`.
- List issues with `gh issue list`.
- Comment with `gh issue comment`.
- Apply labels with `gh issue edit`.
- Close issues with `gh issue close`.

Infer the repository from the GitHub remote. Pull requests are not treated as a triage request surface.

## Wayfinding operations

Wayfinder maps are GitHub issues labelled `wayfinder:map`. Child tickets use `wayfinder:research`, `wayfinder:prototype`, `wayfinder:grilling`, or `wayfinder:task`. Use GitHub sub-issues and native issue dependencies where available.
