const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { json } = require("express");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", function (req, res) {});

app.post("/add/:num1/:num2", (req, res) => {
  const JSONparams = req.params;
  const num1 = parseInt(JSONparams.num1);
  const num2 = parseInt(JSONparams.num2);
  //const sum = parseInt(JSONparams.num1) + ;
  //console.log(sum);
  //   const response = JSON.parse(JSONparams);
  //   const sum = response.num1 + response.num2;
  // res.sendStatus(200);
  res.set({ "content-type": "Application/json" });
  res.send({
    status: "success",
    message: `the sum of given two numbers`,
    sum: num1 + num2,
  });
});
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
