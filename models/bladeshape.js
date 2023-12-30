// Require Mongoose
const mongoose = require('mongoose');

// Define a Schema
const Schema = mongoose.Schema;

const BladeShapeSchema = new Schema({
  blade_shape: {
    type: String,
    required: true,
  },
});

// Virtual for blade shape's URL
BladeShapeSchema.virtual('url').get(function () {
  // 'This' will be needed, cannot use arrow function
  return `/catalog/bladeshape/${this._id}`;
});

module.exports = mongoose.model('BladeShape', BladeShapeSchema);
