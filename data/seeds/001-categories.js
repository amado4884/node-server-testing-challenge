exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        { id: 1, name: "Beaches" },
        { id: 2, name: "Farmland" },
        { id: 3, name: "Sky" },
        { id: 4, name: "Water" },
        { id: 5, name: "Animals" },
      ]);
    });
};
