import express from "express";
import jwt from "jsonwebtoken";

// Models
import { UserModel } from "../../database/user"

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
        await UserModel.findByEmailAndPhone(req.body.credentials);

        // save to database
        const newUser = await UserModel.create(req.body.credentials);

        // generate JWT auth token
        const token = newUser.generateJwtToken();

        return res.status(200).json({ token, status: "Success!" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;