import { expect } from "chai";

describe("05 - UI Controls & Chai", async () => {
  beforeEach(async () => {
    await browser.url("/loginpagePractise/");
    await $("#username").setValue("rahulshettyacademy");
    const password = $("//input[@type='password']");
    await password.setValue("learning");
  });

  it("Asserting Select dropdowns using Chai", async () => {
    const rdoButtons = $$(".customradio");
    const rdoUser = rdoButtons[1]; // 2nd item in the array
    await rdoUser.$("span").click();

    const modal = $(".modal-body");
    await modal.waitForDisplayed();
    await $("#cancelBtn").click();
    await rdoUser.$("span").click();
    await modal.waitForDisplayed();
    await $("#okayBtn").click();

    // Validate the pop-up doesn't display
    await $$(".customradio")[0].$("span").click();

    const dropdown = $("select.form-control");
    await dropdown.selectByAttribute("value", "teach");
    await browser.pause(3000);
    await dropdown.selectByVisibleText("Consultant");
    await browser.pause(3000);
    await dropdown.selectByIndex(0);
    await browser.pause(3000);
    console.log(await dropdown.getValue());
    const dropdownValue = await dropdown.getValue();
    await expect(dropdownValue).to.equal("stud");
  });
});
