const express = require("express");
const router = express.Router();
const { getCountries, setCountry, deleteCountry } = require("../Controller/countries");

router.route("/").get(getCountries).post(setCountry);
router.route("/:id").delete(deleteCountry);

module.exports = router;