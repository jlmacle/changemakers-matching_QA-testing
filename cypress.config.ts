import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:3000',
    specPattern: "**/*cy.js",
    async setupNodeEvents(on, config) {
      allureCypress(on, config);     
      return config;
    },
    env: {
      omitFiltered: true,
      filterSpecs: true,
      allureReuseAfterSpec: false,
      allure: true,
      allureLogCypress: true
    },
    fixturesFolder: false,
  }
});