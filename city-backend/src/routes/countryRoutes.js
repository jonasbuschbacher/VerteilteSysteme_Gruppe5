import express from "express";
import {
  getCountries,
  getCountryById,
  getCountryByName,
  addCountry,
  updateCountry,
  deleteCountry,
  newCountryValidators,
} from "../controllers/countryController.js";


const router = express.Router();

router.get("/", getCountries);
router.get("/:id", getCountryById);
router.get("/search", getCountryByName);
router.post("/", newCountryValidators, addCountry);
router.put("/:id",newCountryValidators,updateCountry);
router.delete("/:id",deleteCountry);


export default router;
