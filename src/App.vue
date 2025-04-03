<script setup>
import { reactive } from 'vue';

const estado = reactive({
  num1: '',
  num2: '',
  simbolos: ['+', '-', '/', '*'],
  operacao: '',
});

function resultado() {
  const n1 = parseFloat(estado.num1);
  const n2 = parseFloat(estado.num2);

  switch (estado.operacao) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return n2 !== 0 ? n1 / n2 : 'Erro: Divisão por zero';
    default:
      return ''; 
  }
}

function escolherOperacao(evento) {
  estado.operacao = evento.target.value;
}
</script>

<template>
  <br />
  <hr />

  Escolha a operação:<br />
  <select v-model="estado.operacao" @change="escolherOperacao">
    <option v-for="nome in estado.simbolos" :key="nome" :value="nome">{{ nome }}</option>
  </select><br />

  {{ estado.num1 }}<br />
  <input @input="evento => estado.num1 = evento.target.value" type="number" placeholder="1º Número"><br />

  {{ estado.num2 }}<br />
  <input @input="evento => estado.num2 = evento.target.value" type="number" placeholder="2º Número"><br /><br />

  resultado: {{ resultado() }}<br />
</template>

<style scoped>
</style>
