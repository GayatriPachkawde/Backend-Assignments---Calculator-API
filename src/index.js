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

app.post("/add", (req, res) => {
  const limit = 1000000;
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const result = num1 + num2;
  let msg = `the sum of given two numbers`;
  let sts = "success";
  //let err = false;
  if (num1 < -limit || num2 < -limit || result < -limit) {
    msg = "Underflow";
    sts = "error";
  }
  if (num1 > limit || num2 > limit || result > limit) {
    msg = "Overflow";
    sts = "error";
  }

  res.send({
    status: sts,
    message: msg,
    sum: result,
  });
});

app.post("/sub", (req, res) => {
  const limit = 1000000;
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const result = num1 - num2;
  let msg = `the difference of given two numbers`;
  let sts = "success";
  //let err = false;
  if (num1 < -limit || num2 < -limit || result < -limit) {
    msg = "Underflow";
    sts = "error";
  }
  if (num1 > limit || num2 > limit || result > limit) {
    msg = "Overflow";
    sts = "error";
  }

  res.send({
    status: sts,
    message: msg,
    difference: result,
  });
});

app.post("/multiply", (req, res) => {
  const limit = 1000000;
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const result = num1 * num2;
  let msg = `The product of given numbers`;
  let sts = "success";
  //let err = false;
  if (num1 < -limit || num2 < -limit || result < -limit) {
    msg = "Underflow";
    sts = "error";
  }
  if (num1 > limit || num2 > limit || result > limit) {
    msg = "Overflow";
    sts = "error";
  }

  res.send({
    status: sts,
    message: msg,
    result: result,
  });
});

app.post("/divide", (req, res) => {
  const limit = 1000000;
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const result = num1 / num2;
  let msg = `The division of given numbers`;
  let sts = "success";
  //let err = false;
  if (num2 === 0) {
    msg = "Cannot divide by zero";
    sts = "error";
  }
  if (num1 < -limit || num2 < -limit || result < -limit) {
    msg = "Underflow";
    sts = "error";
  }
  if (num1 > limit || num2 > limit || result > limit) {
    msg = "Overflow";
    sts = "error";
  }

  res.send({
    status: sts,
    message: msg,
    result: result,
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
