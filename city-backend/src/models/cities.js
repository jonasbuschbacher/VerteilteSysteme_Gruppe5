
import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  id: Number,
  name: String,
  population: String,
  country: String,
});

export const City = mongoose.model("City", citySchema);





