// 1. Import the page object:
import LoginPage from "../page-objects/rahul/loginPage.js";
import ShopPage from "../page-objects/rahul/shopPage.js";
import ReviewPage from "../page-objects/rahul/reviewPage.js";
import DeliveryPage from "../page-objects/rahul/deliverPage.js";
import { expect } from "chai";

describe("17 - E2E Framework", async () => {
  it("Login Test", async () => {
    await browser.url("/loginpagePractise/");

    // 2. Call the login() method you created in the page object & pass the user/password you want to use:
    await LoginPage.login("rahulshettyacademy", "learning1234");
    await console.log(await LoginPage.alert.getText());

    await browser.waitUntil(
      async () => (await LoginPage.signIn.getAttribute("value")) === "Sign In",
      {
        timeout: 5000,
        timeoutMsg: "Error message is not showing up",
      }
    );
    await console.log(await LoginPage.alert.getText());
    await expect(await LoginPage.textInfo.getText()).to.include(
      "username is rahulshettyacademy"
    );
  });

  // Next, we're going to implement POM on the eCommerce test
  // Create a shop page POM & copy test from `16_e2e_test_p2.js` here & then do the POM refactoring:

  it("eCommerce", async () => {
    const products = ["iphone X", "Blackberry"];

    // 1. Sign in with POM:
    await browser.url("/loginpagePractise/");
    await LoginPage.login("rahulshettyacademy", "learning");
    await ShopPage.checkout.waitForExist();
    await ShopPage.addProductToCart(products);
    await ShopPage.checkout.click();

    // 2. Refactor Review page to use POM:
    let sumOfProducts = await ReviewPage.sumOfProducts();
    let totalIntValue = await ReviewPage.totalFormattedPrice();
    await expect(sumOfProducts).to.equal(totalIntValue);
    await ReviewPage.btnCheckout.click();

    // 3. Refactor Delivery page  to use POM:
    await DeliveryPage.txtLocation.setValue("Ind");
    await DeliveryPage.selectCountry("India");
    await DeliveryPage.btnPurchase.click();
    const alertText = await DeliveryPage.message.getText();
    await expect(alertText).to.include("Success");
  });
});
