const { db, tables } = require("./db");

const createCategory = async (name) => {
  return await db.insert({ name }).into(tables.CATEGORIES);
};

const getCategoriesByNameList = async (nameList) => {
  return db.select("*").from(tables.CATEGORIES).whereIn("name", nameList);
};

module.exports = {
  createCategory,
  getCategoriesByNameList,
};
