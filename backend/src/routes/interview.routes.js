const express = require("express");
const { authUser } = require("../middlewares/auth.middleware");
// const { interview } = require()
const { generateInterviewReportController } = require("../controllers/interview.controller")
const upload = require("../middlewares/file.middleware")

const interviewroute = express.Router();

/**
 * @route GET /api/description/interview 
 * @description route to get the data from the db
 * @access public  
 */
interviewroute.post("/", authUser, upload.single('resume'), generateInterviewReportController);

/**
 * @route POST /api/description/gemini
 * @description route to get the data from the gemini API
 * @access public
 */
// route.get("/description", authUser,)

/**
 * @route POST /api/description/gemini
 * @description route to get the data from the gemini API
 * @access public
 */
// route.get("/description", authUser,)

module.exports = interviewroute