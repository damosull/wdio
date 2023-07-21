describe("14 - iFrames", async () => {
  it("Section 8 - iFrames", async () => {
    await browser.url("/AutomationPractice/");
    await $("#mousehover").scrollIntoView();
    console.log("# links on the original page: " + (await $$("a").length)); // 27 links in the 1st page
    await browser.pause(5000);

    // .switchToFrame() - takes the usual locators, can also take an index (not sure how though)
    await browser.switchToFrame(await $("[id='courses-iframe']"));
    console.log(await $("=Courses").getTagName());
    console.log("Switching to frame: " + (await $$("a").length)); // 107 links in the frame
    await browser.pause(5000);

    // If you want to switch back to the original window, just pass null to `.switchToFrame()`
    // Passing null means "exit the frame", bringing you back to the original page
    await browser.switchToFrame(null);
    console.log(
      "After switching back to original page: " + (await $$("a").length)
    ); // 27 links in the 1st page
    await browser.pause(5000);
  });
});
