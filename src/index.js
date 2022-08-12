import './style.css'; 
import {homeCreate} from './home.js';
import {removeFromContainer} from './menu';
const homeButton = document.getElementById('home');
const header = document.createElement('h1');
const menuButton = document.getElementById('menu');
homeCreate();
removeFromContainer();


homeButton.addEventListener('click', function(e) {
    const header = document.createElement('h1');
    homeCreate();
   
    
});

menuButton.addEventListener('click', function(e) {
  
    removeFromContainer();
    
});