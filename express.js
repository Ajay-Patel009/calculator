// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//    res.send('Hello Worcvdfvld');
// })

// var server = app.listen(8082, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/add/:num1/:num2', function (req, res) {
  // var num1 = parseInt(req.params.num1)
  // var num2 = parseInt(req.params.num2)
  // var sum = (num1 + num2).toString()
  res.send((parseInt(req.params.num1) + parseInt(req.params.num2)).toString());
})

app.get('/subtract/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var difference = (num1 - num2).toString()
  res.send(`Difference of ${num1} and ${num2} is`+difference)
})

app.get('/multiply/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var product = (num1 * num2).toString()
  res.send(product)
})

app.get('/divide/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var quotient = (num1 / num2).toString()
  res.send(quotient)

})

app.get('/power/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var pow = (num1 ** num2).toString()
  res.send(pow)
})

app.get('/sqrt/:num1', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var squareroot = (Math.sqrt(num1)).toString()
  res.send(`suareroot of ${num1} is` + squareroot)
})



app.listen(4000, function () {
  console.log('Successfully started express applicationn!')
})