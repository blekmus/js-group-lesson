export function yourOwnMsgUI(newMessage, msgContainer){
    setTimeout(() => {
        newMessage.classList.add("fade-in");
        //changes the color and the style of the username.
        newMessage.classList.add("yourOwnMsgLi");
        
    //     //telling the document (the container of ul which is msgDisplay) to scroll down
    //     //by making its current scrollTop property it's new maxheight (post new item's addition)
    //     //scrollTop = 0 (top of the element), scrollTop = 100 (scroll down 100 pixels).
            msgContainer.scrollTop = msgContainer.scrollHeight;
    }, 100);
};

export function OthersMsgUI(newMessage, msgContainer){
    setTimeout(() => {
        newMessage.classList.add("fade-in");
        newMessage.classList.add("othersMsgLi")
            msgContainer.scrollTop = msgContainer.scrollHeight;
    }, 100);
};
