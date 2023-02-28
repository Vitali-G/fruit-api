// import the http capability into our app
const http = require('http');

// create a server that lets us see requests and respond to them
const server = http.createServer((req, res) => {
    //res.setHeader("Content-Type", "text/html") <- gotta set the content type otherwise browser doesnt know how to render response
    res.end("Hello there") //end response straight after sending string, otherwise browser will hang around waiting
})

// start the server listening//ports below 1000 are reserved
server.listen(3024, () => {
    console.log("Server ready yo")
})
