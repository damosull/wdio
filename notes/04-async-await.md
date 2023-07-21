# Async Code & Awaits:

- JavaScript is asynchronous, so there's no guarantee of the order of execution.
- Go through an example using 2 `console.log()`. They run at the same time, or in a different order to execute the code as quickly as possible.
- Promises:
  - Each step returns a promise. A `promise` is basically the result of the step.
  - A `promise` can 3 different states:
    - Pending (in-progress)
    - Resolved (complete)
    - Rejected (failed)
- How do we get around this async issue? We use the `await` keyword
- By using `await` you're telling the code to wait until this promise is resolved before continuing onto the next line of code
- When using awaits, you need to update your function to an `async` function. This tells the compiler that you'll be using awaits to handle the asynchronous code

Todo: Get explanation of when to use await & when youdon't need to use awaits
Is this correct:
Add await wherever an action is being performed / a function is being called (i.e. .url(), .toHaveTitle())
