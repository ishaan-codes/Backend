import "dotenv/config";
import express from "express";
import nodemon from "nodemon";
const app = express();
const port = 4000;

app.get("/",(req, res) => {
    res.send("Hello World");
})
app.get("/about", (req, res) => {
    res.send("<h1>Hi this is Ishaan<h1>");
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${port}.`);
})

