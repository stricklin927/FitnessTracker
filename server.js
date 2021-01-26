const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

// ILY 3000 -IM
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));
app.use(morgan("tiny"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workoutDB', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// API and Html routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start the server
app.listen(PORT, function(){
    console.log("Listening to Port %s. Visit https://localhost:%s in your browser", PORT, PORT);
});