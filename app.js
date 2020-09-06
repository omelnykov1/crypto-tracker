const express = require('express');
const app = express();
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const cryptos = require("./routes/api/cryptos");
const tables = require("./routes/api/tables");
const passport = require("passport");
const bodyParser = require("body-parser");
const path = require('path');

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);
app.use('/api/cryptos', cryptos);
app.use("/api/tables", tables);

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)})

