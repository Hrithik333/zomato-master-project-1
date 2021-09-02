import express from "express";

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
Router.get("/:_id", async (req, res) => {
    try {
        await ValidateUserId(req.params);

        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);

        return res.json({ user: getUser });
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