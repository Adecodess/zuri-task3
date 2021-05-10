//  require the model
const Data = require("../models/data");

// create a new data
exports.createNewData = (req, res) => {
  Data.create(
    {
      ...req.body,
    },
    (err, newData) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return res
          .status(200)
          .json({ message: "new data created successfuly", newData });
      }
    }
  );
};

exports.fetchData = (req, res) => {
  Data.find({}, (err, data) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res.status(200).json({ data });
    }
  });
};

exports.fetchSingleData = (req, res) => {
  Data.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).json({ message: err });
    } else if (!data) {
      res.status(404).json({ message: "data not found" });
    } else {
      return res.status(200).json({ message: "data found sucessfully", data });
    }
  });
};

exports.updateSingleData = (req, res) => {
  Data.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
    },
    (err, data) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else if (!data) {
        return res.status(404).json({ message: "data not found" });
      } else {
        data.save((err, savedData) => {
          if (err) {
            res.status(500).json({ message: err });
          } else {
            return res
              .status(200)
              .json({ message: "data updated successfully", savedData });
          }
        });
      }
    }
  );
};

exports.deleteSingleData = (req, res) => {
  Data.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!data) {
      return res.status(404).json({ message: "data not found" });
    } else {
      return res.status(200).json({ message: " data deleted sucessfully" });
    }
  });
};
