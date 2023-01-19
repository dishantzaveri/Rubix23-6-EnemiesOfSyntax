import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { VotingContext } from "../context";
import Modal from "react-modal";

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
  const [open, setOpen] = useState("");
  const [candidate, setCandidate] = useState("");
  const [checked, setChecked] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="w-full px-36 py-16 flex flex-col gap-6">
        <h1 className="text-3xl font-semibold">Voting panel</h1>
        <div
          className="flex flex-col items-center"
          onMouseEnter={() => setOpen("Narendra Modi")}
          onMouseLeave={() => setOpen("")}
        >
          <div className="w-full grid grid-cols-12 px-6 py-4 bg-gray-50 border rounded">
            <input
              className="cols-span-1"
              type="radio"
              name="candidate"
              id=""
              checked={candidate === "Narendra Modi"}
              onChange={() => setCandidate("Narendra Modi")}
            />
            <h1 className="text-lg col-span-5">Narendra Modi</h1>
            <h1 className="text-lg col-span-5">BJP</h1>
            <h1 className="text-lg col-span-1 text-end">></h1>
          </div>
          <div
            className={`${
              open !== "Narendra Modi" ? "hidden" : ""
            } w-[90%] py-6 px-12 border`}
          >
            <h1 className="text-lg">Name: Narendra Modi</h1>
            <h1 className="text-lg">Party: BJP</h1>
            <h1 className="text-lg">Age: 70</h1>
            <h1 className="text-lg">Education: M.A. in Political Science</h1>
          </div>
        </div>
        <div
          className="flex flex-col items-center"
          onMouseEnter={() => setOpen("Rahul Gandhi")}
          onMouseLeave={() => setOpen("")}
        >
          <div className="w-full grid grid-cols-12 px-6 py-4 bg-gray-50 border rounded">
            <input
              className="cols-span-1"
              type="radio"
              name="candidate"
              id=""
              checked={candidate === "Rahul Gandhi"}
              onChange={() => setCandidate("Rahul Gandhi")}
            />
            <h1 className="text-lg col-span-5">Rahul Gandhi</h1>
            <h1 className="text-lg col-span-5">Congress</h1>
            <h1 className="text-lg col-span-1 text-end">></h1>
          </div>
          <div
            className={`${
              open !== "Rahul Gandhi" ? "hidden" : ""
            } w-[90%] py-6 px-12 border`}
          >
            <h1 className="text-lg">Name: Rahul Gandhi</h1>
            <h1 className="text-lg">Party: Congress</h1>
            <h1 className="text-lg">Age: 70</h1>
            <h1 className="text-lg">Education: M.A. in Political Science</h1>
          </div>
        </div>
        <div
          className="flex flex-col items-center"
          onMouseEnter={() => setOpen("Arvind Kejriwal")}
          onMouseLeave={() => setOpen("")}
        >
          <div className="w-full grid grid-cols-12 px-6 py-4 bg-gray-50 border rounded">
            <input
              className="cols-span-1"
              type="radio"
              name="candidate"
              id=""
              checked={candidate === "Arvind Kejriwal"}
              onChange={() => setCandidate("Arvind Kejriwal")}
            />
            <h1 className="text-lg col-span-5">Arvind Kejriwal</h1>
            <h1 className="text-lg col-span-5">AAP</h1>
            <h1 className="text-lg col-span-1 text-end">></h1>
          </div>
          <div
            className={`${
              open !== "Arvind Kejriwal" ? "hidden" : ""
            } w-[90%] py-6 px-12 border`}
          >
            <h1 className="text-lg">Name: Arvind Kejriwal</h1>
            <h1 className="text-lg">Party: AAP</h1>
            <h1 className="text-lg">Age: 70</h1>
            <h1 className="text-lg">Education: M.A. in Political Science</h1>
          </div>
        </div>
        <div className="flex gap-4">
          {candidate ? (
            <>
              <input
                type="checkbox"
                name=""
                id=""
                checked={checked}
                onClick={() => setChecked((prev) => !prev)}
              />
              <h1>I have selected {candidate} as my candidate</h1>
            </>
          ) : (
            <h1 className="text-red-500">Please select a candidate</h1>
          )}
        </div>
        <button
          className={`${
            checked ? "bg-blue-500" : "bg-gray-500"
          } text-white px-4 py-2 rounded`}
          disabled={!checked}
          onClick={() => setModal(true)}
        >
          Vote
        </button>
        <Modal
          isOpen={modal}
          onRequestClose={() => setModal(false)}
          shouldCloseOnOverlayClick={false}
          className="w-screen h-screen flex items-center justify-center"
        >
          <div className="w-1/3 h-1/3 m-auto bg-white rounded border flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold">Are you sure?</h1>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setModal(false)}
              >
                Yes
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
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
