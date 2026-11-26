@AGENTS.md

# Claude Code only

Everything project-wide is in `AGENTS.md` (imported above). This section holds Claude Code mechanics only.

- **Hooks** (`.claude/settings.json`) run after Edit/Write: `locale-guard.py` flags US spelling in prose files; `typecheck.py` runs `npm run typecheck` on `.ts/.tsx` edits. If one fails, fix the cause; don't bypass it.
- **Skills** (personal, via the git-ignored `.claude/skills` symlink; absent on other machines): `frontend-design` for UI, `copywriting` / `malaysia-copywriting` for copy, `seo-audit` for SEO/AEO, `web-perf` for performance, `design-review` after a build, `superpowers:verification-before-completion` before claiming done.
- **Browser checks:** use the Chrome DevTools MCP for the viewport checks in `AGENTS.md`.
- **Subagents:** send independent ones in one message; give agents that touch the same files `isolation: "worktree"`.
- **GitHub:** this is a personal repo — `gh auth status` must show the `syedmhdarif` login.
