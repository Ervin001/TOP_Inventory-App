const Shape = require('../models/shapeModel');

const asyncHandler = require('express-async-handler');

// Display list of all Shapes.
exports.shape_list = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Shape list');
});

// Display detail page for a specific Shape.
exports.shape_detail = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Shape detail:');
});

// Display Shape create form on GET.
exports.shape_create_get = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Shape create GET');
});

// Handle Shape create on POST.
exports.shape_create_post = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Shape create POST');
});

// Display Shape delete form on GET.
exports.shape_delete_get = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Shape delete GET');
});

// Handle Shape delete on POST.
exports.shape_delete_post = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Shape delete POST');
});

// Display Shape update form on GET.
exports.shape_update_get = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Shape update GET');
});

// Handle Shape update on POST.
exports.shape_update_post = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Shape update POST');
});
