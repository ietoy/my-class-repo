// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Set up Express App
// =============================================================
var app = express();
var PORT = 3000;

// Set up Express App to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table Data
// =============================================================
var tables = [];
// console.log(tables);


// Wait List Data
// =============================================================
var waitlist = [];
// console.log(waitList);




// Routes
// =============================================================

// Navigate across web pages
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
})

// Return JSON object of Table and Waitlist Data
app.get("/api/tables", function(req, res) {
    return res.json(tables);    
})
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);    
})

// Starts Server Listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})