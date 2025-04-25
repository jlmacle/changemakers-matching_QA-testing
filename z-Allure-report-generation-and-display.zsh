# true added to pursue the script in case no folder would exist,
# or in case some tests would fail
# Folders removed to mitigate issues with the report generation
rm -r z-allure-results || true \
rm -r z-allure-report || true \
&& npx cypress run || true\
&& npx allure generate ./z-allure-results --clean -o ./z-allure-report \
&& npx allure open ./z-allure-report