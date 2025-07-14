SPECIFIC_TESTS_TO_RUN=$1 # Passed in parameter to the script
BLOB_DIR="./blob-report"
AGGREGATED_BLOBS_DIR="./blob-reports-tmp"

echo "Playwright tests to be run with parameter: ${SPECIFIC_TESTS_TO_RUN}"

PROJECT_PATH=$(git rev-parse --show-toplevel) 
echo "Project root directory: $PROJECT_PATH"
cd $PROJECT_PATH # to have the right folder to start the Playwright tests from, independently from where the script is run

# Removing previous reports if any
rm "$BLOB_DIR/*.*" 2>/dev/null 
rm "$AGGREGATED_BLOBS_DIR/*.*" 2>/dev/null 

# Augmenting the number of shards when the tests are flaky seems to be effective
TOTAL_SHARDS=9

# Running each shard, creating the data blob
for ((i=1; i<=TOTAL_SHARDS; i++)); do
  echo "Running shard ${i}/${TOTAL_SHARDS}"
  npx playwright test ${SPECIFIC_TESTS_TO_RUN} \
    --shard=${i}/${TOTAL_SHARDS} \
    --reporter=blob
  
  mv "$BLOB_DIR/report-*-${i}.zip" "$AGGREGATED_BLOBS_DIR" 2>/dev/null
  mv "$BLOB_DIR/report-${i}.zip" "$AGGREGATED_BLOBS_DIR" 2>/dev/null
  sleep 5 # Giving time for the computer to recover from the procesing load
done