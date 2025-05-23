#!/usr/bin/env bash

TOTAL_SHARDS=4

# Running each shard, emiting blob, never auto-opening HTML
for ((i=1; i<=TOTAL_SHARDS; i++)); do
  echo "Running shard ${i}/${TOTAL_SHARDS}"
  PLAYWRIGHT_HTML_OPEN=never \
    npx playwright test \
      --shard=${i}/${TOTAL_SHARDS} \
      --reporter=blob
    mv ./blob-report/report-${i}.zip  ./blob-reports-tmp/|| true
    sleep 5
done

# Merging all blob reports into a single HTML report
echo "Merging reports
npx playwright merge-reports --reporter=html ./blob-reports-tmp

# Opening the merged report in the browser
echo "Opening merged report"
npx playwright show-report
