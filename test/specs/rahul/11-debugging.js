import chai from "chai";

describe("11 - JS Alerts Pop Up - pt 3", () => {
  it("Section 7 - Sorting Web HTML Tables & verifying new order based on names", async () => {
    await browser.url("/seleniumPractise/#/offers");
    // await $("tr th:nth-child(1)").click(); // click the 1st table header

    const vegElements = await $$("tr td:nth-child(1)"); // Get the 1st td of each table row
    const originalVegNames = await Promise.all(
      vegElements.map((veg) => veg.getText())
    );
    console.log(originalVegNames);

    const veggies = originalVegNames.slice();
    const sortedVeggies = veggies.sort();
    console.log(sortedVeggies);

    chai.expect(originalVegNames).to.eql(sortedVeggies);
  });
});
