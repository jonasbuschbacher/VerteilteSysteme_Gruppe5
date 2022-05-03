import express from "express";
import {
  getCountries,
  getCountryById,
  getCountryByName,
  addCountry,
  newCountryValidators,
} from "../controllers/countryController.js";


const router = express.Router();

router.get("/", getCountries);
router.get("/:id", getCountryById);
router.get("/search", getCountryByName);
router.post("/", newCountryValidators, addCountry);


export default router;
