const Metal = require('../models/metal');

const asyncHandler = require('express-async-handler');

// Display list of all Metals.
exports.metal_list = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Metal list');
});

// Display detail page for a specific Metal.
exports.metal_detail = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Metal detail:');
});

// Display Metal create form on GET.
exports.metal_create_get = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Metal create GET');
});

// Handle Metal create on POST.
exports.metal_create_post = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Metal create POST');
});

// Display Metal delete form on GET.
exports.metal_delete_get = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Metal delete GET');
});

// Handle Metal delete on POST.
exports.metal_delete_post = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Metal delete POST');
});
