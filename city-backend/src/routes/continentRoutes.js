import express from "express";
import {
  getContinents,
  getContinentById,
  getContinentByName,
  addContinent,
  newContientValidators,
} from "../controllers/continentController.js";


const router = express.Router();

router.get("/", getContinents);
router.get("/:id", getContinentById);
router.get("/search", getContinentByName);
router.post("/", newContientValidators, addContinent);


export default router;
