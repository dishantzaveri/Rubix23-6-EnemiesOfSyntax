import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { VotingContext } from "../context";
import homeImage from "../assets/home.svg";
const Home = () => {
  const { account, setTheAccount } = useContext(VotingContext);
  useEffect(() => {
    console.log(account);
  }, [account]);
  return (
    <div className="bg-[#000000]">
      <Navbar />
      <div className="flex flex-row">
        <div>
          <img className="h-[754px] w-[544px]" src={homeImage} />
        </div>
        <>
          {account.length > 0 ? (
            <div className="flex flex-col mt-[100px] ml-[200px] items-between">
              <h1 className="text-white text-3xl font-semibold mt-4">
                Be a part of the Decision
              </h1>
              <h1 className="text-[#015FC7] text-5xl font-bold mt-4">
                Vote Today
              </h1>
              <div className="flex flex-row justify-evenly">
                <Link
                  to="/add-election"
                  className="text-white bg-[#015FC7] p-2 mt-4 w-[150px] text-center"
                >
                  <h1 className="">Hold an Election</h1>
                </Link>
                <Link
                  to="/elections"
                  className="text-white bg-[#015FC7] p-2 mt-4 w-[150px] text-center"
                >
                  Vote
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col mt-[100px] ml-[200px] items-between">
              <h1 className="text-white text-3xl font-semibold mt-4">
                Be a part of the Decision
              </h1>
              <h1 className="text-[#015FC7] text-5xl font-bold mt-4">
                Vote Today
              </h1>
              <button
                onClick={() => {
                  setTheAccount();
                }}
                className="text-white bg-[#015FC7] p-2 mt-4"
              >
                Connect Wallet
              </button>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Home;
