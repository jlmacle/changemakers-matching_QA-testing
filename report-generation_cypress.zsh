# true added to pursue the script in case no folder would exist
rm -r allure-results || true \
&& npx cypress run \
&& npx allure generate --clean \
&& npx allure serve -h 127.0.0.1