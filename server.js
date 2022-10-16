const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const dbConfig = require("./configs/db.config");
const serverConfig = require("./configs/server.config")
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));



mongoose.connect(dbConfig.DB_URL, () => {
    console.log("connected to db.");
},(err) => {
    console.log("somer error occured", err.message);
})

require("./routes/notification.route")(app);

// attach the cron file also
require("./schedulers/emailScheduler");

app.listen(serverConfig.PORT, () => {
    console.log("notification server started : ", serverConfig.PORT)
});