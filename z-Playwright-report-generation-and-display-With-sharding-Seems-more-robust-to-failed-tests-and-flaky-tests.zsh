#!/usr/bin/env bash

# Removing the previous report if any
rm -r ./z-playwright-report 2>/dev/null || true

# Code sharding
cd _Zsh_utility-scripts/
./playwright-sharding.zsh
cd ..

# Merging all blob reports into a single HTML report
echo "Merging reports"
npx playwright merge-reports --reporter=html ./blob-reports-tmp

# Opening the merged report in the browser
mv playwright-report z-playwright-report #playwright-report created by default
echo "Opening merged report"
npx playwright show-report z-playwright-report
