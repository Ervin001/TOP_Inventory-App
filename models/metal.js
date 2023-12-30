// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

const MetalSchema = new Schema({
  metal: [
    {
      type: String,
      required: true,
    },
  ],
});

// Virtual for metal's URL
MetalSchema.virtual('url').get(function () {
  // 'This' will be needed, cannot use arrow function
  return `/catalog/metal/${this._id}`;
});

module.exports = mongoose.model('Metal', MetalSchema);
