#!/usr/bin/env bash
# Build + render every topic listed in ready.txt (one per line) that has no MP4 yet. Re-reads the list
# after each episode, so topics can be appended while it runs. Stops when ready.txt contains "STOP".
cd "$(dirname "$0")"; ROOT="$(cd ../.. && pwd)"
export NODE_PATH="${NODE_PATH:-$(npm root -g)}"
while true; do
  next=""
  while read -r T; do
    [ -z "$T" ] && continue; [ "$T" = STOP ] && continue
    [ -f "$ROOT/public/videos/$T.mp4" ] && continue
    next="$T"; break
  done < ready.txt
  if [ -z "$next" ]; then grep -qx STOP ready.txt && exit 0; sleep 20; continue; fi
  T="$next"; echo "=== $T start $(date +%T)"
  if ! python3 lint_episode.py "episodes/$T.py" > "out-lint-$T.txt" 2>&1; then echo "LINT FAIL $T"; sed -i "/^$T\$/d" ready.txt; continue; fi
  python3 build.py "episodes/$T.py" "out/$T" 2>&1 | tail -1
  ./render_one.sh "$T" || echo "RENDER FAIL $T"
  rm -f "out-lint-$T.txt"
  echo "=== $T done $(date +%T)"
done
