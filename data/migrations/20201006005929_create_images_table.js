exports.up = function (knex) {
  return knex.schema
    .createTable("images", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.text("url").notNullable().unique();
    })
    .createTable("categories_images", (tbl) => {
      tbl.increments();
      tbl.integer("image_id").unsigned().references("id").inTable("images");
      tbl
        .integer("category_id")
        .unsigned()
        .references("id")
        .inTable("categories");
    })
    .createTable("categories", (tbl) => {
      tbl.increments();
      tbl.string("name");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("images")
    .dropTableIfExists("categories_images")
    .dropTableIfExists("categories");
};
