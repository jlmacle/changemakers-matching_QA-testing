#!/usr/bin/env bash

#Sharding code
cd _Zsh_utility-scripts/
./playwright-sharding.zsh
cd ..

# Merging all blob reports into a single HTML report
echo "Merging reports"
npx playwright merge-reports --reporter=html ./blob-reports-tmp

# While checking how to configure the matter, moving playwright-report into z-playwright-report
rm -r ./z-playwright-report || true
mv playwright-report z-playwright-report

# Opening the merged report in the browser
echo "Opening merged report"
npx playwright show-report z-playwright-report
