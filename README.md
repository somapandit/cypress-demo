# cypress-demo
Repository to demo e2e test cases using cypress

## Objective
This is an example to showcase a subset of end-to-end test cases using Cypress.io as the front end automation tool. The test cases are show casing how to test a live site under specified business conditions.

## Prerequisites:
### Operating Systems: Windows, Mac OS
### Browsers: Chrome, Electron
### Prerequisite: Follow these steps [here](https://docs.cypress.io/guides/getting-started/installing-cypress) for installating Cypress and other prerequisites

## Cloning the repo
```
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-demo.git

## cd into the cloned repo
cd cypress-demo

## install the node_modules
npm install

## start the local webserver
npx cypress open
```

## Steps for running the tests
- After running above command, Cypress window should open.
- Select "E2E Testing" as the testing type.
- Select the browser.
- Click on "Start E2E Testing in Chrome.
- Select the spec file "testGalleryEmbed.spec.cy.js".
- The test should run and display results with screenshots, api calls and other details.

The tests are commented with required details. Please refer to Cypress documentation [here](https://docs.cypress.io/api/commands/get) for Cyress related help.

