#!/usr/bin/env bash

set -e

MILESTONE="Backend 2.6.0"

ISSUES=(
  11
  12
  13
  14
  15
  16
  17
  18
  19
)

echo "Associando issues à milestone: $MILESTONE"

for ISSUE in "${ISSUES[@]}"
do
  echo "Issue #$ISSUE..."
  gh issue edit "$ISSUE" --milestone "$MILESTONE"
done

echo ""
echo "✅ Todas as issues foram associadas à milestone."
echo ""

echo "Verificando resultado..."
gh issue list --milestone "$MILESTONE"