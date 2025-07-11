REPORT_DIR="z-playwright-report"

npx playwright test \
&& npx playwright show-report "$REPORT_DIR"