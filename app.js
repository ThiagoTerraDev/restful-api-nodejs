const express = require("express");
const cors = require("cors");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "South Journey API",
            version: "1.0.0",
            description: "API para gerenciamento de custos das excursões oferecidas pela South Journey."
        },
        servers: [
            {
                url: "http://localhost:3000/"
            }
        ]
    },
    apis: [
        "./routes/excursoes.js",
        "./routes/servicos.js"
    ]
}

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(cors());

app.use(express.json());

// DB Connection
const conn = require("./db/conn");

conn();

// Routes
const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3000, function() {
    console.log("Servidor funcionando!");
});
