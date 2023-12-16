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
};

module.exports = excursaoController;
