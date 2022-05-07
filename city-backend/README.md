# Travel Guide - Reiseführer

### Run `npm run d-up` to start server and MongoDB

## API calls

- GET /cities
- GET /cities/{id}
- GET /cities/search?cityName={name}
- POST /cities 
- PUT /cities/{id}
- DELETE /cities/{id}

<span style="color:blue"> -> Go to localhost:4000/api for documentation </span>


## Files & Folders

#### API

- **index.js**: app entry point
- **./routes**: contains all available routes
- **./controllers**: contains functions for each route as well as validators
- **./models**: contains the data model to be persisted in MongoDB
- **package.json**: contains all app dependencies, as well as scripts and meta information

#### Docker

- **Dockerfile**: Docker Image definition for the backend
- **.dockerignore**: Files to be ignored by docker

#### Swagger

- **swaggerDocs.js** contains OpenAPI specification