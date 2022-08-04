// Write your code here!
const element = document.getElementById("main");  
// deletes the element
element.remove();

let newHeader = document.createElement("h1");
 newHeader.setAttribute("id","victory");

newHeader.innerHTML = "YOUR - NAME is the champion";