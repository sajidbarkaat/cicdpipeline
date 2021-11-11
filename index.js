const express = require("express");
const expressApp = express();

expressApp.get("/", function(req, res){
    res.send("Hello World");
});


expressApp.listen(process.env.PORT || 5000);