const express = require("express");
const router = express.Router();
const { getAllTimeZone, setTimeZone, deleteTimezone, getTimezoneByCountry } = require("../Controller/timezone");

router.route("/").get(getAllTimeZone).post(setTimeZone);
router.route("/:id").get(getTimezoneByCountry).delete(deleteTimezone);

module.exports = router;