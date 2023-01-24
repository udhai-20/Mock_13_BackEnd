const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      require: true,
    },
    position: {
      type: String,
      require: true,
    },
    Contract: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const JobsModel = mongoose.model("Job", jobsSchema);
module.exports = { JobsModel };
