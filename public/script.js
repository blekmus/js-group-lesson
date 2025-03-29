
//adding the username h2 element as a var to be updated
var toBeUpdatedUserName = document.getElementById("username");
//adding the var for custom Description
var toBeUpdatedDesc = document.getElementById("description");

//creating a username, whatever you want it to be
var username = "Default";
//create your own custom description
var description = "Hi my name is Vik, I like pokemon quite a bit :)"

//Updating the username.
toBeUpdatedUserName.innerText = "@" + username;
//Updating the description
toBeUpdatedDesc.innerText = description;




