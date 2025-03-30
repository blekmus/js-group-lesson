const socket = io("http://10.0.0.179:3000/");
//importing the messageUI script to use messageUI functions from it
import { yourOwnMsgUI, OthersMsgUI } from "./cmessageUI.js";

//adding the username h2 element as a var to be updated
const toBeUpdatedUserName = document.getElementById("username");
//adding the var for custom Description
const toBeUpdatedDesc = document.getElementById("description");
//creating a var for the input obtained from the textfield with id input
let userInput = document.getElementById("input") 
//creating a var for the message display area
const msgDisplay = document.querySelector(".msgDisplay ul");

//creating a var for msgContainer (the parent div to the ul)
const msgContainer = document.querySelector(".msgDisplay");

var roomkey = "general";


//creating a username, whatever you want it to be
let username = "jakejellypie";
//create your own custom description
let description = "Hi my name is Vik, I like pokemon quite a bit :)"

//Updating the username.
toBeUpdatedUserName.innerText = "@" + username;
//Updating the description
toBeUpdatedDesc.innerText = description;


userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (userInput.value.trim() !== "") {
            e.preventDefault();

            const userMessage = userInput.value;

            socket.emit(roomkey, ({username, message: userMessage}));
            userInput.value = "";

            addMessage({username, message: userMessage}, true);
        } 
        else 
        {
            //do nothing if the user enters nothing
            e.NONE
        }
    }
});

socket.on(roomkey, ({username: senderUser, message})=>{
    console.log("received from: " + senderUser);
    let isMine = false;
    if(senderUser === username){
        isMine = true;
    }
    if(isMine == false){
        addMessage({username: senderUser, message}, isMine);
    }

});

function addMessage({username, message}, myOwnMessage){
    let newMessage = document.createElement('li');
    const finalMessage = `@${username}<br>${message}`;
    console.log("finalMessage is: " + finalMessage);
    console.log("myOwnMessage status is " + myOwnMessage);
    newMessage.innerHTML = finalMessage;

    if(myOwnMessage == true){
        console.log("my own message was fired");
        msgDisplay.prepend(newMessage);
        yourOwnMsgUI(newMessage, msgContainer);
    }
    else{
        msgDisplay.prepend(newMessage);
        console.log("someone else's message was fired");
        OthersMsgUI(newMessage, msgContainer);
    }
};

