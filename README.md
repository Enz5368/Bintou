# Site vitrine MEITE BINTOU Avocate

Projet statique compatible Netlify, sans backend complexe.

## Modifier les informations

Les coordonnées, horaires, honoraires et textes principaux se trouvent dans `index.html`.
Les pages légales sont dans `mentions-legales.html` et `politique-confidentialite.html`.

Ne pas inventer de SIRET, TVA ou barreau : des commentaires HTML indiquent les éléments à compléter lorsqu'ils seront fournis.

## Remplacer la photo professionnelle

Ajouter la photo dans :

```text
assets/photo-professionnelle.jpg
```

Le site affiche automatiquement un placeholder élégant tant que cette image n'existe pas.

## Changer le lien de prise de rendez-vous

Ouvrir `script.js` et remplacer :

```js
const APPOINTMENT_URL = "LIEN_RDV_EN_LIGNE_A_REMPLACER";
```

par le lien Calendly ou Google Calendar Appointment Schedule.

Si la valeur reste inchangée, le bouton renvoie vers la section contact.

## Activer Netlify Forms

Le formulaire est déjà configuré avec :

- `method="POST"`
- `data-netlify="true"`
- un champ hidden `form-name`
- une page de confirmation `merci.html`
- un champ honeypot anti-spam

Après publication sur Netlify, envoyer un premier test de formulaire depuis le site en ligne. Les messages seront visibles dans l'interface Netlify du site.

## Publier sur Netlify

1. Créer un dépôt GitHub avec ces fichiers.
2. Dans Netlify, choisir **Add new site** puis **Import an existing project**.
3. Sélectionner le dépôt.
4. Laisser le dossier de publication à la racine du projet.
5. Ne pas renseigner de commande de build.
6. Déployer.

Le site peut aussi être publié par glisser-déposer du dossier dans Netlify Drop.
