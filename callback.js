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


// QUANDO USAR CADA FERRAMENTA (forEach, for of, for):

// forEach() : para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, 
// sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros 
// métodos de array como map, filter e etc;

// for…of : em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário 
// o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);

// for : para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).
