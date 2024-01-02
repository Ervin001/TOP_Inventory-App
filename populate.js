console.log(
  'This script populates some test knives, metals, blade shapes, and categories to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Knife = require('./models/knife');
const Metal = require('./models/metal');
const BladeShape = require('./models/bladeshape');
const Category = require('./models/category');

const metals = [];
const bladeShapes = [];
const categories = [];
const knives = [];

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = userArgs[0];
mongoose.set('strictQuery', false);

main().catch((err) => console.log(err));

async function main() {
  console.log('Debug: About to connect');
  await mongoose.connect(mongoDB);
  console.log('Debug: Should be connected?');
  await createMetals();
  await createBladeShapes();
  await createCategories();
  await createKnives();
  console.log('Debug: Closing mongoose');
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function metalCreate(index, name) {
  const metal = new Metal({ metal: name });

  await metal.save();
  metals[index] = metal;
  console.log(`Added metal: ${name}`);
}

async function bladeShapeCreate(index, blade_shape) {
  const bladeShape = new BladeShape({
    blade_shape: blade_shape,
  });

  await bladeShape.save();
  bladeShapes[index] = bladeShape;
  console.log(`Added blade shape: ${blade_shape}`);
}

async function categoryCreate(index, name) {
  const category = new Category({ category: name });

  await category.save();
  categories[index] = category;
  console.log(`Added category: ${name}`);
}

async function knifeCreate(
  index,
  name,
  metal_name,
  blade_shape,
  category,
  description,
  price,
  number_in_stock
) {
  const knife = new Knife({
    name: name,
    metal_name: metal_name,
    blade_shape: blade_shape,
    category: category,
    description: description,
    price: price,
    number_in_stock: number_in_stock,
  });

  await knife.save();
  knives[index] = knife;
  console.log(`Added knife: ${name}`);
}

async function createMetals() {
  await Promise.all([
    metalCreate(0, 'CPM-S30V'),
    metalCreate(1, '154CM'),
    metalCreate(2, 'CPM-20CV'),
    metalCreate(3, 'CPM-154'),
    metalCreate(4, 'CPM-S90V'),
    metalCreate(5, 'CPM-S110V'),
    metalCreate(6, 'CPM-3V'),
    metalCreate(7, 'CPM-M4'),
    metalCreate(8, 'CPM-4V'),
    metalCreate(9, 'CPM-S35VN'),
    metalCreate(10, 'CPM-S45VN'),
    metalCreate(11, 'CPM-S60V'),
  ]);
}

async function createBladeShapes() {
  await Promise.all([
    bladeShapeCreate(0, 'Drop Point'),
    bladeShapeCreate(1, 'Clip Point'),
    bladeShapeCreate(2, 'Tanto'),
    bladeShapeCreate(3, 'Spear Point'),
    bladeShapeCreate(4, 'Trailing Point'),
    bladeShapeCreate(5, 'Sheepsfoot'),
    bladeShapeCreate(6, 'Hawkbill'),
    bladeShapeCreate(7, 'Wharncliffe'),
    bladeShapeCreate(8, 'Gut Hook'),
    bladeShapeCreate(9, 'Santoku'),
    bladeShapeCreate(10, 'Cleaver'),
    bladeShapeCreate(11, 'Bowie'),
    bladeShapeCreate(12, 'Karambit'),
    bladeShapeCreate(13, 'Scimitar'),
    bladeShapeCreate(14, 'Skinner'),
    bladeShapeCreate(15, 'Talon'),
    bladeShapeCreate(16, 'Needle Point'),
    bladeShapeCreate(17, 'Spey Point'),
    bladeShapeCreate(18, 'Pen Blade'),
    bladeShapeCreate(19, 'Trapper'),
    bladeShapeCreate(20, 'Stockman'),
    bladeShapeCreate(21, 'Barlow'),
    bladeShapeCreate(22, 'Canoe'),
    bladeShapeCreate(23, 'Congress'),
    bladeShapeCreate(24, 'Muskrat'),
    bladeShapeCreate(25, 'Peanut'),
    bladeShapeCreate(26, 'Sodbuster'),
    bladeShapeCreate(27, 'Stockman'),
    bladeShapeCreate(28, 'Toothpick'),
    bladeShapeCreate(29, 'Whittler'),
  ]);
}

async function createCategories() {
  await Promise.all([
    categoryCreate(0, 'Folding'),
    categoryCreate(1, 'Fixed'),
    categoryCreate(2, 'Kitchen'),
    categoryCreate(3, 'Hunting'),
    categoryCreate(4, 'Multi-Tool'),
    categoryCreate(5, 'Automatic'),
    categoryCreate(6, 'Assisted'),
    categoryCreate(7, 'Butterfly'),
    categoryCreate(8, 'Throwing'),
    categoryCreate(9, 'Machete'),
    categoryCreate(10, 'Sword'),
    categoryCreate(11, 'Axe'),
    categoryCreate(12, 'Tomahawk'),
  ]);
}

async function createKnives() {
  await Promise.all([
    knifeCreate(
      0,
      'Knife 1',
      metals[6],
      bladeShapes[8],
      categories[0],
      'Description 1',
      10.99,
      5
    ),
    knifeCreate(
      1,
      'Knife 2',
      metals[3],
      bladeShapes[4],
      categories[6],
      'Description 2',
      15.99,
      3
    ),
    knifeCreate(
      2,
      'Knife 3',
      metals[2],
      bladeShapes[4],
      categories[7],
      'Description 3',
      20.99,
      8
    ),
    knifeCreate(
      3,
      'Knife 4',
      metals[8],
      bladeShapes[7],
      categories[2],
      'Description 3',
      20.99,
      8
    ),
    knifeCreate(
      4,
      'Knife 5',
      metals[5],
      bladeShapes[2],
      categories[2],
      'Description 3',
      20.99,
      8
    ),
    knifeCreate(
      5,
      'Knife 6',
      metals[2],
      bladeShapes[2],
      categories[2],
      'Description 3',
      20.99,
      8
    ),
    knifeCreate(
      6,
      'Knife 7',
      metals[2],
      bladeShapes[2],
      categories[2],
      'Description 3',
      20.99,
      8
    ),
    knifeCreate(
      7,
      'Knife 8',
      metals[2],
      bladeShapes[2],
      categories[2],
      'Description 3',
      20.99,
      8
    ),
    knifeCreate(
      8,
      'Knife 9',
      metals[2],
      bladeShapes[2],
      categories[9],
      'Description 3',
      20.99,
      8
    ),
    knifeCreate(
      9,
      'Knife 10',
      metals[3],
      bladeShapes[6],
      categories[7],
      'Description 3',
      20.99,
      8
    ),
  ]);
}
