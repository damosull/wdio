# Going through the project structure:

- `node_modules` stores all the dependencies required by our tests.
- `package.json` lists the names of the projects dependencies, & the scripts used to run your project.
- Running `npm install` creates the `node_modules` folder, adding all dependencies listed in `package.json`.
- `test/specs` stores all your tests _(as specified during the intial setup)_.
- `describe()` blocks are basically test suites, & `it` blocks are individual test cases.
- `wdio.conf.js` is our test runner _(Here, you can specify the base URL, where your tests are stored, your browser, etc.)_.
