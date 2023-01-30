const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./Config/db");
const port = process.env.PORT || 3000;

connectDB;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
    res.send(`Hello I am in ${process.env.NODE_ENV} mode`);
});

app.use('/api/v1/countries', require('./Routes/countryRoutes'));
app.use('/api/v1/timezones', require('./Routes/timezoneRoutes'));
app.use('/api/v1/timezone', require('./Routes/timeRoutes'));
app.use('/api/v1/categories', require('./Routes/categoryRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
