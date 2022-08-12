

function homeCreate() {
const container = document.getElementById('content')
const header = document.createElement('h1');
header.innerText = "Rene's Italian Restaurant"
header.style.color = "white";
container.style.backgroundColor = "black";
container.appendChild(header);
}; 


export {homeCreate};