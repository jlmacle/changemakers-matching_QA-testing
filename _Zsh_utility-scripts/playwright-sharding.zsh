PARAMETER=$1
echo "Playwright tests to be run with parameter: ${PARAMETER}"

PROJECT_PATH=$(git rev-parse --show-toplevel) # Importance of having no spaces around the equal sign
echo "Project root directory: $PROJECT_PATH"
cd $PROJECT_PATH # to have the right folder to start the Playwright tests from, independently from where the script is run

# Removing previous reports if any
rm blob-report/*.* 2>/dev/null || true
rm blob-reports-tmp/*.* 2>/dev/null || true

# Augmenting the number of shards when the tests are flaky seems to be effective
TOTAL_SHARDS=6

# Running each shard, creating the data blob
for ((i=1; i<=TOTAL_SHARDS; i++)); do
  echo "Running shard ${i}/${TOTAL_SHARDS}"
  npx playwright test ${PARAMETER} \
    --shard=${i}/${TOTAL_SHARDS} \
    --reporter=blob
  
  mv ./blob-report/report-*-${i}.zip ./blob-reports-tmp/ 2>/dev/null|| true
  mv ./blob-report/report-${i}.zip ./blob-reports-tmp/ 2>/dev/null|| true
  sleep 5 # Giving time for the computer to recover from the procesing load
done