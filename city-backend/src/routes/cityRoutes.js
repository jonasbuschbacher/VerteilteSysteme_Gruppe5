import express from "express";
import {
  getCities,
  getCityById,
  getCityByName,
  addCity,
  updateCity,
  deleteCity,
  newCityValidators,
} from "../controllers/cityController.js";


const router = express.Router();

router.get("/", getCities);
router.get("/:id", getCityById);
router.get("/search", getCityByName);
router.post("/", newCityValidators, addCity);
router.put("/:id",newCityValidators,updateCity);
router.delete("/:id",deleteCity);


export default router;
