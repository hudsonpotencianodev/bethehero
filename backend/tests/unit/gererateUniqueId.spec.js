const generateUniqueId = require('../../src/utils/gererateUniqueId');

describe('Generate Unique ID', () => {
    it('deve conseguir gerar um id unico', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});