import express from "express"
import cors from 'cors'
import { itemsRouter } from "./routes/insights"
const app = express();
require('dotenv').config()
const PORT = 8080;


app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.use("/insight", itemsRouter)

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});