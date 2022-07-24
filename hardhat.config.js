require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: process.env.YOUR_ALCHEMY_MUMBAI_URL,
      accounts: [process.env.YOUR_TEST_WALLET_PRIVATE_KEY],
    },
  },
};
