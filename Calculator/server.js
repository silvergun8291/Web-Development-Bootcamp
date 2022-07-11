
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {

console.log(req.body);
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  height = height / 100;

  // console.log(weight);
  // console.log(height);

  var result = weight / (height * height);
  // console.log(result);

  res.send("Your BMI is " + result);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
