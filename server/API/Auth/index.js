import express from "express";
import jwt from "jsonwebtoken";
import passport from "passport";

// Models
import { UserModel } from "../../database/user"

// Validation
import { ValidateSignin, ValidateSignup } from "../../validation/auth";

const Router = express.Router()

/*
Route           /signup
Description     signup with email and password
Access          PUBLIC
Parameters      none
Method          POST
*/
Router.post("/signup", async (req, res) => {

    try {
        await ValidateSignup(req.body.credentials);

        await UserModel.findByEmailAndPhone(req.body.credentials);

        const newUser = await UserModel.create(req.body.credentials);

        const token = newUser.generateJwtToken();

        return res.status(200).json({ token, status: "Success!" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route           /signin
Description     signin with email and password
Access          PUBLIC
Parameters      none
Method          POST
*/
Router.post("/signin", async (req, res) => {
    try {
        await ValidateSignin(req.body.credentials);

        const user = await UserModel.findByEmailAndPassword(req.body.credentials);

        const token = user.generateJwtToken();

        return res.status(200).json({ token, status: "Success!" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route           /google
Description     Google signin
Access          PUBLIC
Parameters      none
Method          GET
*/
Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ]
}))

/*
Route           /google/callback
Description     Google signin callback
Access          PUBLIC
Parameters      none
Method          GET
*/
Router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
    return res.json({ token: req.session.passport.user.token })
}
)

export default Router;