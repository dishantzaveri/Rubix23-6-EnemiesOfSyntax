// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Voting{
    address payable owner;
    mapping (address => uint) votingDone;
    enum Period{
        LIVE,
        END
    }
    Period public _period;
    constructor() {
        owner = payable(msg.sender);
    }

    function setPeriod(Period _status) public {
        require(msg.sender == owner, "Not Authorized");
        _period = _status;
    }

    function showBalance() public view returns(uint) {
        return address(this).balance;
    }

    function voteKarteRaho() public payable {
        require(_period == Period.LIVE, "Voting is ended");
        voteKaro();
    }

    function voteKaro() internal{
        require(votingDone[msg.sender] < 1, "You have voted already");
        require(msg.value == 1 ether, "Please send 1 ether to vote");
        votingDone[msg.sender] +=1;
    }

    function addMoneyToOwner() public payable{
        require(msg.sender == owner, "Not Authorized");
        payable(msg.sender).transfer(1 ether);
    }

}
