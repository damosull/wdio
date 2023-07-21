describe("13 - Multiple Windows", async () => {
  it("Section 8 - Multiple Windows", async () => {
    await browser.url("/loginpagePractise/");
    await browser.pause(6000);
    await $(".blinkingText").click();
    const handles = await browser.getWindowHandles(); // 2 windows now because you've opened a new tab

    await browser.switchToWindow(handles[1]); // switch to the 2nd window/tab
    console.log("Header Text:" + (await $("h1").getText())); // 2nd tab
    console.log("1st title: " + (await browser.getTitle())); // 2nd tab
    await browser.pause(6000);
    await browser.closeWindow(); // closes the current tab/window (in this case, the 2nd tab)
    await browser.pause(6000);
    await browser.switchToWindow(handles[0]); // now that we have closed the window above, we now need to switch to a different window (In this case, the original tab)
    // If you didn't switch back to the original tab before carrying on with this test, the test would fail because the 'target' window (which would be the 2nd one as we switched to that above, has been closed)
    console.log("2nd title: " + (await browser.getTitle())); // 1st tab
    await $("#username").setValue("Switched back to the 1st window");
    await browser.pause(6000);
  });

  it("Section 8 - Difference between SwitchWindow & NewWindow methods", async () => {
    await browser.url("/loginpagePractise/");
    await browser.pause(6000);

    await browser.newWindow("https://www.google.com"); // we're going to use .newWindow() to open a new tab/window for us
    await browser.pause(6000);
    console.log("New Window Title: " + (await browser.getTitle()));

    // Now that we're in the new window. Say we want to switch back to the original window/tab, we use `.switchWindow()` instead of `.switchToWindow()`
    // Just pass in the original URL:
    await browser.switchWindow("/loginpagePractise/");

    await $("#username").setValue("Switched back from the New Window");
    await browser.pause(6000);
  });
});
