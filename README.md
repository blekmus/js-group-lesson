```
Step 1) Download the live-lesson template from the public GitHub Repo.
npm init -y it

Step 2) Installing dependencies, 
Express generator - to send static files (css, html, clientside-js) to the backend server
Socket.io - a part of websocket, to actually illicit communication b/w the front-end lesson code and backend demo.

npm install express
npm install socket.io

Step 3) Check if installations happened properly
npm express -v
npm socket.io -v

Step 4) In their test-server.js, explaining the imports and what they are going to be used for in this lesson.
const expressImport = require("express");
const httpImport = require("http");
const socketIO = require("socket.io");

Step 5) Talk about the server-side code in the test-server, explain how it works, that the server.on means listening and .emit means sending. What sockets mean and stuff like that. Not making them write the test-server just explaining it, it's already written for them.

Step 6) adding <script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script> to the html, to actually import the minified version of Socket.IO library from the internet, it is through this that we can actually use the io function in our client-side js to communicate with the backend server
const socket = io("link to backend");

Step 6) Explaining the already written js variables in client-side js. These variables just connect to the html

Step 7) Make them write their own username, and description

Step 8) Write the socket specific variable (roomkey) and functions (emit and on)

Step 9) Have them connected to my test-backend server (with my IP), and have a mini group chat between the class

Step 10) Debug if needed, if their code is too messed up, guide them to a GitHub repo with correctly written code.

Step 11) change the roomkey variable to "lesson" from "general" and hand the stage to Dinil
```