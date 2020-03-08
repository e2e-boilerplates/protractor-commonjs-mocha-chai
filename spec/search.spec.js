const { expect } = require("chai");

describe("Sandbox", () => {
  before(function fn() {
    this.timeout(20000);
    browser.get("https://e2e-boilerplates.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    expect(title).to.equal("Sandbox");
    header.getText().then(h => {
      expect(h).to.equal("Sandbox");
    });
  });
});
