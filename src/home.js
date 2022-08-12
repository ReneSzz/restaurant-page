

function homeCreate() {
 const container = document.getElementById('content')
    if (container.lastChild){
    container.removeChild(container.lastChild);
}
container.style.flexDirection = "row";
container.style.justifyContent = "center";
const header = document.createElement('h1');
header.innerText = "Rene's Italian Restaurant"
header.style.color = "white";
// container.style.backgroundColor = "black";
container.appendChild(header);

}; 


export {homeCreate}