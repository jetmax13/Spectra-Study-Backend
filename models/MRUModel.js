const mongoose = require("mongoose");

const MRUSchema = mongoose.Schema(
  {
    question_no: {
      type: String,
      required: true,
    },

    requestSequence: {
      type: [String], // This defines an array of strings
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MRU", MRUSchema);
