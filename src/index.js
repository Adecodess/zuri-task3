// require express moduule
const express = require("express");

// initialise express module with app
const app = express();
// require databse folder
const connectDB = require("./database/setup");
// setup localhoset PORT env variable
require("dotenv").config();
const { PORT } = process.env;
// require dataroutes
const dataRoutes = require("./routes/dataRoutes");
// initialse express
app.use(express.json());

// initialise express middleware
app.use(express.json({ extended: false }));

// connect to database
connectDB();

app.use(dataRoutes);

// port
const port = process.env.PORT || PORT;

app.listen(port, () => {
  console.log(`app running on PORT ${port}`);
});
