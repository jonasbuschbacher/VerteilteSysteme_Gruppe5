import { check, validationResult } from "express-validator";
import { City } from "../models/cities";

export const getCities = (req, res) => {
  res.status(200).send(cities);
};
export const getCityById = (req, res) => {
  let city = cities.find((b) => b.id == req.params.id);
  res.status(200).send(city);
};
export const getCityByName = (req, res) => {
  let result = cites.filter((city) => city.title == req.query.title);
  res.status(200).send(result);
};

export const addCity = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  cities.push(req.bod);
  res.status(201).send(`Added ${city.title} to city collection`);
};

// attached as second param in a route
export const newCityValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("population").notEmpty().withMessage("Population field required"),
  check("country").notEmpty().withMessage("Country field required")
];
