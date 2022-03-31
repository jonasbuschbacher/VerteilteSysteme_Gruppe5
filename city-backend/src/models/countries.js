
import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  id: Number,
  name: String,
  capital: String,  
});

export const Country = mongoose.model("Country", countrySchema);





