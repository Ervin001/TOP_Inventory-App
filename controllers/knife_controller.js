const Knife = require('../models/knife');

const asyncHandler = require('express-async-handler');

exports.index = (req, res) => {
  res.render('index', { title: 'Knife Collection' });
};

// Display list of all Knives.
exports.knife_list = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife list');
};

exports.knife_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife detail:');
};

exports.knife_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife create GET');
};

exports.knife_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife create POST');
};

exports.knife_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife delete GET');
};

exports.knife_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife delete POST');
};

exports.knife_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife update GET');
};

exports.knife_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife update POST');
};
