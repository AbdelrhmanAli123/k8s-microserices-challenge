const express = require("express");
const env = require("dotenv");
env.config({ path: "./.env" });
const superagent = require("superagent");
const app = express();

console.log(process.env.API_URL)
const fetchData = async (req, res) => {
  try {
    const API_URL = process.env.API_URL || "localhost:8081/json" ;
    const jsonData = await superagent.get(API_URL);
    res.status(200).json({
      status: "successful",
      data: {
        jsonData,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: "failed",
      err
    });
  }
};

app.route("/fetch").get(fetchData);

const PORT = process.env.PORT || 8888;
app.listen(PORT, err => {
  console.log("listening on port 8888");
});
