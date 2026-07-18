const chat = document.getElementById("chat");

function addMessage(text,type){

    let div=document.createElement("div");

    div.className=type;

    div.innerHTML=text;

    chat.appendChild(div);

    chat.scrollTop=chat.scrollHeight;

}

function sendMessage(){

    const input=document.getElementById("message");

    const text=input.value.trim();

    if(text=="") return;

    addMessage("👤 "+text,"user");

    input.value="";

    setTimeout(()=>{

        addMessage("🤖 Salut! Sunt chatbot-ul tău AI.","bot");

    },600);

}

document.getElementById("message").addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});