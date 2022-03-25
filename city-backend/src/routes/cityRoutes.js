import express from "express";
import {
  getCities,
  getCityById,
  getCityByName,
  addCity,
  newCityValidators,
} from "../controllers/cityControllers.js.js";


const router = express.Router();

router.get("/", getCities);
router.get("/:id", getCityById);
router.get("/search", getCityByName);
router.post("/", newCityValidators, addCity);

export default router;
