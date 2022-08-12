import './style.css'; 
import {homeCreate} from './home.js';
import {menuCreate, removeFromContainer} from './menu';
import {aboutCreate} from './about.js';

const homeButton = document.getElementById('home');
const header = document.createElement('h1');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');
homeCreate();
// removeFromContainer();


homeButton.addEventListener('click', function(e) {
    removeFromContainer();
    const header = document.createElement('h1');
    homeCreate();
   
    
});

menuButton.addEventListener('click', function(e) {
    
    removeFromContainer();
    menuCreate();
    
});



aboutButton.addEventListener('click', function(e) {
    removeFromContainer();
    const header = document.createElement('h1');
   aboutCreate();
   
    
});

