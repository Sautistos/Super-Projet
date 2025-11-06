const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Dossier HTML
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes HTML
app.get('/', (req, res) => res.sendFile(path.join(publicDir, '/html/index.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(publicDir, '/html/admin-dashboard-complet.html')));
app.get('/admin/login', (req, res) => res.sendFile(path.join(publicDir, '/html/admin-login.html')));
app.get('/medecin/dashboard', (req, res) => res.sendFile(path.join(publicDir, '/html/medecin-dashboard-complet.html')));
app.get('/medecin/login', (req, res) => res.sendFile(path.join(publicDir, '/html/medecin/medecin-login.html')));
app.get('/patient/dashboard', (req, res) => res.sendFile(path.join(publicDir, '/html/patient/patient-dashboard.html')));
app.get('/patient/login', (req, res) => res.sendFile(path.join(publicDir, '/html/patient/patient-login.html')));
app.get('/patient/register', (req, res) => res.sendFile(path.join(publicDir, '/html/patient/patient-inscription.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(publicDir, '/html/contact-infirmier.html')));
app.get('/patient/contact', (req, res) => res.sendFile(path.join(publicDir, '/html/contact-infirmier.html')));
app.get('/medecin/contact', (req, res) => res.sendFile(path.join(publicDir, '/html/contact-infirmier.html')));
app.get('/medecin/mdp_oubli', (req, res) => res.sendFile(path.join(publicDir, '/html/mot-de-passe-oublie.html')));
app.get('/patient/mdp_oubli', (req, res) => res.sendFile(path.join(publicDir, '/html/mot-de-passe-oublie.html')));
app.get('/patient/treatment', (req, res) => res.sendFile(path.join(publicDir, '/html/patient/treatment.html')));

app.get('/patient/document', (req, res) => res.sendFile(path.join(publicDir, '/html/patient/document.html')));
app.get('/patient/messagerie', (req, res) => res.sendFile(path.join(publicDir, '/html/patient/messagerie.html')));
app.get('/patient/questionnaire', (req, res) => res.sendFile(path.join(publicDir, '/html/patient/questionnaire.html')));
app.get('/patient/rendez-vous', (req, res) => res.sendFile(path.join(publicDir, '/html/patient/rendez-vous.html')));
app.get('/patient/resultat', (req, res) => res.sendFile(path.join(publicDir, '/html/patient/resultat.html')));


// Routes API
const patientRoutes = require('./routes/patientRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/patients', patientRoutes);
app.use('/api/auth', authRoutes);

// 404 fallback
app.use((req, res) => {
  if (req.accepts('html')) {
    return res.status(404).sendFile(path.join(publicDir, '/html/error404.html'));
  }
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => console.log(`Serveur démarré sur http://localhost:${port}`));