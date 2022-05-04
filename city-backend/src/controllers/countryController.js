import { check, validationResult } from "express-validator";
import { Country } from "../models/countries.js";

export const getCountries = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const countries = await Country.find();
    res.status(200).send(countries);
  };

  export const getCountryById = async (req, res) => {
    let country = await Country.findById(req.params.id);
    res.status(200).send(country);
  };

  export const getCountryByName = async (req, res) => {
    let result = await Country.find({countryName: req.query.countryName})
    res.status(200).send(result);
  };

  export const addCountry = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const country = new Country({
        countryName: req.body.countryName,
        capital:  req.body.capital,   
      });

      country.save(country).then((country) => res.status(201).send(country));
    };

    export const updateCountry = async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      const country = new Country({
          countryName: req.body.countryName,
          capital:  req.body.capital,   
        });

        await Country.replaceOne(
          {
            id: req.params.id,
          },
          {
            countryName: req.body.countryName,
            capital:  req.body.capital,
          }
        );
        res.status(200).send(country);
          
      };

      export const deleteCountry = async (req, res) => {
        await Country.deleteOne(Country.findById(req.params.id));
        res.status(200).send("Eintrag gelöscht")
      }

        // attached as second param in a route
export const newCountryValidators = [
    check("countryName").notEmpty().withMessage("Country-Name field required"),
    check("capital").notEmpty().withMessage("Capital field required"),   
  ];