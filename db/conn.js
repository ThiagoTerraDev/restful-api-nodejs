require('dotenv').config();

const mongoose = require("mongoose");

async function main() {

    try {
        const connectionString = process.env.JOURNEYDATABASE

        await mongoose.connect(connectionString);

        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }    

}

module.exports = main;
