const express = require("express");
const authRoute = require("./routes/auth.routes");
const app = express();

app.get('/', (req, res) => {
    return res.send("server is in building phase");
})

app.use("/api/auth/", authRoute);

module.exports = app;