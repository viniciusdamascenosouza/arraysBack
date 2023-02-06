const minhasNotas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for(let i = 0; i < minhasNotas.length; i++) {
    somaDasNotas += minhasNotas[i];
}

const minhaMedia = somaDasNotas / minhasNotas.length

console.log(`A média das minhas notas é: ${minhaMedia}`);