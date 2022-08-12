

function aboutCreate() {
    const container = document.getElementById('content')
       if (container.lastChild){
       container.removeChild(container.lastChild);
   }
   container.style.flexDirection = "column";
   container.style.justifyContent = "unset";
   const header = document.createElement('h1');
   header.innerText = "Contact us"
   header.style.color = "white";
   container.style.backgroundColor = "black";
   container.appendChild(header);


   const phoneNumber = document.createElement('h4');
   phoneNumber.textContent = "Phone Number\u00a0:\u00a0 905-332-5393"
   phoneNumber.style.color = "white";
   container.style.backgroundColor = "black";
   container.appendChild(phoneNumber);

   const email = document.createElement('h4');
   email.textContent = "Email \u00a0: \u00a0 ItalianRestaurant@gmail.com"
   email.style.color = "white";
   container.style.backgroundColor = "black";
   container.appendChild(email);
   
   
   }; 
   
   export {aboutCreate}