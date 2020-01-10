// require http
var http = require("http");

const PORT1 = 7000;
const PORT2 = 7500;

function handleRequestOne(request, response) {
    console.log(request);
    response.end("Funny thing 1")
}
// copy the above for second funny 

function handleRequestTwo(request, response) {
    console.log(request);
    response.end("Funny thing 2")
}


// name servers uniquely
var serverOne = http.createServer(handleRequest);

server.listen(PORT1, function() {
    console.log("Server listening on: http://localhost:" + PORT1)
})

var serverTwo = http.createServer(handleRequest);

server.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:" + PORT2)
})