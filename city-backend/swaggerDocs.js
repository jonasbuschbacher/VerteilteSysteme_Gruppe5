const swaggerDocs = {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "REST API Reiseführer",
      description: "Reiseführer mit Städten, Ländern und Kontinenten",
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    host: "localhost:4000",
    basePath: "/cities",
    tags: [
      {
        name: "Cities",
        description: "cities in the database",
      },
      {
        name: "Countries",
        description: "countries in the database",
      },
      {
        name: "Continents",
        description: "continents in the database",
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "/cities": {
        get: {
          tags: ["Cities"],
          summary: "Get all Cities in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/CityOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/cities/{id}": {
        get: {
          tags: ["Cities"],
          summary: "Get a specific city by id",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Id of the city searched for",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/CityOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/search/{cityName}": {
        get: {
          tags: ["Cities"],
          summary: "Get a specific city by name",
          parameters: [
            {
              name: "name",
              in: "path",
              description: "Name of the city searched for",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/CityOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/cities/": {
        post: {
          tags: ["Cities"],
          summary: "Add a new city",
          parameters: [
            {
              name: "city",
              in: "body",
              description: "City to be added",
              schema: {
                $ref: "#/definitions/NewCityBody",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/CityOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
    },
    "/cities/{id}": {
      put: {
        tags: ["Cities"],
        summary: "Update a City",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the City to be updated",
          },
          {
            name: "City",
            in: "body",
            description: "City to be updated",
            schema: {
              $ref: "#/definitions/NewCityBody",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/CityOkResponse",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/BadRequest",
            },
          },
        },
      },
    },
    "/cities/{id}": {
      delete: {
        tags: ["Cities"],
        summary: "City to be deleted",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the City to be deleted",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/EntryDeleted",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/BadRequest",
            },
          },
        },
      },
    },


    definitions: {
      Book: {
        required: ["name", "author"],
        properties: {
          _id: {
            type: "string",
            uniqueItems: true,
          },
          title: {
            type: "string",
          },
          author: {
            type: "string",
          },
          pages: {
            type: "integer",
          },
        },
      },
    },
  };
  
  export default swaggerDocs;