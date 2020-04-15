const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\index.html");
});
app.get("/postRequest.js", (req, res) => {
  res.sendFile(__dirname + "\\postRequest.js");
});
app.post("/getposts", (req, res) => {
  console.log("Got request");
  res.set("Content-Type", "text/plain");
  res.send("Heyyyyyyy!");
});

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}...`);
});
