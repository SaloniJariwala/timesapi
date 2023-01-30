const asyncHandler = require("express-async-handler");
const countires = require("../Model/countries");

const getCountries = asyncHandler(async (req, res) => {
    const allCountries = await countires.find();
    res.status(200).json(allCountries);
});

const setCountry = asyncHandler(async (req, res) => {
    if(!req.body) {
        res.status(400).send("data missing for countries");
    } else {
        const country = await countires.create({
            abbr: req.body.abbr,
            name: req.body.name,
            utc_offset: req.body.utc_offset
        });
        res.status(200).json({country});
    }
});

const deleteCountry = asyncHandler(async (req, res) => {
    const country = countires.findById(req.params.id);

    if (!country) {
        res.status(400);
        throw new Error("Country Not Found")
    } else {
        await country.remove();

        res.status(200).send("Country Deleted");
    }
});

module.exports = { getCountries, setCountry, deleteCountry };