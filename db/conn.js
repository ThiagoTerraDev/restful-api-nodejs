const mongoose = require("mongoose");

async function main() {

    try { 
        let connectionString;

        if (process.env.NODE_ENV === "development") {
            connectionString = process.env.JOURNEYLOCALDATABASE;
        } else if (process.env.NODE_ENV === "production") {
            connectionString = process.env.JOURNEYDATABASE
        } else {
            console.error("NODE_ENV não definido corretamente.")
            process.exit(1);
        }

        await mongoose.connect(connectionString);

        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }    

}

module.exports = main;
