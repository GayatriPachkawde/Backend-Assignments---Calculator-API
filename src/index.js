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

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.post("/add", (req, res) => {
  const limit = 1000000;
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2;
  let msg = `the sum of given two numbers`;
  let sts = "success";

  //let err = false;
  if (!num1 || !num2) {
    res.send({
      status: "error",
      message: "Invalid data types",
    });
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
    sum: result,
  });
});

app.post("/sub", (req, res) => {
  console.log(Number("34.54"));
  const limit = 1000000;
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 - num2;
  let msg = `the difference of given two numbers`;
  let sts = "success";
  //let err = false;
  if (!num1 || !num2) {
    res.send({
      status: "error",
      message: "Invalid data types",
    });
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
    difference: result,
  });
});

app.post("/multiply", (req, res) => {
  const limit = 1000000;
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 * num2;
  let msg = `The product of given numbers`;
  let sts = "success";

  if (!num1 || !num2) {
    res.send({
      status: "error",
      message: "Invalid data types",
    });
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

app.post("/divide", (req, res) => {
  const limit = 1000000;
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 / num2;
  let msg = `The division of given numbers`;
  let sts = "success";
  //let err = false;
  if (!num1 || !num2) {
    res.send({
      status: "error",
      message: "Invalid data types",
    });
  }
  if (num1 < -limit || num2 < -limit || result < -limit) {
    msg = "Underflow";
    sts = "error";
  }
  if (num1 > limit || num2 > limit || result > limit) {
    msg = "Overflow";
    sts = "error";
  }

  if (num2 === 0) {
    res.send({
      status: "error",
      message: "Cannot divide by zero",
      result: result,
    });
  } else {
    res.send({
      status: sts,
      message: msg,
      result: result,
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
