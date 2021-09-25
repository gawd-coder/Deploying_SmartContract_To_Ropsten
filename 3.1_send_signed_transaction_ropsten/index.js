const Web3 = require('web3');

const MyContract = require('./build/contracts/MyContract.json');

// using HDWalletProvider package to deploy on Ganache :-
const HDWalletProvider = require('@truffle/hdwallet-provider');


// generated ethereum address and private key to sign our transaction using package eth-cli
const address = '0x88bAD83C3CfAd481BAFb4e7EA7037b6961Fec87A';

const privateKey = '0xf77f4430a06c0252232cd6d00e79b58851156226508af69a0f40dbff420c73a2';

const init = async() => {

    // signing the transaction and providing the private key
    // we can instead specify the AB mnemonic rather than array of private keys too
    // It is a sequence of 12 words used to generate series of addresses but some other arguments are reqd along with this
    const provider = new HDWalletProvider(
        privateKey, 
        // giving URL to Ethereum node i.e. ganache local deployement in this case
        // 'http://localhost:9545'

        // using URL of Infura deployed on Ropsten testnet rather than that of Ganache
        'https://ropsten.infura.io/v3/f380afefc1c44acb851d6761cda161eb'

    );

    const web3 = new Web3(provider);
    // const web3 = new Web3('http://localhost:9545');

    // not gonna use the migration instance of truffle but instead we will deploy our smart contract ourselves

    // const id = await web3.eth.net.getId();
    // const deployedNetwork = MyContract.networks[id];

    // so now our smart contract doesnt point to any specific instance of blockchain, using let to reassign the contract variable
    let contract = new web3.eth.Contract(
        MyContract.abi,
    );

    // bytecode is where we have compiled code of our smart contract
    contract = await contract  
        .deploy({data : MyContract.bytecode})
        .send({from : address});

    

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