const knex = require("knex");
const config = require("./knexfile");

exports.db = knex(config);

exports.tables = {
  CATEGORIES: "categories",
  IMAGES: "images",
  CATEGORIES_IMAGES: "categories_images",
};
