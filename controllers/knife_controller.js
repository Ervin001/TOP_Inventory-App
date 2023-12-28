const Knife = require('../models/knife');

const asyncHandler = require('express-async-handler');

exports.index = (req, res) => {
  res.render('index', { title: 'Knife Collection' });
};

// Display list of all Knives.
exports.knife_list = (req, res) => {
  res.send('NOT IMPLEMENTED: Knife list');
};
