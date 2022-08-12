
const container = document.getElementById('content')
function removeFromContainer() {
while (container.firstChild){
container.removeChild(container.lastChild);
}
}


export {removeFromContainer};