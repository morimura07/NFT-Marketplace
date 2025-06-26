
const hre = require("hardhat");

async function main() {

  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const NFTMarketContract = await NFTMarket.deploy();

  const NFT = await hre.ethers.getContractFactory("NFT");
  const NFTContract = await NFT.deploy();

  await NFTMarketContract.deployed();
  await NFTContract.deployed();

  console.log("NFTMarketContract deployed to:", NFTMarketContract.address);
  console.log("NFTContract deployed to:", NFTContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
