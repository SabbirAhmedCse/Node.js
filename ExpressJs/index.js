const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log('sa'+req.baseUrl);

  res.send("sabbir");
});
app.listen((port = 5000), () => {
  console.log(`Exress.js listen on port:${5000}`);
});
