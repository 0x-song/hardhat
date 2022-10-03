// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter{

    uint public number ;


    function count() public{
        number = number + 1;
    }

    function get() public view returns(uint){
        return number;
    }
}