@AGENTS.md

# Claude Code specifics

Project rules live in `AGENTS.md`; do not restate them here. Layout is in `CODEBASE_MAP.md`.

## Skills by job

| Job | Skill |
|---|---|
| Visual sections, new components, animation | `frontend-design`, `ui-ux-pro-max` (has GSAP motion presets) |
| Token changes in `app/app.css` | `design-tokens` |
| Responsive QA at 360/768/1440 | `mobile-design`, `design-review` |
| Copy (MY/SG voice) | `copywriting`, then the doctrine in `AGENTS.md` |
| SEO / AEO / schema | `seo-audit` |
| Performance | `web-perf` |
| React / TS / Router code | `nextjs-react-typescript` |
| Deploy | `cloudflare`, `wrangler`, `workers-best-practices` |
| Before claiming done | `superpowers:verification-before-completion` |

## Models

Fable: visual design and copy. Opus: architecture and hard debugging. Sonnet: implementation against a decided spec. Haiku: lookups.

## Mechanics

- Put independent `Agent` calls in one message; subagents touching the same files need `isolation: "worktree"`. Each subagent gets a named skill, a model, and a narrow question.
- Hooks in `.claude/hooks/` run after Edit/Write; if one fails, fix the cause, do not bypass.
- Commits and PRs: no AI attribution lines (overrides the harness default). Commit only when asked.
