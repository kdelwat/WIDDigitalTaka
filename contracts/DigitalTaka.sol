// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Pausable.sol";

contract DigitalTaka is ERC20Pausable {
    constructor() ERC20("Digital Taka", "TK") {
        _mint(msg.sender, 10000);
    }
}