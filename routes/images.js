const router = require("express").Router();
const { route } = require(".");
const { db } = require("../db");
const Images = require("../images");

router.get("/", async (req, res) => {
  const results = await Images.find();
  return res.status(200).json({ images: results });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const results = await Images.getImageCategoriesById(id);
  return res.status(200).json(results);
});

router.post("/", async (req, res) => {
  let { name, url, categories } = req.body;

  if (!name || !url || !categories)
    return res.status(400).json({ message: "Incorrect image data" });

  categories = categories.map((category) => category.toLowerCase());
  try {
    // Find out if that url already exists in database
    let image = await db("images").where({ url }).first();
    if (image)
      return res.status(200).json({
        message: "Okay",
        data: await Images.getImageCategoriesById(image.id),
      });

    // Find out if all of those categories exist and create any missing ones.
    const existingCategories = await db("categories").whereIn(
      "name",
      categories
    );

    if (existingCategories.length !== categories.length) {
      let missingCategories = categories.filter((category) => {
        let exists = false;
        existingCategories.forEach((cat) => {
          if (cat.name === category) exists = true;
        });
        return !exists;
      });
      missingCategories = missingCategories.map((name) => ({ name }));
      let instertedCategories = await db("categories").insert(
        missingCategories
      );
      instertedCategories = await db("categories").whereIn(
        "name",
        missingCategories.map((c) => c.name)
      );
      categories = [...instertedCategories, ...existingCategories];
    } else categories = existingCategories;
    // categories now holds a list of existing rows
    await Images.createImage(name, url);
    image = await db("images").where({ url }).first();
    categories.forEach((cat) => Images.attachImageCategory(image.id, cat.id));

    categories = categories.map((cat) => cat.name);

    const imageData = await Images.getImageCategoriesById(image.id);

    return res.status(200).json({ message: "Okay", data: imageData });
    // Then create the image in the table and set the right categories.
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db("images").where({ id }).first().del();
    return res.status(200).json({
      message: "Deleted",
    });
  } catch (error) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
