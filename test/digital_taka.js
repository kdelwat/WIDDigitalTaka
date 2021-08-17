const DigitalTaka = artifacts.require("DigitalTaka");

contract("DigitalTaka", accounts => {
  it("...have an initial supply of 10000.", async () => {
    const dtInstance = await DigitalTaka.deployed();

    // Get total supply
    const totalSupply = await dtInstance.totalSupply.call();

    assert.equal(totalSupply, 10000);
  });
});
