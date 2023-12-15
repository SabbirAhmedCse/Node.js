const path = require("path");

const pathModule = () => {
  console.log(path.dirname(""));
  console.log(path.basename());
  console.log(path.delimiter);
  console.log(path.extname());
};

module.exports = {
  pathModule,
};
