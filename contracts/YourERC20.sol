//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

//import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract YourERC20 is ERC20 {

  constructor() public ERC20("YourERC20", "YERC") {
  }

  function mintTokens(address to, uint256 amount)
      public
  {
      _mint(to, amount);
  }
}
