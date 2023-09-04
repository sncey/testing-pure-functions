const express = require("express");

const app = express();
const port = 3000;

// Feel free to add a few Express endpoints here to manually test your functions

app.get("/", (req, res) => {
    res.send("👋 Hello");
});

app.listen(port, () => console.log(`Application running on port ${port}`));

module.exports = app;
