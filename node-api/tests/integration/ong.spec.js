const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const ongTeste = {
    name: "Teste",
    email: "Teste@gmail.com",
    whatsapp: "6299999999",
    city: "Goiânia",
    uf: "GO"
};

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
        // await connection.seed.run();
    }, 10000);

    afterEach(async () => {
        //executar depois de cada teste  
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('deve ser capaz de criar uma ong', async () => {

        const response = await request(app)
            .post('/ongs')
            .send(ongTeste);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    it('deve ser capaz de listar ongs', async () => {

        //criando uma ong para ser listada
        const responseCreate = await request(app)
            .post('/ongs')
            .send(ongTeste);

        expect(responseCreate.body).toHaveProperty('id');

        // listando todas as ONGs
        const response = await request(app)
            .get('/ongs');

        expect(response.body).toHaveLength(1);
    });
});