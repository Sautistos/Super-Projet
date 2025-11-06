const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Dossier contenant vos pages HTML
const publicDir = path.join(__dirname, 'public/html/');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques (CSS, JS, images...) et les HTML
app.use(express.static(publicDir));

// Routes explicites vers chaque page (facultatif mais explicite)
app.get('/', (req, res) => res.sendFile(path.join(publicDir, 'index.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(publicDir, 'admin-dashboard-complet.html')));
app.get('/admin/login', (req, res) => res.sendFile(path.join(publicDir, 'admin-login.html')));
app.get('/medecin/dashboard', (req, res) => res.sendFile(path.join(publicDir, 'medecin-dashboard-complet.html')));
app.get('/medecin/inscription', (req, res) => res.sendFile(path.join(publicDir, 'medecin-inscription.html')));
app.get('/medecin/login', (req, res) => res.sendFile(path.join(publicDir, 'medecin/medecin-login.html')));
app.get('/patient/dashboard', (req, res) => res.sendFile(path.join(publicDir, '/patient/patient-dashboard.html')));
app.get('/patient/inscription', (req, res) => res.sendFile(path.join(publicDir, '/patient/patient-inscription.html')));
app.get('/patient/login', (req, res) => res.sendFile(path.join(publicDir, '/patient/patient-login.html')));
app.get('/patient/mdp_oubli', (req, res) => res.sendFile(path.join(publicDir, 'mot-de-passe-oublie.html')));
app.get('/patient/contact', (req, res) => res.sendFile(path.join(publicDir, 'contact-infirmier.html')));

// API simple
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Endpoints d'exemple pour login/register (placeholders)
app.post('/api/medecin/login', (req, res) => {
  const { email } = req.body;
  // Ici vous ajouterez la logique réelle d'authentification
  res.json({ success: true, role: 'medecin', email: email || null });
});



app.post('/api/medecin/register', (req, res) => {
  // Placeholder: valider et créer medecin
  res.json({ success: true, message: 'Inscription medecin simulée' });
});

app.post('/api/patient/register', (req, res) => {
  // Placeholder: valider et créer patient
  res.json({ success: true, message: 'Inscription patient simulée' });
});

// Route fallback pour les ressources non trouvées
app.use((req, res) => {
  if (req.accepts('html')) {
    return res.status(404).sendFile(path.join(publicDir, 'patient-login.html'));
  }
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
