const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

// Array abaixo:

// cada valor de um array pode ser chamado de: Elementos, itens ou valores


//indices(index em ingles) ou posições começa do 0 no javascript
// indices =   0    1   2   3
const notas = [10, 6.5, 8, 7.5]

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media)


//Para imprimir somente um item usamos seu índice dentro de colchetes para o "encontrar"
console.log(notas[3])


// obs: Um array aceita diferentes tipos de dados, por exemplo: um number, uma string, um boolean. Tudo em um mesmo array.