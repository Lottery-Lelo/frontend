import web3 from "./web3";
import Lottery from "./build/Lottery.json";

export default (address) => {
  return new web3.eth.Contract(JSON.parse(Lottery.interface), address);
};
