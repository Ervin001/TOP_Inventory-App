// Require Mongoose
const e = require('express');
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

const KnifeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  metal_composition: Schema.Types.ObjectId,
  blade_type: Schema.Types.ObjectId,
  blade_shape: Schema.Types.ObjectId,

  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive'],
  },

  description: String,
});

modules.exports = mongoose.model('Knife', KnifeSchema);
