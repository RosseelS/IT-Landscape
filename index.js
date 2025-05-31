var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('{ "response": "Hello From Thetips4you" }');
});

app.get("/will", function (req, res) {
  res.send('{ "response": "Hello World" }');
});
app.get("/ready", function (req, res) {
  res.send('{ "response": " Great!, It works!" }');
});
app.get("/test", function (req, res) {
  res.send('{"response": "Great!, The test works!" }');
});
app.get("/test2", function (req, res) {
  res.send("{ 'Response:' 'Great test 2 is working' }")
})
app.listen(process.env.PORT || 3000);
module.exports = app;
