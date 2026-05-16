# Système de Connexion & Inscription

Un projet web simple et moderne d'authentification frontend utilisant HTML, CSS et JavaScript Vanilla.

## 📝 Description
Ce projet est une petite démonstration d'un flux d'inscription et de connexion, conçu sans base de données backend. Les informations des utilisateurs créés sont sauvegardées directement dans le navigateur via le `localStorage`. Une fois connecté avec les bons identifiants, l'utilisateur est redirigé vers une page d'accueil personnalisée.

## ✨ Fonctionnalités
- **Inscription (`index.html`)** : Création d'un compte utilisateur (nom, email et mot de passe).
- **Connexion (`login.html`)** : Vérification des accès (email et mot de passe).
- **Page d'accueil (`acceuil.html`)** : Message de bienvenue avec le nom de l'utilisateur, une vidéo intégrée, et la possibilité de se déconnecter.
- **Design Moderne** : Animations fluides au chargement, effets de survol, et "glassmorphism" (transparence) grâce à un CSS totalement retravaillé.

## 🛠️ Technologies utilisées
- **HTML5** : Structure des pages.
- **CSS3** : Flexbox, dégradés, animations (keyframes), Google Fonts (Poppins).
- **JavaScript** : Écouteurs d'événements, redirections et gestion des formulaires.
- **LocalStorage API** : Stockage des données côté client pour simuler une base de données.

## 🚀 Comment lancer le projet
1. Double-cliquez sur le fichier `index.html` pour l'ouvrir dans votre navigateur.
2. Créez un compte via le formulaire d'inscription.
3. Cliquez sur "Se connecter plutôt" (ou allez sur `login.html`) pour vous identifier.
4. Profitez de l'accès à la page d'accueil sécurisée par vos identifiants !