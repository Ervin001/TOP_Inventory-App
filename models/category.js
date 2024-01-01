// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  category: [
    {
      type: String,
      required: true,
    },
  ],
});

// Virtual for category's URL
CategorySchema.virtual('url').get(function () {
  // 'This' will be needed, cannot use arrow function
  return `/catalog/category/${this._id}`;
});

module.exports = mongoose.model('Category', CategorySchema);
