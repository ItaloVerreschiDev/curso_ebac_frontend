"use strict";
// Função de multiplicação
function multiplicar(num1, num2) {
    const resultado = num1 * num2;
    console.log(`Multiplicação de ${num1} e ${num2}: ${resultado}`);
    return resultado;
}
// Função de saudação
function saudacao(nome) {
    const mensagem = "Olá " + nome;
    console.log(mensagem);
    return mensagem;
}
// Testando as funções
multiplicar(5, 3); // Exemplo de uso da função de multiplicação
saudacao("João"); // Exemplo de uso da função de saudação
