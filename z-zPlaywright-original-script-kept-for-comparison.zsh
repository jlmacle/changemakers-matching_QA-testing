DIR="z-playwright-report"

npx playwright test \
&& npx playwright show-report "$DIR"