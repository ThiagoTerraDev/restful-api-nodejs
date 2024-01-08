const excursaoModel = require("../models/Excursao");

const checkExcursaoOrcamento = (precoPadrao, orcamento, servicos) => {
    const somaPrecoServicos = servicos.reduce((soma, servico) => soma + servico.preco, 0);
    const precoTotalExcursao = somaPrecoServicos + precoPadrao
    
    if (precoTotalExcursao > orcamento ) {
        return false;
    }

    return true;
}

const excursaoController = {
    create: async (req, res) => {
        try {
            
            const excursao = {
                titulo: req.body.titulo,
                precoPadrao: req.body.precoPadrao,
                descricao: req.body.descricao,
                orcamento: req.body.orcamento,
                imagem: req.body.imagem,
                servicos: req.body.servicos
            }

            if (excursao.precoPadrao > excursao.orcamento || excursao.servicos && !checkExcursaoOrcamento(excursao.precoPadrao, excursao.orcamento, excursao.servicos)) {
                res.status(406).json({ msg: "O seu orçamento é insuficiente." })
                return;
            }

            const excursaoCriada = await excursaoModel.create(excursao);

            res.status(201).json({ excursaoCriada, msg: "Excursão criada com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Ocorreu um erro ao processar a requisição." });
        }
    },

    getAll: async (req, res) => {
        try {
            const excursoes = await excursaoModel.find();

            res.status(200).json(excursoes);
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Ocorreu um erro ao processar a requisição." });
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id;

            const excursao = await excursaoModel.findById(id);

            res.status(200).json(excursao);
        } catch (error) {
            console.log(error);

            if (error.name === "CastError" && error.kind === "ObjectId") {
                res.status(404).json({ msg: "Excursão não encontrada!" });
                return;
            }
            
            res.status(500).json({ msg: "Ocorreu um erro ao processar a requisição." });
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const excursaoDeletada = await excursaoModel.findByIdAndDelete(id);

            res.status(200).json({ excursaoDeletada, msg: "Excursão excluída com sucesso!" });
        } catch (error) {
            console.log(error);

            if (error.name === "CastError" && error.kind === "ObjectId") {
                res.status(404).json({ msg: "Excursão não encontrada!" });
                return;
            }

            res.status(500).json({ msg: "Ocorreu um erro ao processar a requisição." });
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id; 
            
            const excursao = {
                titulo: req.body.titulo,
                precoPadrao: req.body.precoPadrao,
                descricao: req.body.descricao,
                orcamento: req.body.orcamento,
                imagem: req.body.imagem,
                servicos: req.body.servicos
            };

            if (excursao.precoPadrao > excursao.orcamento || excursao.servicos && !checkExcursaoOrcamento(excursao.precoPadrao, excursao.orcamento, excursao.servicos)) {
                res.status(406).json({ msg: "O seu orçamento é insuficiente." })
                return;
            }

            const excursaoAtualizada = await excursaoModel.findByIdAndUpdate(id, excursao);

            res.status(200).json({ excursao, msg: "Excursão atualizada com sucesso!" });            
        } catch (error) {
            console.log(error);

            if (error.name === "CastError" && error.kind === "ObjectId") {
                res.status(404).json({ msg: "Excursão não encontrada!" });
                return;
            }

            res.status(500).json({ msg: "Ocorreu um erro ao processar a requisição." });
        }
    }
};

module.exports = excursaoController;
