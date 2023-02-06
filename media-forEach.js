const minhasNotas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

minhasNotas.forEach(function(nota) {
    somaDasNotas += nota;
});

const media = somaDasNotas / minhasNotas.length;

console.log(`Minha média é: ${media}.`)