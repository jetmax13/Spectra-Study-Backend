const mongoose = require("mongoose");

const FIFOSchema = mongoose.Schema(
  {
    question_no: {
      type: String,
      required: true,
    },

    FIFOProcesses: {
      type: [String], // This defines an array of strings
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FIFO", FIFOSchema);
