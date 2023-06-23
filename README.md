PROJET 11
---------------------------------------------------------------------
Développer une application 
Web avec React et React Router
---------------------------------------------------------------------
L’ENTREPRISE
Leader de la location d’appartements entre particuliers en France
Présent depuis presque 10 ans
Souhaite une refonte totale de leur application en ligne

L’ÉQUIPE
Laura : Directrice des Nouvelles Technologies (CTO)
Paul : Designer en freelance
Moi : Développeur Front-end en freelance
Non recruté : Développeur Back-end

OBJECTIF
- Développer l’ensemble de l’application, 
- Les composants React, 
- Les routes React Router

OUTILS FOURNIS
- Coding guidelines de Kasa
- Maquettes desktop + mobile sur Figma
- Fichier Json avec les 20 dernières annonces
- Guide d’étapes clés

--------------------------------------------------------------------
CONTRAINTES TECHNIQUES

React
- Pas de librairie React externe
- Découpage en composants modulaires et réutilisables 
- Un composant par fichier 
- Structure logique des différents fichiers 
- Utilisation des props entre les composants 
- Utilisation du state dans les composants quand c'est nécessaire
- Gestion des événements
- Utiliser les listes autant que possible (map)

React Router
- Paramètres des routes gérés par React Router dans l'URL pour récupérer les informations de chaque logement
- Il existe une page par route
- Page 404 renvoyée pour chaque route inexistante
- Page 404 renvoyée si une valeur présente dans l’URL ne fait pas partie des données renseignées
- La logique du routeur est réunie dans un seul fichier

---------------------------------------------------------------------
CONTRAINTES FONCTIONNELLES

Composant Gallery :
- Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image. 
- Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image. 
- S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" ainsi que la numérotation n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

Composant Collapse :
- Par défaut, les Collapse sont fermés à l'initialisation de la page. 
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
- Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

------------------------------------------------------------------------

LES ÉTAPES

- Initialiser le projet avec Create React App
- Installer React Router et ses dépendances 
- Rendre le routage fonctionnel
- Créer les composants et intégrer le composant du router
- Créer page d’accueil + mise en page + composants Header, Footer, Banner
- Rendre les liens Accueil vers page de logement fonctionnels
- Créer page A propos + mise en page + composants Collapse, Banner
- Créer page de logement + mise en page + composants Caroussel, Details
- Créer page d’erreur 404 + mise en page + redirection en cas d’id incorrect
- Vérification d’erreurs

Vérifier que les composants changeant d’état fonctionnent :
 --- changement des images dans le carrousel,
 --- collapses qui s’ouvrent et se ferment

 -------------------------------------------------------------------------