const mongoose = require("mongoose");

const SJFSchema = mongoose.Schema(
  {
    question_no: {
      type: String,
      required: true,
    },

    SJFProcesses: [
      {
        arrTime: {
          type: Number,
          required: true,
        },
        tempArrTime:
        {
            type: Number,
            required: true, 
        },
        
        burstTime: {
          type: Number,
          required: true,
        },
        remTime: {
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

module.exports = mongoose.model("SJF", SJFSchema);
