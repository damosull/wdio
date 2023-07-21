import { expect } from "chai";

describe("09 - JS Alerts Pop Up - pt 1", async () => {
  it("Section 7 - Handle JS Alerts Pop Up", async () => {
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
    await $("button").click();
    console.log(await browser.isAlertOpen());
    await browser.pause(3000);
    expect(await browser.isAlertOpen()).to.be.true;
    expect(await browser.getAlertText()).to.equal("I am a JS Alert");
    await browser.acceptAlert();
    await browser.pause(3000);
  });
});
