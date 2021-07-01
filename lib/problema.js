class Problema {

    definirPropostas(cliente) {
        if (cliente.salario <= 1000.00)
            return [
                this.criarProposta(cliente.valorDoEmprestimo, 2, 2),
                this.criarProposta(cliente.valorDoEmprestimo, 2, 3)
            ];
        
        if  (cliente.salario > 1000.00 && cliente.salario <= 5000.00)
            return [
                this.criarProposta(cliente.valorDoEmprestimo, 1.3, 2),
                this.criarProposta(cliente.valorDoEmprestimo, 1.5, 4),
                this.criarProposta(cliente.valorDoEmprestimo, 1.5, 10)
            ];
    }

    criarProposta(valorDoEmprestimo, fator, numeroDeParcelas) {
        return {
            totalASerPago: fator * valorDoEmprestimo,
            numeroDeParcelas: numeroDeParcelas,
            valorDaParcela: (fator * valorDoEmprestimo) / numeroDeParcelas
        };
    }
}

module.exports = Problema;