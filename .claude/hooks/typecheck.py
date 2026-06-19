#!/usr/bin/env python3
"""PostToolUse guard: type-check after edits to TS/TSX source.

Runs `npm run typecheck` (react-router typegen && tsc) when a .ts/.tsx file
under app/ is edited, so type and generated-route-type errors surface in the
edit loop instead of at build/deploy time. The project is small, so this is
fast. On failure, tsc output is fed back to Claude (exit 2).
"""
import json
import os
import subprocess
import sys

data = {}
try:
    data = json.load(sys.stdin)
except Exception:
    sys.exit(0)

path = (data.get("tool_input") or {}).get("file_path", "")
if not (path.endswith(".ts") or path.endswith(".tsx")):
    sys.exit(0)

project = os.environ.get("CLAUDE_PROJECT_DIR", os.getcwd())
try:
    proc = subprocess.run(
        ["npm", "run", "--silent", "typecheck"],
        cwd=project,
        capture_output=True,
        text=True,
        timeout=120,
    )
except Exception as e:
    print(f"typecheck hook could not run: {e}", file=sys.stderr)
    sys.exit(0)  # don't block on tooling failure

if proc.returncode != 0:
    print("✗ typecheck failed after edit:\n" + (proc.stdout + proc.stderr).strip(),
          file=sys.stderr)
    sys.exit(2)

sys.exit(0)
