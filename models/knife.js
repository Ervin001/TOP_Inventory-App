// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

const KnifeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  metal_composition: {
    type: Schema.Types.ObjectId,
    ref: 'Metal',
    required: true,
  },
  blade_shape: {
    type: Schema.Types.ObjectId,
    ref: 'BladeShape',
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  description: String,

  price: {
    type: Number,
    min: [0, 'Price cannot be negative'],
  },

  number_in_stock: {
    type: Number,
    min: [0, 'Cannot have negative inventory'],
    required: true,
  },
});

/*
name:  Bugout
metal: s30v
shape: drop point
category: folding
description: a lightweight folder
price: 120
number in stock: 5
*/

// Virtual for knife's URL
KnifeSchema.virtual('url').get(function () {
  // This will be needed, cannot use arrow function
  return `/catalog/knife/${this._id}`;
});

module.exports = mongoose.model('Knife', KnifeSchema);

/*
a name, description, category, price, number-in-stock and URL, though you should feel free to add more fields if it seems relevant to the type of business you’ve chosen.
Categories should at least have a name, a description and a URL.
*/
