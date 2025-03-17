# true added to pursue the script in case no folder would exist
# Folders removed to mitigate issues with the report generation
rm -r allure-results || true \
rm -r allure-report || true \
&& npx cypress run \
&& npx allure generate --clean \
&& npx allure serve -h 127.0.0.1