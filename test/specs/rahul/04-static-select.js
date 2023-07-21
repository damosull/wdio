describe("04 - Static Select", async () => {
  it("Select", async () => {
    await browser.url("/loginpagePractise/");
    await $("#username").setValue("rahulshettyacademy");
    const password = $("//input[@type='password']");
    await password.setValue("learning");

    const dropdown = $("select.form-control");
    await dropdown.selectByAttribute("value", "teach");
    await browser.pause(3000);
    await dropdown.selectByVisibleText("Consultant");
    await browser.pause(3000);
    await dropdown.selectByIndex(0);
    await browser.pause(3000);
    console.log(await dropdown.getValue());
    const dropdownValue = await dropdown.getValue();
    await expect(dropdownValue).toEqual("stud");
  });
});
