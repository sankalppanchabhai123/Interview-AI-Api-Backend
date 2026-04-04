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
app.use("/api/interview/", interviewroute);

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
            message: "Invalid JSON payload"
        });
    }

    return next(err);
});


module.exports = app;