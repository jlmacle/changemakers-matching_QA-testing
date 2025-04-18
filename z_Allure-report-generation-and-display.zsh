# true added to pursue the script in case no folder would exist,
# or in case some tests would fail
# Folders removed to mitigate issues with the report generation
rm -r allure-results || true \
rm -r allure-report || true \
&& npx cypress run || true\
&& npx allure generate --clean \
&& npx allure serve -h 127.0.0.1