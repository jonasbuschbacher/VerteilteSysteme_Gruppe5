
import mongoose from "mongoose";

const continentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  countries_amount: Number,  
});

export const Continent = mongoose.model("Continent", continentSchema);





