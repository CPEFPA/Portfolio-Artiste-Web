# 🎵 Portfolio-Artiste-Web

Portfolio artiste professionnel avec carousel vidéo YouTube en arrière-plan.

## 🚀 Déploiement rapide

### GitHub Pages
1. Push ce dépôt sur GitHub
2. Settings → Pages → Source: \main\ branch → Save
3. Site disponible sous : \https://<votre-username>.github.io/Portfolio-Artiste-Web/\

### Prévisualisation locale
\\\powershell
# Avec PowerShell
Start-Process "http://localhost:8000"
python -m http.server 8000 -d "Portfolio-Artiste-Web"

# Ou avec Node.js
npx serve .
\\\

## 📁 Structure
\\\
Portfolio-Artiste-Web/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles complets
├── js/
│   └── script.js       # Carousel + navigation modale
├── assets/             # Images et polices optionnelles
└── README.md           # Ce fichier
\\\

## 🎨 Personnalisation

### Changer les couleurs
Modifier les variables CSS dans \css/style.css\ :
\\\css
:root {
  --primary: #e91e63;      /* Couleur principale */
  --primary-dark: #c2185b; /* Hover */
}
\\\

### Modifier les vidéos YouTube
Dans \index.html\, mettre à jour les \data-video\ avec vos IDs :
\\\html
<div class="video-slide" data-video="VOTRE_ID_YOUTUBE"></div>
\\\

### Mettre à jour les coordonnées
Rechercher et remplacer :
- \$AuthorName\ → Votre nom
- \$AuthorEmail\ → Votre email
- Liens sociaux dans le footer

## 🛠️ Commandes PowerShell utiles

\\\powershell
# Tester localement
cd C:\Users\ASUS\Projects\Portfolio-Artiste-Web
Start-Process index.html

# Vérifier la structure
Get-ChildItem -Recurse | Select-Object FullName

# Compter les lignes de code
(Get-Content index.html, css\style.css, js\script.js | Measure-Object -Line).Lines

# Backup rapide
Copy-Item . "..\Portfolio-Artiste-Web-backup-2026-05-06" -Recurse
\\\

## 📄 Licence
MIT - Libre d'utilisation et modification.

---
✨ Créé avec ❤️ et PowerShell par Votre Nom
