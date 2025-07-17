RESULTS_DIR=./z-allure-results
REPORT_DIR=./z-allure-report

# Folders removed to mitigate issues with the report generation
rm -r $RESULTS_DIR 2>/dev/null 
rm -r $REPORT_DIR 2>/dev/null 

# Running Cypress tests
npx cypress run \
&& npx allure generate $RESULTS_DIR --clean -o $REPORT_DIR \
&& npx allure open $REPORT_DIR