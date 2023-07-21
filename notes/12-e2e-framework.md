// Here we're going to develop an E2E WDIO framework
// We've already written tests in the previous files
// Now, We're going to take some of them & convert them to fit the standards for an E2E framework

// This will include the following:
// 01. Implement page object model design pattern
// 02. Parameterize the test cases using mocha
// 03. Perform do data-driven testing from JSON files
// 04. Use Capabilities to run tests in parallel & different browsers
// 05. Run specific tests using Mocha Grep options
// 06. Importance of Bail & Base URL options in the config file
// 07. Create test suites & controlling the execution with Command Line parameters
// 08. Build customized WDIO config file to run tests with different options & environments
// 09. Avoid flaky tests using the Retry mechanism in Mocha framework
// 10. Generate generate Allure report
// 11. Capture screenshots on test failures (using pre & post hooks) & attaching them to the Allure report
// 12. Integrate the framework with Jenkins for Continuous Integration

// 01. Implement page object model design pattern:
// Inside the `specs` folder, create `page-objects` folder. Now go to the POM file `loginPage.js`
// After creating the page object file, now it's time to use it to login:

Merge the above notes with the others from 17-e2e-framework-p1.js
