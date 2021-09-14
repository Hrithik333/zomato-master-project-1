import express from "express";
import passport from "passport";

// Database Model
import { ReviewModel } from "../../database/allModels";

// Validation
import { ValidateReviewData, ValidateReviewId } from "../../validation/reviews";

const Router = express.Router();

/*
Route           /
Description     Get all reviews
Access          PUBLIC
Parameters      restaurantId
Body            none
Method          GET
*/
Router.get("/:resId", async (req, res) => {
    try {
        const reviews = await ReviewModel.find({ restaurant: req.params.resId })

        return res.json({ reviews })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


/*
Route           /new
Description     Add new review/rating
Access          PUBLIC
Parameters      none
Body            Review object
Method          POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
        await ValidateReviewData(req.body.reviewData);

        const { _id } = req.session.passport.user._doc;
        const { reviewData } = req.body;

        await ReviewModel.create({ ...reviewData, user: _id });

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