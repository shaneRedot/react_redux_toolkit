import http from "http";
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.server = http.createServer(app);

app.use(cors());

// setup morgan which gives us http request logging
app.use(morgan("dev"));

// setup a friendly greeting for the root route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the REST API project!',
    });
});

app.set('port', process.env.PORT || 5000);