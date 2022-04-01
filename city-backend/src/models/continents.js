
import mongoose from "mongoose";

const continentSchema = new mongoose.Schema({
  contientName: String,
  countries_amount: Number,  
});

export const Continent = mongoose.model("Continent", continentSchema);





