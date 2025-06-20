import swaggerJSDoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notes Manager BE",
      version: "1.0.0",
      description: "OpenAPI Documentation",
    },
    servers: [
      {
        url: "https://notes-manager-be.onrender.com/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerui, swaggerSpec };
