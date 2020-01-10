// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port
var PORT = 8080;

// create our server
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    
    var path = req.url;

    switch (path) {

        case "/":
            return displayRoot(res);
        
        case "/foods":
            return displayFoods(res);

        case "/movies":
            return displayMovies(res);
        
        case "/frameworks":
            return displayFrameworks(res);
        
        default:
            return display404(path, res);
    }


    function displayRoot(res) {

        var myHTML = "<html>" +
        "<body><h1>Home Page</h1>" +
        "<a href='favorites'>Favorites</a>" +
        "</body></html>";

        res.writeHead(200, {"Content-Type": "text/html"});

        res.end(myHTML);

    };


    function displayFoods(res) {

    };

    function displayMovies(res) {

    };

    function displayFrameworks(res) {

    };

    function display404(res) {
    };


    // fs.readFile(__dirname +"/index.html", function(err, data){
    //     if (err) throw err;

    //     res.writeHead(200, {"Content-Type": "text/html"});

    //     res.end(data);

    // })  
    
}

// start server
server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT)
})




// Fav Foods
// sushi
// pizza
// donuts

// Fav Movies
// Spiderman: Into the Spiderverse
// Pulp Fiction
// Tenacioius D and the Pick of Destiny

// Fav CSS Frameworks
// Bootstrap
// Foundation
// Uh... something else?