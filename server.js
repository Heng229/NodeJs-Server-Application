
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//Must use this if need to parse parameter via http post/get etc.
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.post("/bmiCalculator.html", function(req,res){
    var bmi = Number(req.body.weight) + Number(req.body.height);
    res.send('The BMI calculated is ' + bmi);
    res.send('This is branch dev-branch code.');
});

app.listen(3000, ()=>{
    console.log("Server started...")
});