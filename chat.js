var messages = [];
var mi = $("#messageI");
var i = 0;

$("#roomH").html("#"+localStorage.getItem("roomName"));
var showMessages = function(){
    mi.before(`<div style="width:30%;">${messages[i].user} <img src="tick.png" width="20px"> <br> <label class="text-secondary">${messages[i].text}</label></div>`);
}
var send = function(){
    messages.push({likes: 0, text: mi.val(), user: localStorage.getItem("name")});
    console.log(messages);
    mi.val("");
    showMessages();
    i++;
}
var logout = function(){
    localStorage.removeItem("name");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}
var back = function(){
    window.location = "room.html";
}