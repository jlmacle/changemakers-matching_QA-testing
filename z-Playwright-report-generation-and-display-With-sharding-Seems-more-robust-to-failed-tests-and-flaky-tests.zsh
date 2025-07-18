#!/usr/bin/env bash
SHARDING_SCRIPT_DIR="./_Zsh_utility-scripts"
REPORT_DIR="./z-playwright-report"
AGGREGATED_BLOBS_DIR="./blob-reports-tmp"

# Removing the previous report if any
echo "Removing the previous report if any"
rm -r $REPORT_DIR 2>/dev/null

# Code sharding
echo "Running the tests" 
cd $SHARDING_SCRIPT_DIR
./playwright-sharding.zsh
cd ..

# Merging all blob reports into a single HTML report
echo "Merging reports"
npx playwright merge-reports --reporter=html $AGGREGATED_BLOBS_DIR

# Opening the merged report in the browser
mv playwright-report $REPORT_DIR #playwright-report created by default
echo "Opening merged report"
npx playwright show-report $REPORT_DIR
