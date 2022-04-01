
import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  countryName: String,
  capital: String,  
});

export const Country = mongoose.model("Country", countrySchema);





