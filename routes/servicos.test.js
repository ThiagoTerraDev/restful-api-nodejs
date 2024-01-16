const { MongoClient } = require('mongodb');

const dotenv = require("dotenv");

dotenv.config({ path: ".env.development.local" });

describe('Cadastrar novo serviço no banco de dados', () => {
    let connection;
    let db;

    const MONGO_URI = process.env.JOURNEYLOCALDATABASE;
    const MONGO_DB_NAME = 'test';

    beforeAll(async () => {
        connection = await MongoClient.connect(MONGO_URI);
        db = await connection.db(MONGO_DB_NAME);
    });

    it('should create a service into collection', async () => {
        const servicos = db.collection('servicos');
        
        const mockServico = {
            nome: "Serviço Teste 3",
            descricao: "Descrição do Serviço Teste 3",
            preco: 399
        };
        await servicos.insertOne(mockServico);
        
        const insertedService = await servicos.findOne({ nome: "Serviço Teste 3" });
        expect(insertedService).toEqual(mockServico);
    });

    afterAll(async () => {
        await connection.close();
    });
});
