const mongoose = require("mongoose");

const PageReplacementSchema = mongoose.Schema(
  {
    question_no: {
      type: String,
      required: true,
    },

    requestSequence: [
      {
        a:{
            type:String,
            required:true,
        }
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PageReplacement", PageReplacementSchema);
