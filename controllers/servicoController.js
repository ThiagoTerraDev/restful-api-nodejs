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

    get: async (req, res) => {
        try {
            const id = req.params.id;

            const servico = await ServicoModel.findById(id);            

            res.json(servico);
        } catch (error) {
            if (error.name === "CastError" && error.kind === "ObjectId") {
                res.status(404).json({ msg: "Serviço não encontrado!" });
                return;
            }
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const servicoDeletado = await ServicoModel.findByIdAndDelete(id);

            res.status(200).json({ servicoDeletado, msg: "Serviço excluído com sucesso!" })
        } catch (error) {
            if (error.name === "CastError" && error.kind === "ObjectId") {
                res.status(404).json({ msg: "Serviço não encontrado!" });
                return;
            }
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;

            const servico = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
            };

            const servicoAtualizado = await ServicoModel.findByIdAndUpdate(id, servico);

            res.status(200).json({ servico, msg: "Serviço atualizado com sucesso!" })

        } catch (error) {
            if (error.name === "CastError" && error.kind === "ObjectId") {
                res.status(404).json({ msg: "Serviço não encontrado!" });
                return;
            }
        }
    }
};

module.exports = servicoController;
