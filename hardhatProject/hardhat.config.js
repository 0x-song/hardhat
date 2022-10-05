require("@nomicfoundation/hardhat-toolbox");

const fs = require('fs');
const mnemonic = fs.readFileSync(".mnemonic").toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    development:{
      url:"http://127.0.0.1:8545",
      chainId: 31337
    },
    goerli:{
      url:"https://goerli.infura.io/v3/11cea8aafae6482b864a6c85b9cbe6e7",
      accounts:{
        mnemonic:mnemonic
      },
      chainId:5
    }
  }
};
