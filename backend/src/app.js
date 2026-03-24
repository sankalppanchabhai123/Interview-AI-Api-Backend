const express = require("express");
const authRoute = require("./routes/auth.routes");
const cookieParser = require("cookie-parser")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    return res.send("server is in building phase");
})

app.use("/api/auth/", authRoute);

module.exports = app;