# Telesurveillance — Frontend (public)

Brief
- Frontend statique pour un projet de télésurveillance (HTML / CSS / JS).
- Contenu principal :
  - public/
    - html/
      - mot-de-passe-oublie.html
      - admin/
        - admin-dashboard-complet.html
        - admin-login.html
      - Medecin/
        - medecin-dashboard-complet.html
        - medecin-inscription.html
        - medecin-login.html
      - Patient/
        - document.html
        - messagerie.html
        - patient-dashboard.html
        - patient-inscription.html
        - patient-login.html
        - questionnaire.html
        - rendez-vous.html
        - resultat.html
        - treatment.html
    - style/
      - admin.css
      - medecin.css
      - patient.css

Installation rapide — récupérer le code (Windows / terminal VS Code)

### A. Si vous n'avez pas encore de copie locale
1. Ouvrez PowerShell ou le terminal intégré de VS Code dans le dossier où vous voulez cloner le projet.
2. Clonez le dépôt :
```bash
git clone https://github.com/Sautistos/Super-Projet.git
cd <REPO>
```

### B. Si le projet existe localement mais n'est pas initialisé avec git
Depuis la racine du projet (par exemple c:\Users\hp\Documents\Telesurveillance) :
```bash
git init
git remote add origin https://github.com/Sautistos/Super-Projet.git
git fetch origin
# si la branche distante principale est main :
git checkout -b main origin/main
# ou si la branche principale est master :
# git checkout -b master origin/master
```

Se synchroniser avant de travailler
```bash
git status
# si vous avez des modifications non committées, sauvegardez-les temporairement :
git stash push -m "WIP: sauvegarde avant pull"   # optionnel
git fetch origin
git pull --rebase origin main   # ou origin master selon la branche par défaut
# si vous avez stashé :
git stash pop
```

Travailler sur une branche et créer une Pull Request

1. Créer une branche de fonctionnalité :
```bash
git checkout -b feature/<courte-description>
```
2. Faire les modifications, préparer et committer :
```bash
git add .
git commit -m "feat: courte description de la modification"
```
3. Pousser la branche vers le remote :
```bash
git push -u origin feature/<courte-description>
```
4. Créer la Pull Request

- Via l'interface web GitHub :
  - Ouvrez le dépôt sur GitHub, cliquez sur "Compare & pull request".
  - Vérifiez que la base est `main` (ou `master`), ajoutez un titre et une description, puis assignez la PR à vous-même (Assignees) et créez la PR.

- Via GitHub CLI :
```bash
gh auth login               # si vous n'êtes pas connecté
git push -u origin feature/<courte-description>
gh pr create --base main --head feature/<courte-description> --title "Titre PR" --body "Description et étapes pour tester" --assignee <VOTRE_USERNAME>
```

Après la revue
- Appliquez les corrections localement, puis commit/push :
```bash
git add .
git commit -m "fix: corrections suite review"
git push
```
- Fusionnez la PR via l'interface GitHub ou avec la CLI :
```bash
gh pr merge <PR_NUM_OR_URL> --merge
```

Recommandations
- Ajoutez un fichier .gitignore avant le premier git add (ex. node_modules, .env, .vscode, fichiers build).
- Utilisez des messages de commit clairs (par ex. Conventional Commits).
- Préférez `git pull --rebase` pour un historique plus linéaire.
- Nommez les branches de façon explicite (feature/, fix/, chore/).