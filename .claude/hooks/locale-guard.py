#!/usr/bin/env python3
"""PostToolUse guard: flag US-coded English in prose/content files.

Enforces the MY/SG British-English doctrine from AGENTS.md. Advisory only —
the edit has already landed; this surfaces violations as feedback so they get
fixed before commit. Scoped to prose-bearing files and a conservative word list
so it does NOT trip on CSS `color`, Tailwind classes, or code identifiers.
"""
import json
import re
import sys

# Only scan files that carry user-facing prose / SEO copy.
PROSE_PATH_RE = re.compile(
    r"(app/content/|app/routes/|app/root\.tsx$|"
    r"public/llms.*\.txt$|public/sitemap\.xml$|public/site\.webmanifest$|"
    r"\.md$|\.mdx$)"
)

# (pattern, suggestion). Word-bounded, case-insensitive. Deliberately excludes
# high-false-positive code words like `color`/`center` which appear in CSS/JSX.
RULES = [
    (r"\boptimiz(e|es|ed|ing|ation)\b", "use British -ise/-isation (optimise, optimisation)"),
    (r"\bbehavior\b", "use 'behaviour'"),
    (r"\borganiz(e|es|ed|ing|ation)\b", "use British -ise/-isation (organise, organisation)"),
    (r"\bspecializ(e|es|ed|ing|ation)\b", "use 'specialise / specialising'"),
    (r"\bcustomiz(e|es|ed|ing|ation)\b", "use 'customise / customisation'"),
    (r"\banaly(z|ze|zed|zing)\b", "use British 'analyse / analysed'"),
    (r"\bcatalog\b", "use 'catalogue'"),
    (r"\blicense\b(?=\s+(to|holder|number)|\.)", "noun is 'licence' (verb stays 'license')"),
    (r"\bgotten\b", "avoid 'gotten' — use 'got'"),
    (r"\bvacation\b", "use 'leave' or 'holiday'"),
    (r"\bresume\b", "use 'CV' (unless the verb 'resume')"),
    (r"\bzip code\b", "use 'postcode'"),
    (r"\bcell phone\b", "use 'mobile'"),
    (r"\bbi-?weekly\b", "use 'fortnightly / two-weekly'"),
    (r"\bsick days\b", "use 'MCs (medical certificates)'"),
    (r"\belevator\b", "use 'lift'"),
    # US month-day-year dates in prose, e.g. "May 18, 2026" — prefer DMY "18 May 2026".
    (r"\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\b",
     "use DMY date format (e.g. '18 May 2026')"),
]


def main():
    try:
        data = json.load(sys.stdin)
    except Exception:
        sys.exit(0)

    path = (data.get("tool_input") or {}).get("file_path", "")
    if not path or not PROSE_PATH_RE.search(path):
        sys.exit(0)

    try:
        with open(path, "r", encoding="utf-8") as f:
            lines = f.readlines()
    except Exception:
        sys.exit(0)

    hits = []
    for n, line in enumerate(lines, 1):
        for pat, hint in RULES:
            for m in re.finditer(pat, line, re.IGNORECASE):
                hits.append((n, m.group(0), hint, line.strip()))

    if not hits:
        sys.exit(0)

    out = [f"⚠ Locale guard: {len(hits)} US-coded English issue(s) in {path}",
           "MY/SG doctrine wants British English (AGENTS.md). Please fix:"]
    for n, found, hint, ctx in hits[:25]:
        out.append(f"  L{n}: \"{found}\" → {hint}")
        out.append(f"       {ctx[:100]}")
    print("\n".join(out), file=sys.stderr)
    sys.exit(2)  # exit 2 → stderr is fed back to Claude as actionable feedback


if __name__ == "__main__":
    main()
