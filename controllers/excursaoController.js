const excursaoModel = require("../models/Excursao");

const checkExcursaoBudget = (budget, servicos) => {
    const priceSum = servicos.reduce((sum, servico) => sum + servico.preco, 0);
    
    if (priceSum > budget ) {
        return false;
    }

    return true;
}

const excursaoController = {
    create: async (req, res) => {
        try {
            
            const excursao = {
                titulo: req.body.titulo,
                preco: req.body.preco,
                budget: req.body.budget,
                imagem: req.body.imagem,
                servicos: req.body.servicos
            }

            if (excursao.servicos && !checkExcursaoBudget(excursao.budget, excursao.servicos)) {
                res.status(406).json({ msg: "O seu orçamento é insuficiente." })
                return;
            }

            const resposta = await excursaoModel.create(excursao);

            res.status(201).json({ resposta, msg: "Excursão definida com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },

    getAll: async (req, res) => {
        try {
            const excursoes = await excursaoModel.find();

            res.json(excursoes);
        } catch (error) {
            console.log(error);
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id;

            const excursao = await excursaoModel.findById(id);

            res.json(excursao);
        } catch (error) {
            if (error.name === "CastError" && error.kind === "ObjectId") {
                res.status(404).json({ msg: "Excursão não encontrada!" });
                return;
            }
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const excursaoDeletada = await excursaoModel.findByIdAndDelete(id);

            res.status(200).json({ excursaoDeletada, msg: "Excursão excluída com sucesso!" });
        } catch (error) {
            if (error.name === "CastError" && error.kind === "ObjectId") {
                res.status(404).json({ msg: "Excursão não encontrada!" });
                return;
            }
        }
    }
};

module.exports = excursaoController;
