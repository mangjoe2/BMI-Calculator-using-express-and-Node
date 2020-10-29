const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
// app.get("/", function(req, res){
//     res.send("<h2>Hello Guys... This is Mr Mangazie</h2>");
// });

app.get("/", function(req, res){
    res.sendFile(__dirname  + "/index.html")
});

app.post("/", function(req, res){

    // console.log(req.body.num1);

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("The result of the calculation is: " + result);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weih = parseFloat(req.body.weight);
    var heih = parseFloat(req.body.height);

    var bmi = weih /(weih * heih);

    res.send("your BMI is: " + bmi);
});

app.listen("4000", function(){
    console.log("The server is listen on port 4000");
});