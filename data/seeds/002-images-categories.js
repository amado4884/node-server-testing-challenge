exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories_images")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories_images").insert([
        { id: 1, category_id: 1, image_id: 1 },
        { id: 2, category_id: 2, image_id: 2 },
        { id: 3, category_id: 3, image_id: 3 },
        { id: 4, category_id: 4, image_id: 4 },
        { id: 5, category_id: 5, image_id: 5 },
        { id: 6, category_id: 1, image_id: 6 },
        { id: 7, category_id: 2, image_id: 7 },
        { id: 8, category_id: 3, image_id: 8 },
        { id: 9, category_id: 4, image_id: 9 },
        { id: 10, category_id: 5, image_id: 10 },
      ]);
    });
};
