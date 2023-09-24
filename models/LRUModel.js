const mongoose = require("mongoose");

const LRUSchema = mongoose.Schema(
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

module.exports = mongoose.model("LRU", LRUSchema);
