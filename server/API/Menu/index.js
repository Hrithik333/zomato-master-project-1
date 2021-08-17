import express from "express";
import passport from "passport";

// Database Model
import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Router();

/*
Route           /list
Description     Get all menus based on id
Access          PUBLIC
Parameters      _id
Method          GET
*/
Router.get("/list/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await MenuModel.findOne(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route           /image
Description     Get all menu images based on id
Access          PUBLIC
Parameters      _id
Method          GET
*/
Router.get("/image/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;