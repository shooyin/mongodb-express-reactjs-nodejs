mongoose = require("mongoose");

const Schema = mongoose.Schema;

const typeSchema = new Schema(
  {
    type: {
      type: String,
      require: true,
      unique: true,
      hidden: Boolean
    }
  },
  {
    timestamps: true
  }
);

const Type = mongoose.model("Type", typeSchema);

module.exports = Type;
