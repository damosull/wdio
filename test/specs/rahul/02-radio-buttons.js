describe("02 - Radio Buttons", async () => {
  beforeEach(async () => {
    await browser.url("/loginpagePractise/");
    await $("#username").setValue("rahulshettyacademy");
    const password = $("//input[@type='password']");
    await password.setValue("learning");
  });

  it("Radio Buttons - when multiple elements have the same locator", async () => {
    const rdoButtons = $$(".radiotextsty");
    const rdoUser = rdoButtons[1]; // Get the 2nd item in the array
    await rdoUser.click();
    await browser.pause(3000);
  });

  it("Radio Buttons - using chain locators for child elements", async () => {
    const rdoButtons = $$(".customradio");
    const rdoUser = rdoButtons[1]; // Parent
    await rdoUser.$("span").click(); // Child
    await browser.pause(3000);
  });
});
