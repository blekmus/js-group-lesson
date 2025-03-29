const socket = io("http://localhost:3000/");

//adding the username h2 element as a var to be updated
const toBeUpdatedUserName = document.getElementById("username");
//adding the var for custom Description
const toBeUpdatedDesc = document.getElementById("description");
//creating a var for the input obtained from the textfield with id input
let userInput = document.getElementById("input") 
//creating a var for the message display area
const msgDisplay = document.querySelector(".msgDisplay ul");

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

            socket.emit('frontEndMsgReceived', ({username, message: userMessage}));
            userInput.value = "";
        } 
        else 
        {
            alert("Write something");
        }
    }
});
socket.on('backEndMsgSent', ({username, message})=>{
    let newMessage = document.createElement("li");
    const finalMessage = `@${username}<br>${message}`;
    console.log("finalMessage is:\n" + finalMessage);
    newMessage.innerHTML = finalMessage;
    msgDisplay.prepend(newMessage);

    setTimeout(() => {
        newMessage.classList.add("fade-in");
        //changes the color and the style of the username.
        newMessage.classList.add("yourUsernameClass");
            const msgContainer = document.querySelector(".msgDisplay");
        
    //     //telling the document (the container of ul which is msgDisplay) to scroll down
    //     //by making its current scrollTop property it's new maxheight (post new item's addition)
    //     //scrollTop = 0 (top of the element), scrollTop = 100 (scroll down 100 pixels).
            msgContainer.scrollTop = msgContainer.scrollHeight;
    }, 100);

});
