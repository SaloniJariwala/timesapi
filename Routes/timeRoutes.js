const express = require("express");
const { getCountryCurrentTime } = require("../Controller/time");
const router = express.Router();

router.route("/:timezone").get(getCountryCurrentTime);

module.exports = router;