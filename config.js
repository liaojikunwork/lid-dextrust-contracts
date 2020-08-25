const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1598327940,
  hardCapTimer: 172800,
  softCap: ether("2000"),
};

config.redeemer = {
  redeemBP: 200,
  redeemInterval: 3600,
  bonusRangeStart: [ether("0"), ether("1000"), ether("2000"), ether("3000")],
  bonusRangeBP: [3500, 2500, 1000, 0],
};

config.presale = {
  maxBuyPerAddress: ether("20"),
  maxBuyWithoutWhitelisting: ether("20"),
  uniswapEthBP: 7500,
  lidEthBP: 500,
  referralBP: 250,
  hardcap: ether("4000"),
  token: "0xd379700999f4805ce80aa32db46a94df64561108",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2",
  uniswapTokenBP: 1700,
  presaleTokenBP: 5000,
  tokenDistributionBP: {
    dao: 2000,
    team: 900,
    marketing: 400,
  },
};

module.exports = config;
