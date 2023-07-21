describe("07 - Checkboxes & Screenshots", async () => {
  it("Section 7 - Checkboxes & Screenshots", async () => {
    await browser.url("/AutomationPractice/");
    const element = await $$("input[type='checkbox']");
    await element[1].click();
    console.log(await element[1].isSelected());
    console.log(await element[2].isSelected());
    await browser.saveScreenshot("screenshot.png");
  });
});
