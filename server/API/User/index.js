import express from "express";
import passport from "passport";

// Database Model
import { UserModel } from "../../database/allModels";

// Validation
import { ValidateUserId } from "../../validation/orders";
import { ValidateUserData } from "../../validation/user";

const Router = express.Router();

/*
Route           /
Description     Get user data
Access          PUBLIC
Parameters      _id
Body            none
Method          GET
*/
Router.get("/", passport.authenticate("jwt"), async (req, res) => {
    try {

        const { email, fullname, phoneNumber, address } = req.session.passport.user._doc;

        return res.json({ user: { email, fullname, phoneNumber, address } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /:_id
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params._id);
        const { fullname } = user;

        return res.json({ user: { fullname } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route           /update
Description     Update user id
Access          PUBLIC
Parameters      userId
Body            user data
Method          PUT
*/
Router.put("/update/:userId", async (req, res) => {
    try {
        await ValidateUserId(req.params);
        await ValidateUserData(req.body.userData);

        const { userId } = req.params;
        const { userData } = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(userId,
            {
                $set: userData
            },
            { new: true }
        )

        return res.json({ user: updateUserData });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})



export default Router;