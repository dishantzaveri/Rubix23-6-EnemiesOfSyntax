import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { VotingContext } from "../context";
import homeImage from "../assets/home.svg";
import axios from "axios";
const Home = () => {
  const { account, setTheAccount } = useContext(VotingContext);
  const options = {
    method: "POST",
    url: "https://pan-card-verification1.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_pan",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "618b6ec4abmsh228074d51b65ea4p1f72d8jsn8883234e6b85",
      "X-RapidAPI-Host": "pan-card-verification1.p.rapidapi.com",
    },
    data: '{"task_id":"74f4c926-250c-43ca-9c53-453e87ceacd1","group_id":"8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e","data":{"id_number":"NNDPS4508E"}}',
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])
  
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
