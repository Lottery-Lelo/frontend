import web3 from "./web3";

import LotteryFactory from "./build/LotteryFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(LotteryFactory.interface),
  "0xd2a5bC10698FD955D1Fe6cb468a17809A08fd005"
);

export default instance;
