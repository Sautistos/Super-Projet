const express = require('express');
const router = express.Router();

// GET patient info
router.get('/me', (req, res) => res.json({ success: true, data: { name: 'Patient Test' } }));

// GET stats, suivi, traitements, rendez-vous, alertes
router.get('/:id/stats', (req, res) => res.json({ success: true, stats: {} }));
router.get('/:id/suivi', (req, res) => res.json({ success: true, suivi: [] }));
router.get('/:id/traitements', (req, res) => res.json({ success: true, traitements: [] }));
router.get('/:id/rendez-vous', (req, res) => res.json({ success: true, rendezVous: [] }));
router.get('/:id/alertes', (req, res) => res.json({ success: true, alertes: [] }));

// POST routes
router.post('/activate', (req, res) => {
    console.log(req.body);
    res.json({ success: true, message: 'Patient activé' });
});

router.post('/me/suivi', (req, res) => {
    console.log(req.body);
    res.json({ success: true, message: 'Suivi ajouté' });
});

router.post('/:id/rendez-vous', (req, res) => {
    console.log(req.body);
    res.json({ success: true, message: `Rendez-vous ajouté pour patient ${req.params.id}` });
});

router.post('/contact', (req, res) => {
    console.log(req.body);
    res.json({ success: true, message: 'Formulaire contact reçu' });
});

module.exports = router;
