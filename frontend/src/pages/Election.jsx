import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { VotingContext } from "../context";
import { ToastContainer, toast } from "react-toastify";
const Election = () => {
  const { account, setTheAccount, connectingWithContract } =
    useContext(VotingContext);
  const [allCandidates, setAllCandidates] = useState([]);
  const [voters, setVoters] = useState([]);
  const [electionDetails, setElectionDetails] = useState([]);
  const [panNumber, setPanNumber] = useState("");
  const [selected, setSelected] = useState("");
  useEffect(() => {
    getElectionDetails();
    getVotes();
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
    setAllCandidates(candidates);
    setVoters(voters);
    setElectionDetails(response);
    console.log(parseInt(response.numberOfCandidates._hex));
  };
  const voteKaro = async () => {
    if (!voters.includes(panNumber)) {
      console.log("Not Authorized");
      toast.error("Not Authorized to vote", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const contract = await connectingWithContract();
    const response = await contract.voteKarteRaho(8, selected, panNumber);
    console.log(response);
  };

  const getVotes = async () => {
    const contract = await connectingWithContract();
    const response = await contract.differentSystemVotes(8, "Yuvraj");
    console.log(response);
  };
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div>
        {electionDetails?.length > 0 ? (
          <div>
            <h1>{electionDetails.systemName}</h1>
            <h1>
              Number of Candidates:{" "}
              {parseInt(electionDetails.numberOfCandidates._hex)}
            </h1>
            <h1>Election Held By: {electionDetails.electionHelderName}</h1>
            <h1>
              Time Till:{" "}
              {new Date(
                parseInt(electionDetails?.votingPeriod?._hex) * 1000
              ).getDate() +
                "-" +
                parseInt(
                  new Date(
                    parseInt(electionDetails?.votingPeriod?._hex) * 1000
                  ).getUTCMonth() + 1
                ) +
                "-" +
                new Date(
                  parseInt(electionDetails?.votingPeriod?._hex) * 1000
                ).getFullYear()}
            </h1>
            <div>
              <input
                placeholder="Enter PAN number"
                value={panNumber}
                onChange={(e) => {
                  setPanNumber(e.target.value);
                }}
              />
            </div>
            <div onChange={(e) => setSelected(e.target.value)}>
              {allCandidates?.map((c) => {
                return (
                  <div key={c}>
                    <input type="radio" value={c} name="candidate" />
                    {c}
                  </div>
                );
              })}
            </div>
            <button
              className="text-white bg-[#015FC7] p-2 mt-4"
              onClick={() => voteKaro()}
            >
              Vote
            </button>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Election;
