function calcularMedia(valores) {
  let soma = calcularSoma(valores); // Extração de método: movemos o cálculo da soma para uma função separada calcularSoma para reutilização em calcularMedia e calcularDesvioPadrao.
  let media = soma / valores.length;
  return media.toFixed(2);
}

function calcularSoma(valores) {
  let soma = 0;
  for (let i = 0; i < valores.length; i++) {
    soma += valores[i];
  }
  return soma;
}

function calcularDesvioPadrao(valores) {
  let media = calcularMedia(valores);
  let somaDiferencasQuadradas = 0;
  for (let i = 0; i < valores.length; i++) {
    let diferenca = valores[i] - media; // Divisão de variável temporária: Dividimos a variável diferencaQuadrada em duas partes, diferenca, para tornar o cálculo mais claro.
    somaDiferencasQuadradas += diferenca * diferenca;
  }
  let desvioPadrao = Math.sqrt(somaDiferencasQuadradas / valores.length);
  return desvioPadrao.toFixed(2);
}

let valores = [12, 15, 18, 20, 22];
console.log("Média: " + calcularMedia(valores));
console.log("Desvio Padrão: " + calcularDesvioPadrao(valores));

/*
Extração de método: O cálculo da soma foi movido para uma função separada calcularSoma para reutilização em calcularMedia e calcularDesvioPadrao, melhorando a legibilidade e evitando a repetição de código.

Divisão de variável temporária: A variável diferencaQuadrada foi dividida em duas partes, diferenca, para tornar o cálculo mais claro e compreensível, facilitando a manutenção e o entendimento do código.

Extração de variável: Embora não tenha sido aplicada explicitamente neste exemplo, a função calcularSoma pode ser considerada uma forma de extração de variável, pois armazena o resultado da soma em uma variável antes de retorná-la, melhorando a legibilidade e a reutilização de código.
*/
