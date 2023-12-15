const { Servico: ServicoModel } = require("../models/Servico");

const servicoController = {
    create: async (req, res) => {
        try {
            const servico = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
            };

            const response = await ServicoModel.create(servico);

            res.status(201).json({ response, msg: "Serviço criado com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },

    getAll: async (req, res) => {
        try {
            const servicos = await ServicoModel.find();

            res.json(servicos);
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = servicoController;
