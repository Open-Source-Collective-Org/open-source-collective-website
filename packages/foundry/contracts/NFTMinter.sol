//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "forge-std/console.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

import "./OpenSourceCollectiveNFT.sol";

contract NFTMinter is AccessControl {
    error MintValueNotEnough();

    OpenSourceCollectiveNFT s_collection;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 s_mintCost;

    constructor(address admin, address collection, uint256 mintCost) {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        s_mintCost = mintCost;
        s_collection = OpenSourceCollectiveNFT(collection);
    }

    function mint(address account) external payable onlyRole(MINTER_ROLE) {
        if (msg.value < s_mintCost) {
            revert MintValueNotEnough();
        }

        s_collection.mint(account, s_collection.totalSupply());
    }
}
