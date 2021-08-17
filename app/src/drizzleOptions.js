import Web3 from "web3";
import DigitalTaka from "./contracts/DigitalTaka.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:7545"),
  },
  contracts: [DigitalTaka],
  events: {
    DigitalTaka: ["Transfer"],
  },
};

export default options;
