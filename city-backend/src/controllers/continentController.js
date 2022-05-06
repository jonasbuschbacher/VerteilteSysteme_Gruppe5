import { check, validationResult } from "express-validator";
import { Continent } from "../models/continents.js";

export const getContinents = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:4000");
    const continents = await Continent.find();
    if(continents.length==0){
      return res.status(400).send({error: "Eintrag nicht gefunden."});
    }
    res.status(200).send(continents);
  };
  export const getContinentById = async (req, res) => {
    let continent = await Continent.findById(req.params.id);
    if(continent.length==0){
      return res.status(400).send({error: "Eintrag nicht gefunden."});
    }
    res.status(200).send(continent);
  };
  export const getContinentByName = async (req, res) => {
    let result = await Continent.find({contientName: req.query.contientName})
    if(result.length==0){
      return res.status(400).send({error: "Eintrag nicht gefunden."});
    }
    res.status(200).send(result);
  };

  export const addContinent = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let result = await Continent.find({ contientName: req.body.contientName });
    if(result.length!=0){
        return res.status(400).send({error: `Eintrag schon vorhanden`});
    }

    const continent = new Continent({
        contientName: req.body.contientName,
        countries_amount: req.body.countries_amount,  
      });

      continent.save(continent).then((continent) => res.status(201).send(continent));
    };

    export const updateContinent = async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      let result = await Continent.findById(req.params.id);
      if(result.length==0){
          return res.status(400).send({error: `Eintrag nicht gefunden`});
      }

      const continent = new Continent({
          contientName: req.body.contientName,
          countries_amount: req.body.countries_amount,  
        });

        await Continent.replaceOne(
          {
            id: req.params.id,
          },
          {
            contientName: req.body.contientName,
            countries_amount: req.body.countries_amount,  
          }
   
        );
  
        res.status(200).send(continent);
      };

      export const deleteContinent = async (req, res) => {
        let result = await Continent.findById(req.params.id);
        if(result.length==0){
            return res.status(400).send({error: `Eintrag nicht gefunden`});
        }
        await Continent.deleteOne(Continent.findById(req.params.id));
        res.status(200).send("Eintrag gelöscht")
      }


    // attached as second param in a route
export const newContientValidators = [
    check("contientName").notEmpty().withMessage("Contient-Name field required"),
    check("countries_amount").notEmpty().withMessage("Countries-Amount field required"),   
  ];