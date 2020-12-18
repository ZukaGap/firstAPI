const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Users registration & task maker API.",
      description: "Make User & Tasks",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:3000"],
    },
  },
  apis: ["swagger.yaml"],
};

const app = express();
const port = process.env.PORT;
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

app.use(userRouter);

app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
