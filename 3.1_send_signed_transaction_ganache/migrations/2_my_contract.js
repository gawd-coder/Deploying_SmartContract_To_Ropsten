const MyContract = artifacts.require("MyContract");

module.exports = async function (deployer, _, accounts) {
  await deployer.deploy(MyContract);

  // adding send transaction in deployement script. Using one of the prefunded accounts on ganache to send some ether to the address we generated to be able to have enough ether to send a transaction
  await web3.eth.sendTransaction({
    from : accounts[0],
    to : '0x88bAD83C3CfAd481BAFb4e7EA7037b6961Fec87A',
    value : web3.utils.toWei('1', 'ether') 
  });
};
