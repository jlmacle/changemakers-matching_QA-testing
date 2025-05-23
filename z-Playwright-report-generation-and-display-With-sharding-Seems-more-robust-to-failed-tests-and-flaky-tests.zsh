#!/usr/bin/env bash

TOTAL_SHARDS=4

# 1️⃣ Run each shard, emit blob, never auto-open HTML
for ((i=1; i<=TOTAL_SHARDS; i++)); do
  echo "Running shard ${i}/${TOTAL_SHARDS}…"
  PLAYWRIGHT_HTML_OPEN=never \
    npx playwright test \
      --shard=${i}/${TOTAL_SHARDS} \
      --reporter=blob
    mv ./blob-report/report-${i}.zip  ./blob-reports-tmp/|| true
    sleep 5
done

# 2️⃣ Merge all blob reports into a single HTML report
echo "Merging reports…"
npx playwright merge-reports --reporter=html ./blob-reports-tmp

# 3️⃣ (Optional) Open the merged report in your browser
echo "Opened merged report:"
npx playwright show-report
