const mongoose = require("mongoose");

const PRSchema = mongoose.Schema(
  {
    question_no: {
      type: String,
      required: true,
    },

    PRProcesses: [
      {
        arrTime: {
          type: Number,
          required: true,
        },
        burstTime: {
          type: Number,
          required: true,
        },
        Pr: {
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

module.exports = mongoose.model("PR", PRSchema);
