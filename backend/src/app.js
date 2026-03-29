const express = require("express");
const authRoute = require("./routes/auth.routes");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const interviewroute = require("./routes/interview.routes");
const app = express();


app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    return res.send("server is in building phase");
})

app.use("/api/auth/", authRoute);


module.exports = app;