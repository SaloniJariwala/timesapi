const mongoose = require("mongoose");

const timezoneSchema = mongoose.Schema({
        abbr: {
            type: String,
        },
        name: {
            type: String,
        },
        utc_offset: {
            type: String,
        },
        city: {
            type: String,
        },
        countryId: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("timezones", timezoneSchema);