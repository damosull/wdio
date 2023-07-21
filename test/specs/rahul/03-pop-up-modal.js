describe("03 - Pop Ups / Modals Test Suite", async () => {
  it("Pop Ups / Modals Test Case", async () => {
    await browser.url("/loginpagePractise/");
    await $("#username").setValue("rahulshettyacademy");
    const password = $("//input[@type='password']");
    await password.setValue("learning");

    await $$("#usertype")[1].click();

    const modal = $(".modal-body");
    await modal.waitForDisplayed();
    await $("#cancelBtn").click();
    console.log(await $$(".customradio")[1].$("span").isSelected()); // the test won't fail here, you'd need to append .toBe(true)

    await expect(modal).not.toBeDisplayed();
  });
});
