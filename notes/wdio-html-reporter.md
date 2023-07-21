1.	Run `node --version` in the command line. My version is v16.17.1.
2.	If there is an existing node_modules folder, please delete this folder.
3.	In package.json, update the devDependencies to have the following packages:
"devDependencies": {
    "@wdio/cli": "^8.10.4",
    "@wdio/local-runner": "^8.10.4",
    "@wdio/mocha-framework": "^8.10.4",
    "@wdio/spec-reporter": "^8.10.4",
    "chromedriver": "^113.0.0",
    "wdio-chromedriver-service": "^8.1.1"
  },

4.	Run `npm install` to create the node_modules folder based on the above packages.
5.	Run `npm install @wdio/allure-reporter --save-dev`
6.	In your wdio.conf.js file, search for ‘reporters’ & replace it with this:
reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverScreenshotsReporting: false,
    }]],

7.	Run `npm run wdio`, this should generate an allure-results folder containing several XML files.
