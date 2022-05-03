import { check, validationResult } from "express-validator";
import { Continent } from "../models/continents.js";

export const getContinents = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const continents = await Continent.find();
    res.status(200).send(continents);
  };
  export const getContinentById = async (req, res) => {
    let continent = await Continent.findById(req.params.id);
    res.status(200).send(continent);
  };
  export const getContinentByName = async (req, res) => {
    let result = await Continent.find({contientName: req.query.contientName})
    res.status(200).send(result);
  };

  export const addContinent = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const continent = new Continent({
        contientName: req.body.contientName,
        countries_amount: req.body.countries_amount,  
      });

      continent.save(continent).then((continent) => res.status(201).send(continent));
    };

    // attached as second param in a route
export const newContientValidators = [
    check("contientName").notEmpty().withMessage("Contient-Name field required"),
    check("countries_amount").notEmpty().withMessage("Countries-Amount field required"),   
  ];