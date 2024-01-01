const Knife = require('../models/knife');

const asyncHandler = require('express-async-handler');

exports.index = (req, res) => {
  res.render('index', { title: 'Knife Collection' });
};

// Display list of all Knives.
exports.knife_list = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife list');
};

// Display detail page for a specific Knife.
exports.knife_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife detail:');
};

// Display Knife create form on GET.
exports.knife_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife create GET');
};

// Handle Knife create on POST.
exports.knife_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife create POST');
};

// Display Knife delete form on GET.
exports.knife_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife delete GET');
};

// Handle Knife delete on POST.
exports.knife_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife delete POST');
};

// Display Knife update form on GET.
exports.knife_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife update GET');
};

// Handle Knife update on POST.
exports.knife_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife update POST');
};
