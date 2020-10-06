exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("images")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("images").insert([
        {
          id: 1,
          name: "Beach",
          url:
            "https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
        },
        {
          id: 2,
          name: "Farmland",
          url:
            "https://images.unsplash.com/photo-1453053131046-5aea58348d50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1378&q=80",
        },
        {
          id: 3,
          name: "Sky",
          url:
            "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
        {
          id: 4,
          name: "Water",
          url:
            "https://images.unsplash.com/photo-1568145675395-66a2eda0c6d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        },
        {
          id: 5,
          name: "Bird",
          url:
            "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        },
        {
          id: 6,
          name: "Hawaii",
          url:
            "https://images.unsplash.com/photo-1462400362591-9ca55235346a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1017&q=80",
        },
        {
          id: 7,
          name: "Cows",
          url:
            "https://images.unsplash.com/photo-1549663253-bf7c0ddbde3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        },
        {
          id: 8,
          name: "Airplane",
          url:
            "https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 9,
          name: "Water Bottle",
          url:
            "https://images.unsplash.com/photo-1561041695-d2fadf9f318c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        },
        {
          id: 10,
          name: "Elephant",
          url:
            "https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
      ]);
    });
};
