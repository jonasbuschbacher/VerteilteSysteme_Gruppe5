import express from "express";
import bodyParser from "body-parser";
import citiesRoutes from "./routes/cityRoutes.js";
import mongoose from "mongoose";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocs from "../swaggerDocs.js";

// complete application is here
const app = express();
const port = 3000;

app.use(bodyParser.json());

//routes are /books & everything else throws a 404
app.use("/cities", citiesRoutes);
app.use("/api", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs))
app.all("*", (req, res) => res.sendStatus(404));

mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
