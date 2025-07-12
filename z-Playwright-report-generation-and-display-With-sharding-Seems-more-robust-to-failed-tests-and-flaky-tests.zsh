#!/usr/bin/env bash
DIR="_Zsh_utility-scripts"
REPORT_DIR="z-playwright-report"

# Removing the previous report if any
rm -r "./$REPORT_DIR" 2>/dev/null || true

# Code sharding
cd "$DIR"
./playwright-sharding.zsh
cd ..

# Merging all blob reports into a single HTML report
echo "Merging reports"
npx playwright merge-reports --reporter=html ./blob-reports-tmp

# Opening the merged report in the browser
mv playwright-report "$REPORT_DIR" #playwright-report created by default
echo "Opening merged report"
npx playwright show-report "$REPORT_DIR"
