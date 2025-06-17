ARG=$1
echo "Running Playwright tests with arguments: ${ARG}"

# Removing previous reports if any
rm blob-report/*.zip 2>/dev/null || true
rm blob-reports-tmp/*.* 2>/dev/null || true

# Augmenting the number of shards when the tests are flaky seems to be effective
TOTAL_SHARDS=6

cd ..
echo "Current directory: $(pwd)"

# Running each shard, emiting blob, never auto-opening HTML
for ((i=1; i<=TOTAL_SHARDS; i++)); do
  echo "Running shard ${i}/${TOTAL_SHARDS}"
  PLAYWRIGHT_HTML_OPEN=never \
    npx playwright test ${ARG} \
      --shard=${i}/${TOTAL_SHARDS} \
      --reporter=blob
    
    mv ./blob-report/report-*-${i}.zip ./blob-reports-tmp/ 2>/dev/null|| true
    mv ./blob-report/report-${i}.zip ./blob-reports-tmp/ 2>/dev/null|| true
    sleep 5
done