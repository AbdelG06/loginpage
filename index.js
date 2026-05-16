const nom=document.getElementById("nom");
const email=document.getElementById("email");
const password=document.getElementById("password");
const btn=document.getElementById("btn");

// Éléments du formulaire de connexion
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");

if (btn) {
    btn.addEventListener("click",()=>{  
        const nomVal=nom.value;
        const mailVal=email.value;
        const passVal=password.value;

    if( !nomVal || !mailVal|| !passVal){
        return alert("Veuillez remplir tous les champs");
       } 

    const users=JSON.parse(localStorage.getItem("users")) || [];
    users.push({nom: nomVal, mail: mailVal, pass: passVal});
    localStorage.setItem("users",JSON.stringify(users));

    alert("Inscription réussie ! nom: "+nomVal+", email: "+mailVal);
    });
}

// Logique pour le bouton de connexion
if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        const mailVal = loginEmail.value;
        const passVal = loginPassword.value;

        if (!mailVal || !passVal) {
            return alert("Veuillez remplir tous les champs");
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        
        // Vérifier si un utilisateur correspond à l'email et au mot de passe
    let userExists = false;
    let loggedInUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].mail === mailVal && users[i].pass === passVal) {
            userExists = true;
            loggedInUser = users[i];
            break;
        }
    }

    if (userExists) {
        // On sauvegarde l'utilisateur activement connecté
        localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
        window.location.href = "acceuil.html";
    } else {
        alert("Compte introuvable, va t'inscrire !");
    }
  });
}