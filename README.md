# TP4-React: Gestion de Livres 📚

## Description 📝

Ce projet React a été réalisé dans le cadre du TP4 de la filière 2ACI Info. L’objectif est de pratiquer la manipulation de composants React en créant une petite application qui gère des livres.

**Auteur**: Mohamed Lakssir  
**Filière**: 2ACI Info

## Fonctionnalités 🔧

### Exercice 1

- Création d’un objet JavaScript représentant un livre, contenant les informations suivantes :
  - Title (Titre)
  - Price (Prix)
  - Author (Auteur)
- Affichage du livre dans un tableau HTML avec JSX.

### Exercice 2

- Création d’un composant `Book` :
  - Ce composant reçoit un livre en paramètre et l’affiche dans une ligne de tableau (`<tr>`).
- Création d’un composant `BookList` :
  - Ce composant reçoit un tableau de livres en paramètre.
  - Il affiche les livres dans un tableau HTML, en utilisant le composant `Book` pour chaque ligne.
- Affichage du composant `BookList` dans l’élément root (`index.js`).

## Arborescence du Projet 🗂

```
src/
├── App.css               // Styles principaux de l'application
├── App.js                // Composant principal gérant le routage
├── Exercice1/            // Contient les fichiers de l'exercice 1
│   └── BookDisplay.js    // Affiche un livre dans un tableau HTML
├── Exercice2/            // Contient les fichiers de l'exercice 2
│   ├── Book.jsx          // Composant qui affiche un livre dans une ligne de tableau
│   ├── BookList.jsx      // Composant qui affiche une liste de livres dans un tableau
│   ├── Form.jsx          // Formulaire pour ajouter un livre
│   └── MyComponent.jsx   // Exemple d'interaction avec `useState`
├── index.css             // Styles globaux
├── index.js              // Point d'entrée de l'application React
├── reportWebVitals.js    // Mesure des performances
└── setupTests.js         // Configuration des tests unitaires
```

## Installation et Lancement 🚀

### Prérequis

- Node.js (v16 ou supérieur)
- npm (v7 ou supérieur)

### Étapes

1. Clonez ce dépôt :

   ```bash
   git clone https://github.com/votre-nom-d-utilisateur/tp4-react.git
   cd tp4-react/tp1-react
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm start
   ```

4. Ouvrez votre navigateur à l’adresse : [http://localhost:3000](http://localhost:3000).

## Fonctionnement de l’Application 💻

### Page BookDisplay (Exercice 1)

- Affiche un livre avec les informations suivantes :
  - Titre
  - Auteur
  - Prix

### Page BookList (Exercice 2)

- Affiche une liste de livres sous forme de tableau.
- Chaque livre est affiché dans une ligne grâce au composant `Book`.

### Page Form

- Permet d’ajouter un nouveau livre à la liste des livres.

## Auteurs ✍️

- Mohamed Lakssir  
**Filière**: 2ACI Info

