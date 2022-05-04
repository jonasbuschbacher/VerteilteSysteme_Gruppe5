import express from "express";
import {
  getContinents,
  getContinentById,
  getContinentByName,
  addContinent,
  updateContinent,
  deleteContinent,
  newContientValidators,
} from "../controllers/continentController.js";


const router = express.Router();

router.get("/", getContinents);
router.get("/:id", getContinentById);
router.get("/search", getContinentByName);
router.post("/", newContientValidators, addContinent);
router.put("/:id",newContientValidators,updateContinent);
router.delete("/:id",deleteContinent);


export default router;
