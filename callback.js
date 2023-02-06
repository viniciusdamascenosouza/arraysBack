const nomes = ['Gabriele', 'Vinícius', 'Dulce', 'Werique'];

// É POSSÍVEL FAZER COM ARROW FUNCTION. Como abaixo:
nomes.forEach((nome) => {
    console.log(nome)
})



// TAMBÉM É POSSÍVEL FAZER A FUNÇÃO POR FORA, E DEPOIS CHAMAR ESSA FUNÇÃO COMO PARÂMETRO DO MÉTODO forEach. Como abaixo:
function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);

