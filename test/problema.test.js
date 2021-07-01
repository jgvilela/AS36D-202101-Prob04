const {toBeDeepCloseTo} = require('jest-matcher-deep-close-to');
expect.extend({toBeDeepCloseTo});

const Problema = require('../lib/problema')
const problema = new Problema();

describe('Problema' , () => {
    
    test('deve retornar propostas para quem ganha menos de 1000 reais' , () => {
        const cliente = {
            nome: 'Joao da Silva',
            salario: 600.00,
            idade: 40,
            valorDoEmprestimo: 2000.00
        };
        const propostas = problema.definirPropostas(cliente);
        expect(propostas.length).toBe(2);
        expect(propostas[0]).toBeDeepCloseTo({
            totalASerPago: 4000.00,
            numeroDeParcelas: 2,
            valorDaParcela: 2000.00
        }, 2);
        expect(propostas[1]).toBeDeepCloseTo({
            totalASerPago: 4000.00,
            numeroDeParcelas: 3,
            valorDaParcela: 1333.33
        }, 2);
    });

    test('deve retornar propostas para quem ganha entre 1000 e 5000 reais' , () => {
        const cliente = {
            nome: 'Joao da Silva',
            salario: 2600.00,
            idade: 66,
            valorDoEmprestimo: 1000.00
        };
        const propostas = problema.definirPropostas(cliente);
        expect(propostas.length).toBe(3);
        expect(propostas[0]).toBeDeepCloseTo({
            totalASerPago: 1300.00,
            numeroDeParcelas: 2,
            valorDaParcela: 650.00
        }, 2);
        expect(propostas[1]).toBeDeepCloseTo({
            totalASerPago: 1500.00,
            numeroDeParcelas: 4,
            valorDaParcela: 375.00
        }, 2);
        expect(propostas[2]).toBeDeepCloseTo({
            totalASerPago: 1500.00,
            numeroDeParcelas: 10,
            valorDaParcela: 150.00
        }, 2);
    });
});