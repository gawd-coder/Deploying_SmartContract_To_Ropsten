# Deploying_SmartContract_To_Ropsten
Web3 smart contract deployments on Ropsten and other public Testnets (Kovan, Rinkeby...) using Infura (public API for Ethereum). You don't need to sign transactions when deploying and testing on ganache but when working on a real network it is required. It isn't easy to run an Ethereum node connected to mainnet or public testnet. We will use the public API called Infura for that. 
Dependency :- 

1. A Web3 provider (truffle/hdwallet-provider)that allows you to use ethereum addresses and sign transactions with these addresses. This is used in Server Side in most cases with Metamask in frontend. 
2. Generated ethereum address and private key to sign our transaction using package called eth-cli
<img width="609" alt="Screenshot 2021-09-25 at 6 10 49 PM" src="https://user-images.githubusercontent.com/57283161/134771989-59ddd670-9a9b-4bf8-a2f4-e57fa8ea69df.png">


# Install

This project uses Node Version Manager : `nvm`, `Node`,`Node Package Manager` : `npm`, `Web3`, `Truffle` and `Ganache-CLI` and above mentioned dependencies. Go check them out if you don't have them locally installed.

$ `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`

$ `nvm install node`

$ `npm install -g web3`

$ `npm install -g truffle`

$ `npm install @truffle/hdwallet-provider`

$ `npm i -g eth-cli`

# Interpretation :

Use `truffle init` to create a bare Truffle project with no smart contracts included. 

Created `MyContract.sol` under contracts folder and added all calling functions for smart contract and reading data from blockchain in it. 
After that I have created the script file `index.js` under contracts folder and added all code for running transactions on our testing framework using `Truffle` and `Ganache`. 

Run `truffle compile` to compile the contracts. After compiling you will have a build folder in your main folder and it contains all ABI files ( abi is a json that describes all the functions of smart contract that can be called from outside ) made after the compilation step

Starting ganache instance with `truffle develop` command to deploy the contract. Once the truffle console is ready run `migrate --reset`. Now you can see the network key has changed in MyContract.json under build and contains deployed address

Send signed transaction to ganache using HDWalletprovider package to deploy on Ganache :-
<img width="501" alt="Screenshot 2021-09-25 at 10 14 56 AM" src="https://user-images.githubusercontent.com/57283161/134772060-f0c9e300-84e4-4871-9fbe-d23d67d62ecb.png">


Sending this transaction to a public network here, Ropsten (one of the most used public testnet of Ethereum, we manipulate fake ether here so it doesn't matter if you break anything). TO start we don't have Ether to spend on Ropsten network, so we will use Faucet which allows anyone to get free Ether from Ropsten network :-

1. Copy the created address

2. Go to URL faucet.ropsten.be 


Next Step is using Infura (API service for Ethereum node) to access the Ropsten network so that we don't have to run an Ethereum node for Ropsten ourselves

After deploying on Ropsten :- 
<img width="550" alt="Screenshot 2021-09-25 at 5 52 48 PM" src="https://user-images.githubusercontent.com/57283161/134772117-a86381fb-fc13-4230-bfc2-2d0986fddfcc.png">


# Contributing

Feel free to dive in! Open an issue or submit PRs.
