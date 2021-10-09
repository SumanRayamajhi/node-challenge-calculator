const { response } = require("express");
const express = require("express");
const app = express();

const getFunction = (req, res) => {
  res.send("Hello Express");
};
const addFunction = (req, res) => {
  const value1 = req.query.value1;
  const value2 = req.query.value2;
  const v1 = parseInt(value1);
  const v2 = parseInt(value2);
  res.send(`${v1 + v2}`);
};
const subtractFunction = (req, res) => {
  const value1 = req.query.value1;
  const value2 = req.query.value2;
  const v1 = parseInt(value1);
  const v2 = parseInt(value2);
  res.send(`${v1 - v2}`);
};
const multiplyFunction = (req, res) => {
  const value1 = req.query.value1;
  const value2 = req.query.value2;
  const v1 = parseInt(value1);
  const v2 = parseInt(value2);
  res.send(`${v1 * v2}`);
};
const divideFunction = (req, res) => {
  const value1 = req.query.value1;
  const value2 = req.query.value2;
  const v1 = parseInt(value1);
  const v2 = parseInt(value2);
  res.send(`${v1 / v2}`);
};

const addMoreFunction = (req, res) => {
  const value1 = req.params.value1;
  const value2 = req.params.value2;
  const v1 = parseInt(value1);
  const v2 = parseInt(value2);
  res.send(`${v1 + v2}`);
};
const subtractMoreFunction = (req, res) => {
  const value1 = req.params.value1;
  const value2 = req.params.value2;
  const v1 = parseInt(value1);
  const v2 = parseInt(value2);
  res.send(`${v1 - v2}`);
};
const multiplyMoreFunction = (req, res) => {
  const value1 = req.params.value1;
  const value2 = req.params.value2;
  const v1 = parseInt(value1);
  const v2 = parseInt(value2);
  res.send(`${v1 * v2}`);
};
const divideMoreFunction = (req, res) => {
  const value1 = req.params.value1;
  const value2 = req.params.value2;
  const v1 = parseInt(value1);
  const v2 = parseInt(value2);
  res.send(`${v1 / v2}`);
};

const myLogger = (req, res, next) => {

  const visitTime = new Date();
  console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
  next();
};
app.use(myLogger);

app.get("/add", addFunction);
app.get("/subtract", subtractFunction);
app.get("/multiply", multiplyFunction);
app.get("/divide", divideFunction);
app.get("/add/:value1/:value2", addMoreFunction);
app.get("/subtract/:value1/:value2", subtractMoreFunction);
app.get("/multiply/:value1/:value2", multiplyMoreFunction);
app.get("/divide/:value1/:value2", divideMoreFunction);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server is up and running at PORT: ${PORT}`)
);
