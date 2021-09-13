import express from "express";
import passport from "passport";

// Database Model
import { FoodModel } from "../../database/allModels";

// Validation
import { ValidateRestaurantID } from "../../validation/food";

const Router = express.Router();

/*
Route           /r
Description     Get all foods based on particular restaurant
Access          PUBLIC
Parameters      id
Method          GET
*/
Router.get("/r/:_id", async (req, res) => {

    try {
        await ValidateRestaurantID(req.params);

        const { _id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id });

        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route           /c
Description     Get all foods based on category
Access          PUBLIC
Parameters      id
Method          GET
*/
Router.get("/c/:category", async (req, res) => {

    try {
        await ValidateCategory(req.params);

        const { category } = req.params;
        const foods = await FoodModel.find({
            category: { $regex: category, $options: "i" }
        });

        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;