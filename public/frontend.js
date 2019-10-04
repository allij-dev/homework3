
var httpGet = function(theUrl)
{
    console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        console.log(xmlHttp.responseText);
        document.getElementById('loginresponse').innerHTML=xmlHttp.responseText;
    }
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send();
}

var login = function(){
    var username = document.getElementById('username').value;
    var pwd = document.getElementById('password').value;
    var theURL = '/users/'+username+'/'+pwd;
    httpGet(theURL);
};