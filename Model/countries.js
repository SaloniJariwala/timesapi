const mongoose = require("mongoose");

const countrySchema = mongoose.Schema({
        name: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("countries", countrySchema);