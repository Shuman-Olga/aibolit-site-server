const express = require("express"),
  cors = require("cors"),
  app = express(),
  dotenv = require("dotenv");
dotenv.config();

const routes = require("./src/routes/index");

let corsOptions = {
  origin: process.env.ORIGIN_URL || "http://localhost:8081",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

const db = require("./src/models");

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync Db");
});
app.use("/api", routes);

// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
