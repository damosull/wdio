// Simple WebDriver assertions (https://webdriver.io/docs/api/expect-webdriverio/)

describe("01 - simple assertions", async () => {
  it("WDIO Assertions & Hard-Coded Waits", async () => {
    await browser.url("/loginpagePractise/");

    console.log(await browser.getTitle());

    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

    await $("input[name='username']").setValue("damosull");
    await $("#username").setValue("QA user");

    const password = $("//input[@type='password']");
    await password.setValue("myPassword");
    await $("#signInBtn").click();

    await browser.pause(3000);

    await console.log("!!!!!!!" + (await $(".alert-danger").getText()));
  });

  it("Login Failure - Wait Until button text matches", async () => {
    await browser.url("/loginpagePractise/");
    console.log(await browser.getTitle());

    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

    await $("input[name='username']").setValue("damosull");
    await $("#username").setValue("QA user");

    const password = $("//input[@type='password']");
    await password.setValue("myPassword");
    await $("#signInBtn").click();

    await browser.waitUntil(
      async () => (await $("#signInBtn").getAttribute("value")) === "Sign In",
      {
        timeout: 5000,
        timeoutMsg: "Error message is not showing up",
      }
    );

    await console.log(await $(".alert-danger").getText());
  });

  it("Assertions", async () => {
    await browser.url("/loginpagePractise/");
    await expect($("p")).toHaveTextContaining(
      "username is rahulshettyacademy and Password is learning"
    );
  });

  it("Login Success", async () => {
    await browser.url("/loginpagePractise/");
    await $("#username").setValue("rahulshettyacademy");

    const password = $("//input[@type='password']");
    await password.setValue("learning");
    await $("#signInBtn").click();

    await $(".btn-primary").waitForExist(); // wait until the new page loads (wait until the checkout button is visible):
    await expect(browser).toHaveUrlContaining("shop");
    await expect(browser).toHaveTitle("ProtoCommerce");
  });
});
