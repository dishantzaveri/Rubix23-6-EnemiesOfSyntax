import ethers from "ethers";
import Web3Modal from "web3modal";

import { VotingAppAddress, VotingAppABI } from "../constants";

export const checkIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask");
    const accounts = window.ethereum.request({
      method: "eth_accounts",
    });

    return accounts[0];
  } catch (e) {
    console.log(e);
  }
};

export const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      console.log("Install Metamask");
      return;
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  } catch (e) {
    console.log(e);
  }
};

const fetchContract = (signerOrProvider) => {
  return new ethers.Contract(VotingAppABI, VotingAppAddress, signerOrProvider);
};

export const connectingWithContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    return contract;
  } catch (e) {
    console.log(e);
  }
};
