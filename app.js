require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "This rest api is working on process.env.APP_PORT"
    });
});

app.listen(process.env.APP_PORT, () => {
    console.log("server is up and running ON APP_PORT: ", process.env.APP_PORT );
});