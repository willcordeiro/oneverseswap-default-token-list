const { version } = require("../package.json");
const findora = require("./tokens/findora.json");
//const goerli = require("./tokens/anvil.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "OneverseSwap Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://oneverse.one/static/media/logomark.163d6457.svg",
    keywords: ["oneverseswap", "default"],
    tokens: [...findora]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
