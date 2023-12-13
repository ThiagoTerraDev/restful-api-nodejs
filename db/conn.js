const mongoose = require("mongoose");

async function main() {

    try {
        await mongoose.connect("mongodb+srv://thiagoterradev:vhcVj3uIwQLUCVOe@cluster0.olaawmw.mongodb.net/?retryWrites=true&w=majority");

        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }    

}

module.exports = main;