#!/usr/bin/env bash
# Usage: scripts/add-officer-photo.sh <role-slug> <path-to-photo>
# Example: scripts/add-officer-photo.sh president ~/Downloads/me.png
# Resizes, fixes rotation, and saves it as public/officers/<role-slug>.jpg
set -euo pipefail
if [ $# -ne 2 ]; then echo "Usage: $0 <role-slug> <photo>"; exit 1; fi
cd "$(dirname "$0")/.."
magick "$2" -auto-orient -background white -alpha remove -alpha off \
  -resize '1000x1000>' -strip -quality 85 "public/officers/$1.jpg"
echo "Saved public/officers/$1.jpg"
