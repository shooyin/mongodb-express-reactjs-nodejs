const router = require("express").Router();
let Type = require("../models/type");

router.route("/").get((req, res) => {
  Type.find()
    .then(types => res.json(types))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const type = req.body.type;

  const newType = new Type({
    type
  });

  newType
    .save()
    .then(() => res.json("Type added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
