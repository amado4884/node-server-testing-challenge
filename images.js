const { db, tables } = require("./db");

const find = async () => {
  return await db.select("name", "url").from(tables.IMAGES);
};

const createImage = async (name, url) => {
  return await db.insert({ name, url }).into(tables.IMAGES);
};

const attachImageCategory = async (imageId, categoryId) => {
  return await db
    .insert({ image_id: imageId, category_id: categoryId })
    .into(tables.CATEGORIES_IMAGES);
};

const getImageCategoriesById = async (id) => {
  try {
    const results = await db
      .select(
        `${tables.IMAGES}.*`,
        `${tables.CATEGORIES}.name as category_name`
      )
      .from(tables.IMAGES)
      .leftJoin(
        tables.CATEGORIES_IMAGES,
        `${tables.CATEGORIES_IMAGES}.image_id`,
        `${tables.IMAGES}.id`
      )
      .leftJoin(
        tables.CATEGORIES,
        `${tables.CATEGORIES_IMAGES}.category_id`,
        `${tables.CATEGORIES}.id`
      )
      .where(`${tables.IMAGES}.id`, id);
    return results.reduce((memo, categoryEntry) => {
      if (!memo.name) memo.name = categoryEntry.name;
      if (!memo.id) memo.id = categoryEntry.id;
      if (!memo.url) memo.url = categoryEntry.url;
      if (!memo.categories) memo.categories = [];
      memo.categories.push(categoryEntry.category_name);
      return memo;
    }, {});
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createImage,
  attachImageCategory,
  getImageCategoriesById,
  find,
};
