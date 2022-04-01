
import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  cityName: String,
  population: String,
  country: String,
});

export const City = mongoose.model("City", citySchema);





