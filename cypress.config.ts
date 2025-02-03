import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { allureCypress } from "allure-cypress/reporter";


export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:3000',
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {      
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
      await addCucumberPreprocessorPlugin(on, config);
      allureCypress(on, config);           
      return config;
    },
    env: {
      omitFiltered: true,
      filterSpecs: true,
      //allureReuseAfterSpec: false,
      allure: true,
      //allureLogCypress: true
    },
    fixturesFolder: false,
  }
});