/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const projectId = "ad47ec9656b540b986721d02f594f98b"
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/$(projectId)",
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/$(projectId)",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
