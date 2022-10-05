# hardhat

## 安装使用

1.执行npm install --save hardhat来安装hardhat。但是需要注意的是安装hardhat和安装truffle不太一样，不是全局安装。

2.在项目根目录下执行npx hardhat.按照指令一步一步操作即可。

## 编译

使用指令npx hardhat compile来对合约进行编译。

## 部署

1.设置需要部署的网络。

```js
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

```

设置关于网络的相关信息，如果希望使用本地网络，可以使用harhat内置的网络。通过**npx  hardhat node**指令来开启网络。

2.编写配置脚本

在scripts目录下编写deploy_counter.js文件

```js
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("Counter");
  const lock = await Lock.deploy();

  await lock.deployed();

  console.log(
    `Counter deplpyed`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

```

3.启动网络

​	如果是在本地进行部署，则通过npx hardhat node来启动本地网络。

4.执行部署

​	**npx hardhat run --network development scripts/deploy_counter.js**

​	如果希望可以部署到其他测试网

​	**npx hardhat run --network goerli scripts/deploy_counter.js**

​	done







console.log打印日志，可以很方便在链上进行排查。合约需要导入import 'hardhat/console.sol'