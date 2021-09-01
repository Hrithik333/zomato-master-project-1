import express from "express";

// Database Model
import { OrderModel } from "../../database/allModels";

const Router = express.Router();

/*
Route           /
Description     Get all orders based on id
Access          PUBLIC
Parameters      _id
Method          GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({ user: _id });

        if (!getOrders) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({ orders: getOrders });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route           /new
Description     Add new order
Access          PUBLIC
Parameters      _id
Method          POST
*/
Router.post("/new/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { orderDetails } = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id
            },
            {
                $push: { orderDetails }
            },
            {
                new: true
            }
        )

        return res.json({ order: addNewOrder });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;