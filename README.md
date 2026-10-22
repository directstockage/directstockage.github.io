# Bretagne Sud Stockage — site vitrine (version de départ)

Site statique responsive en HTML, CSS et JavaScript, prêt à être versionné sur GitHub et hébergé sur Hostinger (hébergement web classique) ou GitHub Pages.

## Contenu
- `index.html` : page d'accueil et sections commerciales
- `styles.css` : identité visuelle responsive
- `script.js` : menu mobile, année du pied de page et formulaire de démonstration
- `assets/logo.svg` : logo sur fond clair
- `assets/logo-light.svg` : logo sur fond sombre
- `assets/favicon.svg` : icône de navigateur

## Important avant mise en ligne
Cette version est un **prototype de site vitrine**. Le formulaire n'envoie aucune demande et il n'y a pas encore de disponibilité en temps réel, de réservation ferme, de paiement, de compte client ou d'espace administrateur. Ne présentez pas ces fonctions comme actives tant que le backend n'est pas développé et testé.

Avant publication :
1. Remplacer les textes et les solutions génériques par les informations réelles de chaque site.
2. Ajouter les coordonnées réelles, les tarifs vérifiés, les photos authentiques et les conditions de location.
3. Relier le formulaire à un service de formulaires ou à un backend sécurisé.
4. Ajouter les mentions légales, politique de confidentialité et informations sur les cookies si applicables.
5. Configurer le domaine et HTTPS.
6. Tester sur mobile, vérifier les liens et configurer Google Search Console.

## Tester localement
Ouvrir `index.html` dans un navigateur. Aucun processus de compilation n'est nécessaire.

## Publier sur GitHub
1. Créer un dépôt GitHub, par exemple `bretagne-sud-stockage`.
2. Importer tous les fichiers et le dossier `assets`.
3. Pour GitHub Pages : ouvrir **Settings → Pages**, choisir la branche principale et le dossier `/ (root)`.
4. Le site peut être publié sur une adresse `https://<utilisateur>.github.io/<depot>/`.

## Déployer sur Hostinger
Pour un hébergement Web classique :
1. Ouvrir le gestionnaire de fichiers Hostinger.
2. Envoyer le contenu du dossier (pas seulement le ZIP) dans `public_html`.
3. Vérifier que `index.html` se trouve directement dans `public_html`.
4. Connecter le domaine, activer le certificat SSL et tester le site.

Le site est statique et n'a donc pas besoin de Node.js pour cette première version. Si le projet évolue vers une vraie réservation et des paiements, prévoir un backend et une base de données sécurisés. Ne jamais placer de clé secrète Stripe ou de mot de passe dans le code public GitHub.

## SEO initial
La page inclut un titre, une meta-description, un titre H1 unique, une structure responsive et des liens internes. Le référencement local réel demandera des contenus spécifiques, exacts et utiles pour chaque emplacement desservi.
