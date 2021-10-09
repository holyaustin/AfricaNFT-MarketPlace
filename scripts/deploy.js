const hre = require("hardhat");

async function main() {
  const RandNum = await hre.ethers.getContractFactory("RandomNumberConsumer")
  const randnum = await RandNum.deploy()
  await randnum.deployed()
  console.log("Random Contract deployed to:", randnum.address);

  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();
  console.log("nftMarket Contract deployed to:", nftMarket.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarket.address);
  await nft.deployed();
  console.log("nft Minting Contract deployed to:", nft.address);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
