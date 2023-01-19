import React, { useContext, useEffect } from "react";
import { VotingContext } from "../context";

const Home = () => {
  const { account, setTheAccount, myContract } = useContext(VotingContext);
  useEffect(() => {
    console.log(account);
    console.log(myContract);
  }, [account]);
  return (
    <div>
      <h1>Hello</h1>
      {account.length > 0 ? (
        <h1>Connected</h1>
      ) : (
        <button
          onClick={() => {
            setTheAccount();
          }}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Home;
