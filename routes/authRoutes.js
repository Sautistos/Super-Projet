const express = require('express');
const router = express.Router();

// Patient login
router.post('/patient/login', (req, res) => {
    console.log(req.body);
    res.json({ success: true, message: 'Connexion patient OK' });
});

// Médecin login
router.post('/medecin/login', (req, res) => {
    console.log(req.body);
    res.json({ success: true, message: 'Connexion médecin OK' });
});

// Admin login
router.post('/admin/login', (req, res) => {
    console.log(req.body);
    res.json({ success: true, message: 'Connexion admin OK' });
});

// Logout commun
router.post('/logout', (req, res) => {
    res.json({ success: true, message: 'Déconnexion OK' });
});

module.exports = router;
