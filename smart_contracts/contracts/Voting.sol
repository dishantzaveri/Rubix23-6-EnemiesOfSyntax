// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Voting{
    
    struct VotingSystem{
        uint uniqueId;
        string systemName;
        uint numberOfCandidates;
        string[] candidates;
        uint votingPeriod;       
    }

    mapping (uint => mapping (string => uint)) public differentSystemVotes; 
    mapping (uint => mapping (address => bool)) differentSystemVotingDone;
    mapping (uint => VotingSystem) public systems; 

    function createSystem(uint _uniqueId, string memory _systemName, uint _numberOfCandidates, string[] memory _candidates,uint numberOfDays) public   {
        uint _votingPeriod = block.timestamp + (numberOfDays * 1 days);
        VotingSystem memory system =  VotingSystem(_uniqueId,_systemName,_numberOfCandidates,_candidates,_votingPeriod);
        systems[_uniqueId] = system;
    }

    address payable owner;
    mapping (address => uint) votingDone;
  
    constructor() {
        owner = payable(msg.sender);
    }


    function showBalance() public view returns(uint) {
        return address(this).balance;
    }

    function voteKarteRaho(uint _uniqueId,string memory _candidateName) public  {
        voteKaro(_uniqueId,_candidateName);
    }

    function voteKaro(uint _uniqueId,string memory _candidateName) internal{
        require(differentSystemVotingDone[_uniqueId][msg.sender]==false,"You have already Voted");
        require(systems[_uniqueId].votingPeriod >= block.timestamp, "The voting time is Over!");
        differentSystemVotes[_uniqueId][_candidateName] +=1;
        differentSystemVotingDone[_uniqueId][msg.sender] = true;
    }

    function addMoneyToOwner() public payable{
        require(msg.sender == owner, "Not Authorized");
        payable(msg.sender).transfer(1 ether);
    }

}
