//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "forge-std/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract OpenSourceCollectiveToken is AccessControl, ERC20 {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    constructor(address admin) ERC20("Open Source Collective Token", "OSCT") {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
    }

    function mint(
        address account,
        uint256 value
    ) external onlyRole(MINTER_ROLE) {
        _mint(account, value);
    }

    function burn(
        address account,
        uint256 value
    ) external onlyRole(BURNER_ROLE) {
        _burn(account, value);
    }
}
