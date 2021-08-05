import express from "express";
import cors from "cors";
import helmet from "helmet"

const zomato = express();
const PORT = 4000;

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }))
zomato.use(cors());
zomato.use(helmet())

zomato.get("/", (req, res) => res.json({ message: "Setup success!" }))

zomato.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})