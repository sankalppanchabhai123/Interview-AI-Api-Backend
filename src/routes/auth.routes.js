const express = require('express')
const authUserController = require("../controllers/auth.controllers")
const authRoute = express.Router();
// route.use()
/**
 * @route POST /api/auth/register
 * @description Register user 
 * @access Public 
 */

authRoute.post("/register", authUserController.registerUserController);

/**
 * @route POST /api/auth/login
 * @description login user with email and password 
 * @access Public 
 */
authRoute.post("/login", authUserController.loginUserController);
module.exports = authRoute;