const express = require("express");
const app = express();

getMethod = (req, res) => {
  res.status(200).json({
    id: "1",
    message: "Hello World!",
  });
};

app.route("/json").get(getMethod);
const PORT = process.env.PORT || 8080;
app.listen(PORT, err=> {
  console.log(`listening on ${PORT}`);
});
