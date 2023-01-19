import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { VotingContext } from "../context";
import Modal from "react-modal";

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
      </div>
    </div>
  );
};

export default Election;
