const os = require("os");
const osModule = () => {
  console.log("architecture: ", os.arch());
  console.log("cpus: ", os.cpus());
  console.log("endianness: ", os.endianness());
  console.log("hostname: ", os.hostname());
  console.log("freemem: ", os.freemem());
  console.log("getPriority: ", os.getPriority());
  console.log("loadavg: ", os.loadavg());
  //console.log("machine: ", os.machine());
  console.log("networkInterfaces: ", os.networkInterfaces());
  console.log("platform: ", os.platform());
  console.log("release: ", os.release());
  //console.log("setPriority: ", os.setPriority());
  console.log("tmpdir: ", os.tmpdir());
  console.log("totalmem: ", os.totalmem());
  console.log("type: ", os.type());
  console.log("uptime: ", os.uptime());
  console.log("userInfo: ", os.userInfo());
  console.log("version: ", os.version());
};

module.exports = {
  osModule,
};
