const express = require('express');
const router = express.Router();

// Require controller modules.
const knife_controller = require('../controllers/knife_controller');

// Knife routes //

// GET catalog home page.

// POST request for creating knife.

// GET request to delete knife.

// POST request to delete knife.

// GET request to update knife.

// POST request to update knife.

// GET request for one knife.

// GET request for list of all knife items.

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

// GET request for creating a knife_type. NOTE This must come before route that displays knife_type (uses id).
router.get('/knife_type/create', knife_type_controller.knife_type_create_get);

//POST request for creating knife_type.
router.post('/knife_type/create', knife_type_controller.knife_type_create_post);

// GET request to delete knife_type.
router.get(
  '/knife_type/:id/delete',
  knife_type_controller.knife_type_delete_get
);

// POST request to delete knife_type.
router.post(
  '/knife_type/:id/delete',
  knife_type_controller.knife_type_delete_post
);

// GET request to update knife_type.
router.get(
  '/knife_type/:id/update',
  knife_type_controller.knife_type_update_get
);

// POST request to update knife_type.
router.post(
  '/knife_type/:id/update',
  knife_type_controller.knife_type_update_post
);

// GET request for one knife_type.
router.get('/knife_type/:id', knife_type_controller.knife_type_detail);

// GET request for list of all knife_type.
router.get('/knife_types', knife_type_controller.knife_type_list);

/// KNIFEINSTANCE ROUTES ///

// GET request for creating a knifeinstance. NOTE This must come before route that displays knifeinstance (uses id).
router.get(
  '/knifeinstance/create',
  book_instance_controller.knifeinstance_create_get
);

// POST request for creating knifeinstance.
router.post(
  '/knifeinstance/create',
  book_instance_controller.knifeinstance_create_post
);

// GET request to delete knifeinstance.
router.get(
  '/knifeinstance/:id/delete',
  book_instance_controller.knifeinstance_delete_get
);

// POST request to delete knifeinstance.
router.post(
  '/knifeinstance/:id/delete',
  book_instance_controller.knifeinstance_delete_post
);

// GET request to update knifeinstance.
router.get(
  '/knifeinstance/:id/update',
  book_instance_controller.knifeinstance_update_get
);

// POST request to update knifeinstance.
router.post(
  '/knifeinstance/:id/update',
  book_instance_controller.knifeinstance_update_post
);

// GET request for one knifeinstance.
router.get('/knifeinstance/:id', book_instance_controller.knifeinstance_detail);

// GET request for list of all knifeinstance.
router.get('/knifeinstances', book_instance_controller.knifeinstance_list);
