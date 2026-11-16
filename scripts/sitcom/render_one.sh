#!/usr/bin/env bash
# Render an episode whose audio/timeline is already built (out/<topic>) to public/videos/<topic>.mp4 + poster.
set -euo pipefail
cd "$(dirname "$0")"
ROOT="$(cd ../.. && pwd)"; T="$1"
export NODE_PATH="${NODE_PATH:-$(npm root -g)}"
mkdir -p "$ROOT/public/videos/posters"
rm -f out/$T/part*.mp4
node render.mjs "out/$T" --workers "${WORKERS:-4}" > "out/$T/render.log" 2>&1
ffmpeg -y -loglevel error -f concat -safe 0 -i "out/$T/parts.txt" -i "out/$T/audio.wav" -c:v copy \
  -af "loudnorm=I=-16:TP=-1.5:LRA=11" -ar 48000 -c:a aac -b:a 128k -movflags +faststart -shortest "$ROOT/public/videos/$T.mp4"
node render.mjs "out/$T" --poster "$ROOT/public/videos/posters/$T.jpg"
rm -f out/$T/part*.mp4
echo "$T: $(du -h "$ROOT/public/videos/$T.mp4" | cut -f1) $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$ROOT/public/videos/$T.mp4")s"
