const assert = require("assert");

console.log(assert.ok());

const assertionModule = () => {
  console.log("assertion: ", assert.ok());
};

module.exports = {
  assertion,
};
