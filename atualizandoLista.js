const alunos = [
  "João",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Leo",
];

//através dos indices mostramos 1° a posição que queremos remover 
//2° quantos elementos a partir desta posição 3° algum elemento que queremos substituir
//  Neste caso removi o elemento de indice 1, até o indice dois, e os troquei por "Vinícius"
alunos.splice(1,2, "Vinícius");


console.log(alunos);