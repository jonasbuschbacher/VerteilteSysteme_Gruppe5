const swaggerDocs = {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "REST API City Service",
      description: "API for cities",
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
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "/": {
        get: {
          tags: ["Cities"],
          summary: "Get all Cities in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/City",
              },
            },
          },
        },
      },
      "/{id}": {
        get: {
          tags: ["Cities"],
          summary: "Get a specific city by id",
          parameters: [
            {
              name: "id",
              in: "body",
              description: "Id of the city searched for",
              schema: {
                $ref: "#/definitions/City",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/City",
              },
            },
          },
        },
      },
      "/search": {
        get: {
          tags: ["Cities"],
          summary: "Get a specific city by name",
          parameters: [
            {
              name: "name",
              in: "path",
              description: "Name of the city searched for",
              schema: {
                $ref: "#/definitions/City",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/City",
              },
            },
          },
        },
      },
      "/add": {
        post: {
          tags: ["Cities"],
          summary: "Add a new city",
          parameters: [
            {
              name: "city",
              in: "body",
              description: "City to be added",
              schema: {
                $ref: "#/definitions/City",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/City",
              },
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