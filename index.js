const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("", (req, res) => {
  res.send("წერილი მოგივიდა დებილო !!!");
});

/**
 * @swagger
 * /help:
 *    get:
 *      description: Use to return all customers
 *      responses:
 *         '200':
 *           description: A successful response
 */
app.get("/help", (req, res) => {
  res.send("დაეხმარე ყველას !!!");
});

/**
 * @swagger
 * /*:
 *    get:
 *      description: Not found
 *      responses:
 *         '404':
 *           description: Not found
 */
app.get("*", (req, res) => {
  res.send("404");
});

app.listen(3000, () => {
  console.log("Server started on 3000 port");
});
