import React, { useContext } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { VotingContext } from "../context";

const Election = () => {
  const { account, setTheAccount, connectingWithContract } =
    useContext(VotingContext);
  useEffect(() => {
    getElectionDetails();
  }, []);
  const getElectionDetails = async () => {
    setTheAccount();
    const contract = await connectingWithContract();
    const response = await contract.systems(8);
    console.log(response);
    const candidates = await contract.getCandidates(8);
    const voters = await contract.getVoters(8);
    console.log(candidates);
    console.log(voters);
    console.log(parseInt(response.numberOfCandidates._hex));
  };
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Election;
