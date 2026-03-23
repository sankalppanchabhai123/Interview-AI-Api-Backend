const jwt = require("jsonwebtoken");
const userModel = require("../modules/schema");
const bcrypt = require("bcryptjs")
// const cookieParser = require("cookie-parser");

/**
 * @route POST /api/auth/register
 * @description Register user 
 * @access Public 
 */
async function registerUserController(req, res) {
    const { username, email, password } = req.body || {};
    if (!username || !email || !password) {
        return res.status(400).json({
            "massage": "please provide username, email and password"
        })
    }

    const isUserAlreadyExists = await userModel.findOne({
        $or: [{ username }, { email }]
    })
    if (isUserAlreadyExists) {
        return res.status(400).json({ "massage": "username/email already taken" })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const User = await userModel.create({
        username,
        email,
        password: hashedPassword
    })

    const token = await jwt.sign({
        id: User._id,
        username: User.username,
    }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: User._id,
            username: User.username,
            email: User.email,
        }
    })
}

async function loginUserController(req, res) {
    const { email, password } = req.body || {};

    const User = await userModel.findOne({ email })
    if (!User) {
        return res.status(401).json({
            "message": "username not found"
        })
    }

    const getUserData = await bcrypt.compare(password, User.password);
    if (!getUserData) {
        return res.status(400).json({ "message": "incorrect password" })
    }

    const token = await jwt.sign({
        id: User._id,
        username: User.username,
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", token);

    res.status(200).json({
        message: "user login successfully",
        user: {
            id: User._id,
            username: User.username,
            email: User.email,
        }
    });
}

module.exports = {
    registerUserController,
    loginUserController,
}