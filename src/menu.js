
import Picture1 from './image1.webp';
import Picture2 from './image2.webp';
import Picture3 from './image3.png';
import Picture4 from './image4.jpg';

const container = document.getElementById('content')
function removeFromContainer() {
while (container.firstChild){
container.removeChild(container.lastChild);
}
}

function menuCreate() { 
container.style.flexDirection = "row";
container.style.justifyContent = "space-evenly";
const image1 = new Image();
image1.src = Picture1 ;
image1.classList.add('images');
container.appendChild(image1);

const image2 = new Image();
image2.src = Picture2 ;
image2.classList.add('images');
container.appendChild(image2);

const image3 = new Image();
image3.src = Picture3 ;
image3.classList.add('images');
container.appendChild(image3);

const image4 = new Image();
image4.src = Picture4 ;
image4.classList.add('images');
container.appendChild(image4);


}

export {removeFromContainer, menuCreate};