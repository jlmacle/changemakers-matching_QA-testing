import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { allureCypress } from "allure-cypress/reporter";


export default defineConfig({
  projectId: '79ph2x',
  e2e: {
    baseUrl: 'http://127.0.0.1:3000',
    experimentalStudio: true,
    video: true, // Enable or disable video recording
    videoCompression: 32, // Compression level (higher number = more compression)
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
      allure: true      
    },
    fixturesFolder: false,
  }
});