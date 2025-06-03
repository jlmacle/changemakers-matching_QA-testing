# Augmenting the number of shards when the tests are flaky seems to be effective
TOTAL_SHARDS=6


pwd
# Running each shard, emiting blob, never auto-opening HTML
for ((i=1; i<=TOTAL_SHARDS; i++)); do
  echo "Running shard ${i}/${TOTAL_SHARDS}"
  PLAYWRIGHT_HTML_OPEN=never \
    npx playwright test "c-playwright-tests/User-Accessibility-SMS-104/2. Operable/2.1 Keyboard Accessible/Tab-navigation" "c-playwright-tests/User-Accessibility-SMS-104/3. Understandable/3.3 Input Assistance/3.3.1 Error Identification Level A" \
      --shard=${i}/${TOTAL_SHARDS} \
      --reporter=blob
    mv ./blob-report/report-${i}.zip  ./blob-reports-tmp/|| true
    sleep 5
done