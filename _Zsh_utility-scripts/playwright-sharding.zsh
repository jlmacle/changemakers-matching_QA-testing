# Augmenting the number of shards when the tests are flaky seems to be effective
TOTAL_SHARDS=6


pwd
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