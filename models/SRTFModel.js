const mongoose = require("mongoose");

const SRTFSchema = mongoose.Schema(
  {
    question_no: {
      type: String,
      required: true,
    },

    SRTFProcesses: [
      {
        arrTime: {
          type: Number,
          required: true,
        },
        tempArrTime:{
          type:Number,
          required:true,
        },
        burstTime: {
          type: Number,
          required: true,
        },
        remTime:{
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

module.exports = mongoose.model("SRTF", SRTFSchema);
