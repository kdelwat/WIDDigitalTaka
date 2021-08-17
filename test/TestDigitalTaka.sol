pragma solidity >=0.4.21 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/DigitalTaka.sol";

contract TestDigitalTaka {
    function testInitialSupply() public {
        DigitalTaka token = DigitalTaka(DeployedAddresses.DigitalTaka());

        Assert.equal(token.totalSupply(), 10000, "It should mint 10000 initial tokens.");
    }
}