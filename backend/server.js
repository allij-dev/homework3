var express = require('express'); // remember to install these in the top directory to fill in 
var path = require('path');      // your package.json, as well as anything else you want to add
var app = express();
app.use(express.static('../public/'));

var database = require('./database.json');
// Don't change anything above this line unless you know what it will do


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/users/:username/:pwd',function(req,res){

    var Username = req.params.username;
    console.log(Username)
    var Password = req.params.pwd;
    var returnmessage
    console.log(Password)
    for (var i =0; i<database.Users.length; i++){
        console.log(i)
        console.log(database.Users[i].password)
        console.log(database.Users[i].username)
        console.log(Username)
        console.log(Password)
        console.log(database.Users[i].username===Username)
        console.log(database.Users[i].password===Password)
        if (database.Users[i].username===Username) {
            if (database.Users[i].password===Password) {
             returnmessage="welcome back!";
             console.log(returnmessage)
             break
            } else {
             returnmessage="sorry, wrong password";
             console.log(returnmessage) 
             break
            }
        } else {
            returnmessage="looks like you're new here, please register";
            console.log(returnmessage)
    }}
    res.send('<h1> '+returnmessage+'</h1>');
  });

app.listen(8080);