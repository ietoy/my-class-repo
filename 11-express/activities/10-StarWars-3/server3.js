// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does this route do?
  // this route gets information from our characters object per a get request.
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// What does this route do?
  // This performs a similar request, but specifies which character in our object to get info from using :character express function
app.get("/api/characters/:character", function(req, res) {
  // What does this code do?
    // this saves the information from our chosen character to a varaible, chose, an object, then logs that object
  var chosen = req.params.character;
  console.log(chosen);

  // What does this code do?
    // this looks at all of the characters in our characters object, and if the chosen character that we saved above matches one of our characters in our object, we will return that characters information
  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // What does this code do?
    // otherwise, we will send that we don't have that char in our object
  return res.send("No character found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});







// // Example: 

// // Which One?

app.get("/r/awwww", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "awwww"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});


app.get("/r/politics", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "politics"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});


app.get("/r/lastimages", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "lastimages"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});

app.get("/r/kidsfallingover", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "kidsfallingover"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});

app.get("/r/movies", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "movies"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});

app.get("/r/worldnews", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "worldnews"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});


app.get("/r/ProgrammerHumor", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "ProgrammerHumor"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});


app.get("/r/SequelMemes", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "SequelMemes"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});


app.get("/r/ChildrenFallingOver", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "ChildrenFallingOver"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});


// ******************************

// OR

app.get("/r/:subreddit", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = req.params.subreddit;
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});
