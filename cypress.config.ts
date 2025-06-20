import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { allureCypress } from "allure-cypress/reporter";


export default defineConfig({
  projectId: '79ph2x',
  e2e: {
    retries: {
      runMode: 2,
      openMode: 2
    },    
    baseUrl: 'http://127.0.0.1:3000',
    experimentalStudio: true,
    video: false, // Enable or disable video recording //False to avoid using too much resources during tests    
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {    
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
      await addCucumberPreprocessorPlugin(on, config);
      allureCypress(on, config, {
        resultsDir: "./z-allure-results"
      });           
      return config;
    },
    env: {
      omitFiltered: true,
      filterSpecs: true,
      allure: true      
    },
    fixturesFolder: false,
  }
});
