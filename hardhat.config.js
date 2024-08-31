require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    amoy: {
      url: 'https://polygon-amoy.drpc.org',
      accounts: ["875232cca678e34ae147079b800704dc733cc42c4fb72df05546259d49539ba6"],
    },
    sepholia: {
      url: 'https://ethereum-sepolia-rpc.publicnode.com',
      accounts: ["875232cca678e34ae147079b800704dc733cc42c4fb72df05546259d49539ba6"],
    },
  }
};
