#!/usr/bin/env bash

# Augmenting the number of shards when the tests are flaky seems to be effective
TOTAL_SHARDS=5

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
echo "Merging reports"
npx playwright merge-reports --reporter=html ./blob-reports-tmp

# While checking how to configure the matter, moving playwright-report into z-playwright-report
rm -r ./z-playwright-report || true
mv playwright-report z-playwright-report

# Opening the merged report in the browser
echo "Opening merged report"
npx playwright show-report z-playwright-report
