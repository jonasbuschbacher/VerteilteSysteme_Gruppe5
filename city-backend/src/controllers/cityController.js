import { check, validationResult } from "express-validator";
import { City } from "../models/cities.js";

export const getCities = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const cities = await City.find();
  res.status(200).send(cities);
};
export const getCityById = async (req, res) => {
  let city = await City.findById(req.params.id);
  res.status(200).send(city);
};
export const getCityByName = async (req, res) => {
  let result = await City.find({cityName: req.query.cityName})
  res.status(200).send(result);
};

export const addCity = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const city = new City({
    cityName: req.body.cityName,
    population: req.body.population,
    country: req.body.country,
  });
  
  city.save(city).then((city) => res.status(201).send(city));
};

export const updateCity = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const city = new City({
    cityName: req.body.cityName,
    population: req.body.population,
    country: req.body.country,
  });  
  await City.replaceOne(
    {
      id: req.params.id,
    },
    {
      cityName: req.body.cityName,
      population: req.body.population,
      country: req.body.country,
    }
  );
  res.status(200).send(city)
};

export const deleteCity = async (req, res) => {
  await City.deleteOne(City.findById(req.params.id));
  res.status(200).send("Eintrag gelöscht")
}

// attached as second param in a route
export const newCityValidators = [
  check("cityName").notEmpty().withMessage("City-Name field required"),
  check("population").notEmpty().withMessage("Population field required"),
  check("country").notEmpty().withMessage("Country field required")
];
