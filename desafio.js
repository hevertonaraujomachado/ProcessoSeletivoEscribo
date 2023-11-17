
// utilizei a biblioteca readline para adicinar o numero de entrada
const readline = require('readline');

const test = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// nome da função
function SomaDivisao3e5 (numero){
    let soma = 0;

    for (let i = 1; i < numero; i++) {
        // vereficando se o numero é divisivel por 3 ou 5

        if (i % 3 === 0 || i % 5 === 0) {
            // adcionando o número ao somatório

            soma += i;
        }   
            
        }
        return soma;
    }


    test.question("Digite um número inteiro:", function(val) {
        // Constante com o resultado
        const res = SomaDivisao3e5(val)

        console.log(
            "A soma de todos os números múltiplos por 5 e 3 menores que " + val + " é " + res + "."
        )
    
        // Finalisando com ReadLine
        test.close()
    });