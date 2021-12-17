
const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function (req,res){
    console.log(req.body)
    let n1 = req.body.num1;
    let n2 = req.body.num2;

    let result = n1 + n2;


    res.send("The result is: " + result)
})


app.listen(3002, function(){
    console.log("server is running on port 3001")
})
