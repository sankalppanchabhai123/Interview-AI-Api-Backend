const express = require("express");
const { authUser } = require("../middlewares/auth.middleware");
// const { interview } = require()
const { tempResult: invokeGeminiAi } = require("../services/ai.services");

const interviewroute = express.Router();

/**
 * @route GET /api/description/interview 
 * @description route to get the data from the db
 * @access public  
 */
// interviewroute.get("/description", interviewController.tempResult);

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