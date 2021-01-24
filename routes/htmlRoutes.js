var path = require("path");

module.exports = function(app){
    // Show the exercise page
    app.get("/exercise", function (req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    //
    app.get("/", function (req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Show the stats for resistance and cardio
    app.get("/stats", function (req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
    
}