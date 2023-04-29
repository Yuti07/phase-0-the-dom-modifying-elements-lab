// Write your code here!
const YOUR_NAME = "Yuti_Thakkar";
document.querySelector("main#main").remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = `${YOUR_NAME} is the champion`;
document.body.appendChild(newHeader);
