# What is this repository:

This is my main repository for WebDriverIO. It is based on Rahul's tutorials. Some of the material is changed either because Rahul's code did not work, or the original web app's used did not work.

# Tasks:

1. I need to create proper documentation that goes through each spec file so I can give tutorials
2. Move all notes from WebDriverIO notes.docx (on my desktop) to the spec files. They need to be written in lecturing format
3. Q. Is there a way we can use require to import chai? Rahul did it, but I wasn't able to, I think it's to do with the ES version. Main reason we need to do this is so we can use both chai & WDIO assertions at the same time, so it's not a big blocker
4. Completing the tutorials: pick up from Section 7 - Video: Debugging WebDriverIO Code with Visual Studio editor video & continue building tests & taking notes.

# How to run this test framework:

1. Run `npm install` to install the project dependecies.
2. Run one of the test commands (i.e. `npm test`). See `package.json` for more sample commands.

# Running your tests:

- `npx wdio run wdioconfig.js` (you must specify your configuration file in the run command). In the config file, you specify which tests to run inside the `specs[]` array

# Issues:

- Specifying the browser using selenium-standalone
  - In 'Section 6 – Running Tests in Firefox & Edge using Selenium Standalone', he makes this change.
  - Previously, In our config (wdio.conf.js) we specified the Chrome browser (`Services: chromedriver`)
  - These are the changes he made here:
    - Go to the documentation, you see Selenium Standalone Service (webpage)
    - The docs tell you to add the wdio/selenium-standalone-service dependency to your project.
    - Rahul adds that to the package.json (devDependencies)
    - Run `npm i`
    - Change the services array in config file to `selenium-standalone`
    - Now, we can use any browser directly
    - Where we have set `browserName` in the config file, we can say `firefox`
    - Previously, we didn’t have support for firefox as we were using chromedriver rather than selenium-standalone service. This now supports all 3 browsers (including edge)
    - We run the test as normal, & the test opens in Firefox.
    - ISSUE: When I run the tests a 2nd/3rd/etc time, I get the error that a port is being used by Java. If I kill that process, then the test runs fine, but I need to kill it each time. When he does it in the video, he doesn’t get this issue. I’ve emailed them to see what the fix is, I’m waiting for a response.

# Tips:

- Different ways to use Parent -> Child:
  - Get the 1st child using a CSS selector - `tr th:nth-child(1)`
  - Get the 1st child using XPath - `//tr/th[1]`
- You can enter a selector in the browser console. If it’s valid, the element will get printed to the console: `document.querySelector('tr th:nth-child(1)')`

# Getting Started:

- For `screenshot.png`, see `notes/06-screenshots.md`
