// Multiple Windows / Child Windows

See 13-multiple-windows.js for the below:

// Here, we're going to go through how to manage windows that are opened via the application , & windows that are opened via the automation
// In automation, opening a new window or a new tab are both treated the same

// Initially, WDIO is only focused on / has access to the original page

// To switch focus to a different window/tab, use `.switchToWindow(...)`. In order to use this, you need to pass in the handle of the new window to this function.
// To get the window's handle, assign `.getWindowHandles()` to a variable. You can then specify which handle you want to use (i.e. handles[1])

// When you are done with a window, you can call `.closeWindow()`
// If you call `.closeWindow()` on the current window, you are not automatically switched to another window. You will need to switch to another window (.switchToWindow())
// You don't have to close the existing window/tab before switching to a different window/tab

See the 2nd test in 13-multiple-windows.js for the below:

// Next, we're going to see how you can open a new window via the automation:

// Difference between switchToWindow() & newWindow():

// 1. When they are used:
// If the app opens a new window (i.e. clicking a button) - use `.switchToWindow()`
// If the automation opens a new window/tab (i.e. a different application) - use `.newWindow()`

// 2. Focus:
// If the application opens the new window/tab, you need to switch the focus (using .switchToWindow())
// If the automation opens the new window/tab, the focus automatically switches to the new window, you don't need to switch. This becomes the parent window.

    //Note the difference between `.switchToWindow()` & `.switchWindow()`:
    // `.switchToWindow()` - can only be used when browser is opened via application (i.e. clicking a link)
    // `.switchWindow()` - can be used both when browser is opened via application & automation (you just need to pass in the URL of an existing window/tab)
