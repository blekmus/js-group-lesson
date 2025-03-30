// importing express to link the frontend with the clients that log in using http module
const expressImport = require("express");
// loading the http module to let people connect to this test server (well just me rn )
const httpImport = require("http");
/* loading in socket.io module to manage communication b/w websockets,
   we will add this on top of the server created with http and express */
const socketIO = require("socket.io");

// creating an instance of express
const app = expressImport();

// creating a server by linking the app with the http module
const server = httpImport.createServer(app);

// serving static files (frontend UI)
app.use(expressImport.static('public'));

// putting socket.io on top of the server and enabling CORS for all origins
const io = socketIO(server, {
    cors: {
        origin: "*", // allow all origins
        methods: ["GET", "POST"],
        credentials: false // optional, depending on your needs
    }
});

// handling socket connections
io.on('connection', (socket) => {
    console.log('A user has connected');

    // listen for messages from the frontend
    socket.on('general', ({ username, message }) => {
        console.log("Server received frontEndMsgReceived:", { username, message });
        socket.broadcast.emit('general', { username, message });
    });

    // listen for disconnect
    socket.on('disconnect', () => {
        console.log("A user has disconnected");
    });
});

// start the server
const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
