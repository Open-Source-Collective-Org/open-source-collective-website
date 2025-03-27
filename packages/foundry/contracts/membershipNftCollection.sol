//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "forge-std/console.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract membershipNftCollection is AccessControl, ERC721Enumerable {
    error MintValueNotEnough();

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant TOKEN_SETTER_ROLE = keccak256("TOKEN_SETTER_ROLE");
    uint256 s_mintCost;

    constructor(address admin, uint256 mintCost) ERC721("Membership", "M") {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        s_mintCost = mintCost;
    }

    function mint() external payable onlyRole(MINTER_ROLE) {
        if (msg.value < s_mintCost) {
            revert MintValueNotEnough();
        }
        _safeMint(msg.sender, totalSupply());
    }

    function setTokenURI(
        uint256 tokenURI
    ) external onlyRole(TOKEN_SETTER_ROLE) {}

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        virtual
        override(AccessControl, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
