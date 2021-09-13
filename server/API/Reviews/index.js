import express from "express";

// Database Model
import { ReviewModel } from "../../database/allModels";

// Validation
import { ValidateReviewData, ValidateReviewId } from "../../validation/reviews";

const Router = express.Router();

/*
Route           /new
Description     Add new review/rating
Access          PUBLIC
Parameters      none
Body            Review object
Method          POST
*/
Router.post("/new", async (req, res) => {
    try {
        await ValidateReviewData(req.body.reviewData);

        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({ message: "Review successfully created!" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route           /delete
Description     Delete review/rating
Access          PUBLIC
Parameters      _id
Method          DELETE
*/
Router.delete("/delete/:_id", async (req, res) => {
    try {
        await ValidateReviewId(req.params);

        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ message: "successfully deleted the review" })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;