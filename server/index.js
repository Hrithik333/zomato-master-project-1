require("dotenv").config()

import express from "express";
import cors from "cors";
import helmet from "helmet"

// microservice routes
import Auth from "./API/Auth";

// Database connection 
import ConnectDB from "./database/connection";

const zomato = express();
const PORT = 4000;

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }))
zomato.use(cors());
zomato.use(helmet())

// application routes
zomato.use("/auth", Auth);

zomato.get("/", (req, res) => res.json({ message: "Setup success!" }))

zomato.listen(PORT, () => {
    ConnectDB()
        .then(() => console.log(`Server is running on port ${PORT}`))
        .catch(() => console.log("Server is running, but database connection failed"))
})