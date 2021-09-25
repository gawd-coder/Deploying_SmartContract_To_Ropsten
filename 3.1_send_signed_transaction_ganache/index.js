const Web3 = require('web3');

const MyContract = require('./build/contracts/MyContract.json');

// using HDWalletProvider package to deploy on Ganache :-
const HDWalletProvider = require('@truffle/hdwallet-provider');


// generated ethereum address and private key to sign our transaction using package eth-cli
const address = '0x88bAD83C3CfAd481BAFb4e7EA7037b6961Fec87A';

const privateKey = '0xf77f4430a06c0252232cd6d00e79b58851156226508af69a0f40dbff420c73a2';

const init = async() => {

    // signing the transaction and providing the private key
    const provider = new HDWalletProvider(
        privateKey, 
        // giving URL to Ethereum node i.e. ganache local deployement in this case
        'http://localhost:9545'
    );
    const web3 = new Web3(provider);
    // const web3 = new Web3('http://localhost:9545');

    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    const contract = new web3.eth.Contract(
        MyContract.abi, 
        deployedNetwork.address
    );

    // send a transaction to the network
    await contract.methods
        .setData(10)
        .send({from: address});

    const result = await contract.methods
        .getData()
        .call();
    
    // this will fail on running as we have no ether so doing some changes in deployement script
    console.log(result);
} 

init();