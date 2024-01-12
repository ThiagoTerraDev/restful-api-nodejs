const dotenv = require("dotenv");

dotenv.config({ path: ".env.development.local" });
dotenv.config();

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
                url: process.env.NODE_ENV === "production"
                    ? "https://restful-api-nodejs.vercel.app/"
                    : "http://localhost:3000/"
            }
        ]
    },
    apis: [
        "./routes/excursoes.js",
        "./routes/servicos.js"
    ]
}

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.use(cors());

app.use(express.json());

// DB Connection
const conn = require("./db/conn");

conn();

// Routes
const routes = require("./routes/router");

app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`Servidor funcionando na porta ${PORT}!`);
});
