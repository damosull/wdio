Parallel Test Execution:
Thankfully, we don’t have to make many changes to run our tests in parallel.
The only changes we need to make are to the wdio.conf.js file.
Here are the changes we need to make in this file:
1.	Search for maxInstances. You’ll see there are 2 entries in this file.
2.	The first entry specifies the number of browsers you can open at a time in parallel.
3.	The second entry is inside the chrome object in the capabilities array. This specifies the number of Chrome browsers you can open at a time in parallel.
For example, the first entry is 10, and the second entry is 5. That means the total number of Chrome browsers you can open at one time is 5. In this case, the second entry overrides the first entry.
These 5 browsers will continue to execute all your tests.
If you had a Firefox entry in the capabilities array, that could take some of the workload from the Chrome browser.
4.	Search for specs in the config file. Go to the specs array, it should be around Line 26.
This file specifies which spec files your framework will run.
specs: [“./test/specs/**/loginTest.js”] runs one spec file, opening one browser.
specs: [“./test/specs/**/*.js”] runs all your spec files. In this case, opening a maximum of 5 Chrome browsers to run all your spec files. If you have less than 5 spec files, only that number of browsers will open.
To see this work fully, make the above changes, create 5 – 10 spec files, & run your framework.
You should see 5 browsers open & execute your tests in parallel.










Running in Headless Mode:
Running your tests in headless mode means the tests run in the browser, but the browser doesn’t pop up on your screen.
This is typically done when you run your tests in a pipeline as nobody is looking at it there.
Running your tests like this will also speed up the test execution a lot as the browser isn’t loading up on your screen, etc.
On https://webdriver.io/docs/configurationfile/, search ‘headless’ & go to the capabilities array section on the page. This explains what you need to do to add this to your configuration file.
1.	Add the following inside the chrome object in the capabilities array:
'goog:chromeOptions': {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
	args: ['--headless', '--disable-gpu'],
        } 
Your capabilities array should now look like this:
capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 5,
      //
      browserName: "chrome",
      acceptInsecureCerts: true,
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
      "goog:chromeOptions": {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        args: ["--headless", "--disable-gpu"],
      },
    },
  ],
Now, when you run your tests, the browsers won’t pop up on the screen.
The above link also shows you how to do this for Firefox, etc. 
