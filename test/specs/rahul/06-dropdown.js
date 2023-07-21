describe("06 - Dynamic Dropdowns", async () => {
  it("Section 7 - Dynamic dropdowns", async () => {
    await browser.url("/AutomationPractice/");
    await $("#autocomplete").setValue("Ind"); // Enter some text so the dynamic options appear
    await browser.pause(3000);
    let items = await $$("[class='ui-menu-item'] div");
    for (let i = 0; i < (await items.length); i++) {
      if ((await items[i].getText()) === "India") {
        await items[i].click();
        await browser.pause(3000);
      }
    }
  });
});
