# Adjusting VS Code Settings:

- It will be a lot easier to write WDIO tests if we add autocompletion. This doc explains how to add them in VS Code: https://webdriver.io/docs/autocompletion/
- The explanation in the above doc is missing some things, so I did the following:

  - Create `jsconfig.json` file in the root of your project & add the following code (this code will specify which files we want the types autosuggestions to pick up):

  ```
  {
  "compilerOptions": {
    "types": ["node", "@wdio/globals/types", "@wdio/mocha-framework"]
  },
  "include": [
    "test/specs/*.js",
    "**/*.json",
    "node_modules/@wdio/sync",
    "node_modules/@wdio/mocha-framework"
  ]
  }

  ```

  - After creating the above file, restart VS Code to make sure the changes take effect.
  - Verify the suggestions are working in your spec file by typing `browser` & the suggestions should appear.
