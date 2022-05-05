import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocs from "../swaggerDocs.js";

import citiesRoutes from "./routes/cityRoutes.js";
import continentRoutes from "./routes/continentRoutes.js";
import countryRoutes from "./routes/countryRoutes.js"

// complete application is here
const app = express();
const port = 3000;

app.use(bodyParser.json());

//routes are city, contitent, country related & everything else throws a 404
app.use("/cities", citiesRoutes);
app.use("/contients",continentRoutes);
app.use("/countries", countryRoutes)
app.use("/api", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs))
app.all("*", (req, res) => res.sendStatus(404));

mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
