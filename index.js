const nom=document.getElementById("nom");
const email=document.getElementById("email");
const password=document.getElementById("password");

console.log(nom.value);
console.log(email.value);
console.log(password.value);

const button=document.getElementById("btn");

button.addEventListener("click",()=>{  
   if(nom.value=="" || email.value=="" || password.value==""){
    alert("Veuillez remplir tous les champs");
   } else{
    alert("Bienvenue "+ "nom : "+nom.value + " email: "+email.value + " password: "+password.value);
   }        
});
