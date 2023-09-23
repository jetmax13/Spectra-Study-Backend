const mongoose = require("mongoose");

const FCFSSchema = mongoose.Schema(
  {
    question_no: {
      type: String,
      required: true,
    },

    FCFSProcesses: [
      {
        arrTime: {
          type: Number,
          required: true,
        },
        burstTime: {
          type: Number,
          required: true,
        },
        id: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FCFS", FCFSSchema);
