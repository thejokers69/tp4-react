# TP1-React: Pratique des Composants React 🔥

## Description 📝

Ce projet React est conçu pour pratiquer et développer des compétences en manipulation des composants, des états avec useState, et des effets secondaires avec useEffect. Il inclut des exercices portant sur la gestion et l’affichage des données dans des tableaux HTML et l’interaction via des formulaires.

## Fonctionnalités 🚀

### Exercice 1 : Affichage d’un Livre

- Création d’un objet JavaScript représentant un livre avec les propriétés :
  - Title (Titre)
  - Price (Prix)
  - Author (Auteur)
- Affichage du livre dans un tableau HTML grâce à JSX.

### Exercice 2 : Gestion des Livres

- Création du composant `Book` :
  - Affiche les détails d’un livre dans une ligne de tableau (`<tr>`).
- Création du composant `BookList` :
  - Affiche une liste de livres dans un tableau HTML.
  - Utilise le composant `Book` pour afficher chaque ligne.
- Ajout dynamique de nouveaux livres via un formulaire.
- Création du composant `Form` :
  - Collecte des données via un formulaire et ajoute des livres à la liste.
- Création du composant `MyComponent` :
  - Exemples d’utilisation des hooks useState et useEffect pour incrémenter et décrémenter un compteur.

## Structure du Projet 🗂

Voici l’organisation des fichiers et dossiers du projet :

```
src/
├── App.css               // Styles principaux de l'application
├── App.js                // Composant principal et gestion des routes
├── Exercice1/            // Contient le fichier de l'exercice 1
│   └── BookDisplay.js    // Affiche un livre dans un tableau HTML
├── Exercice2/            // Contient les fichiers de l'exercice 2
│   ├── Book.jsx          // Composant qui affiche un livre
│   ├── BookList.jsx      // Composant qui affiche une liste de livres
│   ├── Form.jsx          // Composant pour ajouter un livre via un formulaire
│   └── MyComponent.jsx   // Composant démontrant l'utilisation des hooks
├── index.css             // Styles globaux
├── index.js              // Point d'entrée de l'application
├── reportWebVitals.js    // Mesure des performances
└── setupTests.js         // Configuration pour les tests unitaires
```

## Installation et Lancement 💻

### Prérequis

- Node.js (v16 ou supérieur)
- npm (v7 ou supérieur)

### Étapes

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/thejokers69/tp1-react.git
   cd tp1-react
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

## Navigation dans l’Application 🌐

L’application utilise React Router pour gérer les différentes pages :

| Chemin         | Description                                  |
| -------------- | -------------------------------------------- |
| /              | Page d’accueil                               |
| /my-component  | Incrémentation/Décrémentation d’un compteur  |
| /form          | Ajout automatique de livres                 |
| /book-list     | Affichage de la liste des livres            |

## Code Important 📜

### Exemple : Objet Livre (Exercice 1)

```javascript
const book = {
  title: "Les Misérables",
  price: 19.99,
  author: "Victor Hugo",
};
```

### Exemple : Formulaire pour Ajouter un Livre (Exercice 2)

```javascript
function handleForm(e) {
  e.preventDefault();
  if (title && price) {
    const newBook = { id: books.length + 1, title, price };
    setBooks([...books, newBook]);
  }
}
```

## Auteur ✍️

- Mohamed Lakssir  
  Filière : 2ACI Info
