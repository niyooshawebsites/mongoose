const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the name"],
    },
    age: {
      type: Number,
      required: [true, "Please provide the age"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide the email"],
    },
    contactNo: {
      type: Number,
      min: 10,
      max: 10,
      unique: true,
      required: [true, "Please provide the contact number"],
    },
    address: {
      houseNo: {
        type: Number,
        required: [true, "Please provide the house number"],
      },
      streetNo: {
        type: Number,
        required: [true, "Please provide the street number"],
      },
      city: {
        type: String,
        required: [true, "Please provide the city"],
      },
      state: {
        type: String,
        required: [true, "Please provide the state"],
      },
      pincode: {
        type: Number,
        min: 6,
        max: 6,
        required: [true, "Please provide the pincode"],
      },
    },
    status: {
      type: String,
      default: "Prospect",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", leadSchema);
