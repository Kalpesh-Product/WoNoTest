const mongoose = require("mongoose");

const virtualOfficeSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    clientName: {
      type: String,
      required: true,
    },
    unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Unit",
    },
    terStartDate: {
      type: Date,
    },
    totalTerm: {
      type: Number,
      required: true,
    },
    termEnd: {
      type: Date,
      required: true,
    },
    rentStatus: {
      type: String,
      required: true,
    },
    pastDueDate: {
      type: Date,
    },
    annualIncrement: {
      type: Number,
    },
    nextIncrementDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const VirtualOfficeClient = mongoose.model(
  "VirtualOfficeClient",
  virtualOfficeSchema
);

module.exports = VirtualOfficeClient;
