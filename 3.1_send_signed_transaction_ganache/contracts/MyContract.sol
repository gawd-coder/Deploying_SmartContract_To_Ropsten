pragma solidity ^0.5.16;

contract MyContract{
    uint data;

    // we will call this fucntion after deploying smart contract on public testnet
    // function to change the variable
    function setData(uint _data) external {
        data = _data;
    }

    // function to get the value of variable
    function getData() external view returns (uint) {
        return data;
    }
}