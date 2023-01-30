const asyncHandler = require("express-async-handler");
const timezone = require('../Model/timezone');

const getAllTimeZone = asyncHandler(async (req, res) => {
    const allTimeZones = await timezone.find();
    res.status(200).json(allTimeZones);
});

const setTimeZone = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400).send("data missing for timezone");
    } else {
        const oneTimezone = await timezone.create({
            abbr: req.body.abbr,
            name: req.body.name,
            utc_offset: req.body.utc_offset,
            city: req.body.city,
            countryId: req.body.countryId
        });
        res.status(200).json(oneTimezone);
    }
});

const deleteTimezone = asyncHandler(async (req, res) => {
    const timezoneOne = timezone.findById(req.params.id);

    if (!timezoneOne) {
        res.status(400);
        throw new Error("Timezone Not Found")
    } else {
        await timezoneOne.remove();

        res.status(200).send("Timezone Deleted");
    }
});

const getTimezoneByCountry = asyncHandler(async (req, res) => {
    const timezones = await timezone.find({ countryId: req.params.id });
    res.status(200).json(timezones);
});

module.exports = { getAllTimeZone, setTimeZone, deleteTimezone, getTimezoneByCountry };