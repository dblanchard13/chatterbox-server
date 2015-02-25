var express = require('express');
var actions = require("./request-handler.js").actions;
var app = express();

var router = express.Router();

router.route('/classes/room1')
.all(function(request, response, next){
  console.log(request.method);
  if(request.method === "OPTIONS"){
    console.log(request.method);
    actions.OPTIONS(request, response);
  } else {
    next();
  }
})
.get(function(request, response){
  console.log(request.method);
  actions.GET(request, response);
})
.post(function(request, response){
  actions.POST(request, response);
})

router.route('/')
.get(function(request, response){
  actions.GET(request, response);
})

app.use('/', router);

app.listen(3000, function(){
  console.log('Hello Server, You beautiful babe')
});