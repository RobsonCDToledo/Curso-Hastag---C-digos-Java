// escrevendo seu primeiro código aula 1

// Este primeiro código simples, mostra como funciona a instrução console.log()
// apos executar o código utilizando no terminal o comando node .\primeir_programa.js
// o programa roda e retorna a mensagem Olá Mundo!!

console.log("Executando Aula1");
console.log("Olá Mundo!!");
// código abaixo mostra que assim como o python o javascript entende as Strings (os Textos) mesmo estando entre aspas duplas "" ou aspas simples ''
console.log("Eu acabei de escrever meu primeiro código javascript");

// AULA 2
// Variaveis e Constantes

// Exemplo de mensagem simples
console.log("Executando Aula 2");
console.log("exemplo 1:");
console.log("Olá meu nome é Robson Carlos, sou analista de dados!!");

// Exemplo de mensagem dentro de variavel

// mensagemTema simboliza a variavel que será armazenada a string que deseja exibir no caso a nossa mensagem
// const é o tipó da declaração que estou realizando
const mensagemTela = "Olá meu nome é Robson Carlos, sou analista de dados!!";
// executando o console utilizando agora a constante que armazenou a variavel mensagemTela
console.log("exemplo.2");
console.log(mensagemTela);

//utilizando exemplos de Let e Const

let mensagemTela2 = "Eu gosto muito de leitura";
console.log("Exemplo 1: utilizando Let");
console.log(mensagemTela2);

mensagemTela2 = "Alem de ler gosto tambem de jogar video-game";

console.log("Exemplo 2: alterando valor da variavel apos a let");
console.log(mensagemTela2);

// Como o script de java script é lido de cima para baixo, quando declaramos a Let ele retorna a primeira mensagem, e como alteramos o valor da variavel
// e chamamos ela novamente, ele retorna o novo valor desta variavel.
// exemplo se eu chamo uma variavel x = 1 e depois declaro mais abaixo no código que x =  1 + 2 , na proxima vez que x for chamado ele retornará o valor 3 vamos ver?

console.log("Exemplo de variaveis sendo alteradas");
console.log('Vamos Dizer que o valor de "X" é 1');
console.log('Chamando nosso primeiro "X"');
let x = 1;
console.log(x);
console.log(
  "________________________________________________________________________________________________________________________________"
);
console.log('Agora vamos dizer que o valor de "X" é 1 + 2');
console.log('Chamando nosso "X" com a soma de 1 + 2');
console.log('chamar novamente o "X');
x = 1 + 2;
console.log(x);
