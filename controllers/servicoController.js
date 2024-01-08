const { Servico: ServicoModel } = require("../models/Servico");

const servicoController = {
    create: async (req, res) => {
        try {
            const servico = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
            };

            const servicoCriado = await ServicoModel.create(servico);

            res.status(201).json({ servicoCriado, msg: "Serviço criado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Ocorreu um erro ao processar a requisição." });
        }
    },

    getAll: async (req, res) => {
        try {
            const servicos = await ServicoModel.find();

            res.status(200).json(servicos);
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Ocorreu um erro ao processar a requisição." });
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id;

            const servico = await ServicoModel.findById(id);            

            res.status(200).json(servico);
        } catch (error) {
            console.log(error);

            if (error.name === "CastError" && error.kind === "ObjectId") {
                res.status(404).json({ msg: "Serviço não encontrado!" });
                return;
            }

            res.status(500).json({ msg: "Ocorreu um erro ao processar a requisição." });
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const servicoDeletado = await ServicoModel.findByIdAndDelete(id);

            res.status(200).json({ servicoDeletado, msg: "Serviço excluído com sucesso!" });
        } catch (error) {
            console.log(error);

            if (error.name === "CastError" && error.kind === "ObjectId") {
                res.status(404).json({ msg: "Serviço não encontrado!" });
                return;
            }

            res.status(500).json({ msg: "Ocorreu um erro ao processar a requisição." });
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

            res.status(200).json({ servico, msg: "Serviço atualizado com sucesso!" });
        } catch (error) {
            console.log(error);

            if (error.name === "CastError" && error.kind === "ObjectId") {
                res.status(404).json({ msg: "Serviço não encontrado!" });
                return;
            }

            res.status(500).json({ msg: "Ocorreu um erro ao processar a requisição." });
        }
    }
};

module.exports = servicoController;
