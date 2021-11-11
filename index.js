const express = require("express");
const expressApp = express();

expressApp.get("/", function(req, res){
    res.send("Hello World!");
});

expressApp.listen(process.env.PORT || 5000, () => {
    console.log(`App is up and running at PORT: ${process.env.PORT || 5000}`);
});

module.exports = expressApp;