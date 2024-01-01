const express = require('express');
const router = express.Router();

// Require controller modules.
const knife_controller = require('../controllers/knifeController');

// Knife routes //

// GET catalog home page.
router.get('/', knife_controller.index);

// GET request for creating a Knife. NOTE this must come before routes that display Book (uses id).
router.get('/knife/create', knife_controller.knife_create_get);

// POST request for creating Knife.
router.post('/knife/create', knife_controller.knife_create_post);

// GET request to delete Knife.
router.get('/knife/:id/delete', knife_controller.knife_delete_get);

// POST request to delete Knife.
router.post('/knife/:id/delete', knife_controller.knife_delete_post);

// GET request to update Knife.
router.get('/knife/:id/update', knife_controller.knife_update_get);

// POST request to update Knife.
router.get('/knife/:id/update', knife_controller.knife_update_post);

// GET request for one Knife.
router.get('/knife/:id', knife_controller.knife_detail);

// GET request for list of all Knife items.
router.get('/knives', knife_controller.knife_list);

/// METAL ROUTES ///

// GET request for creating a Metal. NOTE This must come before route for id (i.e. display metal).

// POST request for creating Metal.

// GET request to delete Metal.

// POST request to delete Metal.

// GET request to update Metal.

// POST request to update Metal.

// GET request for one Metal.

// GET request for list of all knife items.

/// KNIFETYPE ROUTES ///

// GET request for creating a knifetype. NOTE This must come before route that displays knifetype (uses id).
router.get('/knifetype/create', (req, res) => {
  res.send('NOT IMPLEMENTED: knifetype create GET');
});

//POST request for creating knifetype.
router.post('/knifetype/create', (req, res) => {
  res.send('NOT IMPLEMENTED: knifetype create POST');
});

// GET request to delete knifetype.
router.get('/knifetype/:id/delete', (req, res) => {
  res.send('NOT IMPLEMENTED: knifetype delete GET');
});

// POST request to delete knifetype.
router.post('/knifetype/:id/delete', (req, res) => {
  res.send('NOT IMPLEMENTED: knifetype delete POST');
});

// GET request to update knifetype.
router.get('/knifetype/:id/update', (req, res) => {
  res.send('NOT IMPLEMENTED: knifetype update GET');
});

// POST request to update knifetype.
router.post('/knifetype/:id/update', (req, res) => {
  res.send('NOT IMPLEMENTED: knifetype update POST');
});

// GET request for one knifetype.
router.get('/knifetype/:id', (req, res) => {
  res.send('NOT IMPLEMENTED: knifetype detail');
});

// GET request for list of all knifetype.
router.get('/knifetypes', (req, res) => {
  res.send('NOT IMPLEMENTED: knifetype list');
});

/// KNIFEINSTANCE ROUTES ///

// GET request for creating a knifeinstance. NOTE This must come before route that displays knifeinstance (uses id).
router.get('/knifeinstance/create', (req, res) => {
  res.send('NOT IMPLEMENTED: knifeinstance create GET');
});

// POST request for creating knifeinstance.
router.post('/knifeinstance/create', (req, res) => {
  res.send('NOT IMPLEMENTED: knifeinstance create POST');
});

// GET request to delete knifeinstance.
router.get('/knifeinstance/:id/delete', (req, res) => {
  res.send('NOT IMPLEMENTED: knifeinstance delete GET');
});

// POST request to delete knifeinstance.
router.post('/knifeinstance/:id/delete', (req, res) => {
  res.send('NOT IMPLEMENTED: knifeinstance delete POST');
});

// GET request to update knifeinstance.
router.get('/knifeinstance/:id/update', (req, res) => {
  res.send('NOT IMPLEMENTED: knifeinstance update GET');
});

// POST request to update knifeinstance.
router.post('/knifeinstance/:id/update', (req, res) => {
  res.send('NOT IMPLEMENTED: knifeinstance update POST');
});

// GET request for one knifeinstance.
router.get('/knifeinstance/:id', (req, res) => {
  res.send('NOT IMPLEMENTED: knifeinstance detail');
});

// GET request for list of all knifeinstance.
router.get('/knifeinstances', (req, res) => {
  res.send('NOT IMPLEMENTED: knifeinstance list');
});

module.exports = router;
