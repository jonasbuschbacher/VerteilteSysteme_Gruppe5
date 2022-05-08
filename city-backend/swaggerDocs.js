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
  basePath: "/",
  tags: [
    {
      name: "Cities",
      description: "cities in the database",
    },
    {
      name: "Continents",
      description: "continents in the database",
    },
    {
      name: "Countries",
      description: "countries in the database",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/cities/": {
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
    "/cities/search/{cityName}": {
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

    "/continents/": {
      get: {
        tags: ["Continents"],
        summary: "Get all continents in the system",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/ContinentOkResponse",
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
    "/continents/{id}": {
      get: {
        tags: ["Continents"],
        summary: "Get a specific continent by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the continent searched for",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/ContinentOkResponse",
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
    "/continents/search/{continentName}": {
      get: {
        tags: ["Continents"],
        summary: "Get a specific continent by name",
        parameters: [
          {
            name: "name",
            in: "path",
            description: "Name of the continent searched for",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/ContinentOkResponse",
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
    "/continents/": {
      post: {
        tags: ["Continents"],
        summary: "Add a new continent",
        parameters: [
          {
            name: "continent",
            in: "body",
            description: "Continent to be added",
            schema: {
              $ref: "#/definitions/NewContinentBody",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/ContinentOkResponse",
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
   "/continents/{id}": {
    put: {
      tags: ["Continents"],
      summary: "Update a continent",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id of the continent to be updated",
        },
        {
          name: "Continent",
          in: "body",
          description: "Continent to be updated",
          schema: {
            $ref: "#/definitions/NewContinentBody",
          },
        },
      ],
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/ContinentOkResponse",
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
    
  
   "/continents/{id}": {
    delete: {
      tags: ["Continents"],
      summary: "Continent to be deleted",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id of the continent to be deleted",
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



   "/countries/": {
    get: {
      tags: ["Countries"],
      summary: "Get all countries in the system",
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/CountryOkResponse",
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
   "/countries/{id}": {
    get: {
      tags: ["Countries"],
      summary: "Get a specific country by id",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id of the country searched for",
        },
      ],
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/CountryOkResponse",
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
   "/countries/search/{countryName}": {
    get: {
      tags: ["Countries"],
      summary: "Get a specific country by name",
      parameters: [
        {
          name: "name",
          in: "path",
          description: "Name of the country searched for",
        },
      ],
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/CountryOkResponse",
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
   "/countries/": {
    post: {
      tags: ["Countries"],
      summary: "Add a new country",
      parameters: [
        {
          name: "country",
          in: "body",
          description: "Country to be added",
          schema: {
            $ref: "#/definitions/NewCountryBody",
          },
        },
      ],
      responses: {
        201: {
          description: "Created",
          schema: {
            $ref: "#/definitions/CountryOkResponse",
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
   "/countries/{id}": {
    put: {
      tags: ["Countries"],
      summary: "Update a country",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id of the country to be updated",
        },
        {
          name: "country",
          in: "body",
          description: "Country to be updated",
          schema: {
            $ref: "#/definitions/NewCountryBody",
          },
        },
      ],
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/CountryOkResponse",
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
   "/countries/{id}": {
    delete: {
      tags: ["Countries"],
      summary: "Country to be deleted",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id of the country to be deleted",
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
    CityOkResponse: {
      required: ["cityName", "population", "country"],
      properties: {
        _id: {
          type: "string",
          uniqueItems: true,
        },
        cityName: {
          type: "string",
        },
        population: {
          type: "string",
        },
        country: {
          type: "string",
        },
      },
    },

    NewCityBody: {
      required: ["cityName", "population", "country"],
      properties: {        
        cityName: {
          type: "string",
        },
        population: {
          type: "string",
        },
        country: {
          type: "string",
        },
      },
    },

    ContinentOkResponse: {
      required: ["continentName", "countries_amount"],
      properties: {
        _id: {
          type: "string",
          uniqueItems: true,
        },
        continentName: {
          type: "string",
        },
        countries_amount: {
          type: "string",
        },
      },
    },

    NewContinentBody: {
      required: ["continentName", "countries_amount"],
      properties: {
        continentName: {
          type: "string",
        },
        countries_amount: {
          type: "string",
        },
      },
    },

    CountryOkResponse: {
      required: ["countryName", "capital"],
      properties: {
        _id: {
          type: "string",
          uniqueItems: true,
        },
        countryName: {
          type: "string",
        },
        capital: {
          type: "string",
        },
      },
    },

    NewCountryBody: {
      required: ["countryName", "capital"],
      properties: {
       countryName: {
          type: "string",
        },
        capital: {
          type: "string",
        },
      },
    },
    EntryDeleted: {
      properties: {
        Geloescht: {
          type: "string",
        },
      },
    },
    BadRequest: {
      properties: {
        errorMessage: {
          type: "string",
        },
      },
    },
  },

  },
};

export default swaggerDocs;