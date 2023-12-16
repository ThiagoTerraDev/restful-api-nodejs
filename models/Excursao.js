const mongoose = require("mongoose");

const { Schema } = mongoose;

const { servicoSchema } = require("./Servico");

const excursaoSchema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
    },
    servicos: {
        type: [servicoSchema],
    },
  }, 
  { timestamps: true }
);

const Excursao = mongoose.model("Excursao", excursaoSchema);

module.exports = Excursao;
