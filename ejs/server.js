const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})
app.get("/things.js", function(req, res){
    res.render("things.js")
})
app.get("/sobre", function(req, res){
    res.render("about");
})

app.listen(8080);
console.log("It's Ok");