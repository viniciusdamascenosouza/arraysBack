const minhasNotas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for(let nota of minhasNotas) {
    somaDasNotas += nota
}

const minhaMedia = somaDasNotas / minhasNotas.length

console.log(`Minha média é: ${minhaMedia}.`)