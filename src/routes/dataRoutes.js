// require express
const express = require("express");
// require router module
const router = express.Router();
// setup router function
const dataCtrl = require("../controllers/dataControllers");

// POST request to create a new data
router.post("/data", dataCtrl.createNewData);
// GET request to /data to fetch all data
router.get("/", dataCtrl.fetchData);
// GET request to /data/id to fetch a single data
router.get("/data/:id", dataCtrl.fetchSingleData);
// Put request to /data/:id to update a singledata
router.put("/data/:id", dataCtrl.updateSingleData);
// DELETE request to /data/:id to delete single data
router.delete("/data/:id", dataCtrl.deleteSingleData);

module.exports = router;
