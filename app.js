// Pop-up start
var button = document.getElementById("open-button");
var closebutton = document.getElementById("close");
var overlay = document.getElementById("overlay");

function hide(){
    overlay.style.display = "none";
    button.style.display = "block";
}

button.onclick = function(){
    overlay.style.display = "block";
    button.style.display = "none";
}

closebutton.onclick = function(){
    hide();
}

window.onclick = function(event){
    if (event.target == overlay){
        hide();
    }
}

// chat start
const msgForm = get(".popUp-footer");
const msgInput = get(".input");
const chatArea = get(".popUp-main");

const CP_MSG = [
    "Ada apa?",
    "Mau batal ikut lelang?",
    "Minta detail pesanannya dong",
    "Terima Kasih! Permintaan anda sedang diproses"
];
var i = 0;

const CP_IMG = "https://cdn-icons-png.flaticon.com/512/2928/2928988.png";
const CLIENT_IMG = "https://cdn-icons-png.flaticon.com/512/1077/1077114.png";
const CP_NAME = "Costumer Service";
const CLIENT_Name = "Client";

appendMessage(CP_NAME, CP_IMG, "comp", "Halo, Ada yang bisa Saya bantu?");
msgForm.addEventListener("submit", event =>{
    event.preventDefault();

    const chatText = msgInput.value;
    if(!chatText) return;

    appendMessage(CLIENT_Name, CLIENT_IMG, "client", chatText);
    msgInput.value = "";

    cpResponse();
});

function appendMessage(name, img, side, text){
    const msgHTML = `
    <div class = msg ${side}-msg">
    <div class = "chat-img" style="background-image:url(${img})"></div>

    <div class = "chat-bubble">
    <div class = "chat-name">${name}</div>
    <div class = "chat-text>${text}</div> 
        </div>
    </div>
    `

    chatArea.insertAdjacentHTML("beforeend", msgHTML);
    chatArea.scrollTop += 500;
}

function cpResponse(){
    const chatText = CP_MSG [i++];
    if (i >= CP_MSG.length){
        i=0;
    }
    const delay = chatText.split(" ").length * 100;

    setTimeout(() => {
        appendMessage(CP_NAME, CP_IMG, "comp", chatText);
    }, delay);
}

function get(selector, root=document) {
    return root.querySelector(selector);
}

