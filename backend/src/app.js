const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoute = require("./routes/auth.routes");
const interviewroute = require("./routes/interview.routes");

const app = express();

const normalizeOrigin = (value) => (value || "").trim().replace(/\/$/, "");

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://your-actual-vercel-app.vercel.app",  // ✅ fix this URL
    ...(process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(",") : []),
]
    .map(normalizeOrigin)
    .filter(Boolean);

// ✅ cookieParser FIRST
app.use(cookieParser());

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        const requestOrigin = normalizeOrigin(origin);
        if (allowedOrigins.includes(requestOrigin)) {
            return callback(null, true);  // ✅ return true, not the string
        }
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("server is running"));
app.use("/api/auth/", authRoute);
app.use("/api/interview/", interviewroute);

module.exports = app;
