const asyncHandler = require("express-async-handler");
const categories = require("../Model/categories");

const getCategories = asyncHandler(async (req, res) => {
    const allCategories = await categories.find();
    res.status(200).json(allCategories);
});

const setCategory = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400).send("data missing for category");
    } else {
        const category = await categories.create({
            name: req.body.name,
        });
        res.status(200).json(category);
    }
});

module.exports = { getCategories, setCategory };