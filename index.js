require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get("/",(req, res) => {
    res.send("Hello World");
})
app.get("/about", (req, res) => {
    res.send("<h1>Hi this is Ishaan<h1>");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})

