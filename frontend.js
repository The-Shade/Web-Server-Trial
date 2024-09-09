const message_para = document.getElementById("message");
const ip_para = document.getElementById("ip");
const button = document.getElementById("button");
const xhr = new XMLHttpRequest();
xhr.responseType = "json";

button.onclick = () => {
    xhr.open("GET", "/message", true);
    xhr.send();
}

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        message_para.innerText = xhr.response["message"];
        ip_para.innerText = xhr.response["user-ip"];
    }
}