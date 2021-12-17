
const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function (req,res){
    console.log(req.body)
    let n1 = Number(req.body.num1);
    let n2 = Number(req.body.num2);

    let result = n1 + n2;


    res.send("The result is: " + result)
})

//BMI Calculator Routes

app.get("/bmicalculator", function(req,res){
    res.sendFile( __dirname + '/bmiCalculator.html')
})

//logic

app.post('/bmicalculator', function (req,res){
    console.log(req.body)
    let w = parseFloat(req.body.weight);
    let h = parseFloat(req.body.height);

    let result = w / (h * h);


    res.send("The result is: " + result)
})



app.listen(3002, function(){
    console.log("server is running on port 3001")
})
