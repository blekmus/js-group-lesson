//importing express to link the frontend with the clients that log in using http module
const expressImport = require("express");
//loading the http module to let people connect to this test server (well just me rn )
const httpImport = require("http");

/*loading in socket.io module to manage communication b/w websockets, 
 we will add this on top of the server created with http and express*/
 const socketIO = require("socket.io");

//creating an instance of the expressImport
const app = expressImport();

//creating a server by linking the app with the http module
const server = httpImport.createServer(app);

//providing the correct static files from express to the server, appropriate ui for the users to see when they access it through http
app.use(expressImport.static('public'));

//putting socket.io ontop of the server to manage communication between the sockets (each private connection) to enable real time connections
//by creating an instance
const io = socketIO(server);

//using the inbuilt socketIO methods to check if user(s) have successfully connected
io.on('connection', (socket) => {
    console.log('A user has connected');

    //creating a listener for message by the front-end to the backend server (test-server.js)
    socket.on('frontEndMsgReceived', ({username, message})=>{
        console.log("Server received frontEndMsgReceived:", {username, message});
        socket.broadcast.emit('backEndMsgSent', {username, message});
    });
    
    //attaching the unique user (socket) to a disconnect check
    socket.on('disconnect', () => {
        console.log("A user has disconnected");
    });
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});