// VARIÁVEIS

// 1
// let number1 = 10;
// let number2 = 9;
// let resultado = number1 + number2;
// console.log("A soma é", resultado);

// let saudacao = "Olá!";
// console.log(saudacao);

// let booleano = false;
// console.log("A Rafa odeia do Jimin?", booleano);

// let pi = 3.1415;
// console.log("Valor de pi", pi);

// 2
// let nome = prompt("Qual é o seu nome?");
// let idade = prompt("Qual é a sua idade?");
// let bairro = prompt("Qual é o seu bairro?");

// console.log(nome.toUpperCase());
// console.log(idade);
// console.log(bairro);

// let numero1 = prompt("Coloque um número inteiro.");
// let numero2 = prompt("Coloque outro numero inteiro");
// let soma = Number(numero1) + Number(numero2);
// console.log(soma);

// 3
// let nome = "Rafaela da Silva Huther"
// let nomeAtualizado = nome.replace("Silva Huther", "Huther Silva");

// console.log(nomeAtualizado);

// 4 Revisado
// let preco = 200;
// let desconto = 0.2;
// let precoFinal = preco - preco * desconto;
// console.log(precoFinal);

// IF | ELSE IF

// 1
// let idade = prompt("Qual a sua idade?");

// if (idade < 18) {
//     alert("Você é menor de idade.");
// } else if (idade >= 18 && idade < 60) {
//     alert("Você é adulto.");
// } else {
//     alert("Você é idoso.");
// }

// 2
// let idade = prompt("Qual a sua idade?");
// if (idade >= 18) {
//     alert("Você pode dirigir.");
// } else {
//     alert("Você AINDA não pode dirigir.");
// }

// 3
// let numero = prompt("Digite um número inteiro.");
// if (numero > 0) {
//     console.log("O número é positivo.");
// } else if (numero < 0) {
//     console.log("O número é negativo.");
// } else {
//     console.log("O número é zero.");
// }

// 4
// let altura = prompt("Digite sua altura em metros.");
// let peso = prompt("Digite seu peso em kg");
// let imc = peso / (altura * 2);

// if (imc >= 18.5 && imc <= 24.9) {
//     alert("O IMC está no intervalo saudável.");
// } else {
//     alert("O IMC não está no intervalo saudável.");
// }

// SWITCH CASE

// 5.
// let numero = Number(prompt("Digite um número correspondente ao dia da semana."));

// switch (numero) {
//     case 1:
//         alert("O dia da semana é domingo.");
//         break;
//     case 2:
//         alert("O dia da semana é segunda.");
//         break;
//     case 3:
//         alert("O dia da semana é terça.");
//         break;
//     case 4:
//         alert("O dia da semana é quarta.");
//         break;
//     case 5:
//         alert("O dia da semana é quinta.");
//         break;
//     case 6:
//         alert("O dia da semana é sexta.");
//         break;
//     case 7:
//         alert("O dia da semana é sábado.");
//         break;
//     default:
//         alert("O dia da semana não existe.");
// }

// 6.

// let idade = Number(prompt("Digite sua idade."));
// if (idade <= 10) {
//     alert("Você é criança.");
// } else if (idade <= 17) {
//     alert("Você é adolescente.");
// } else if (idade < 60) {
//     alert("Você é adulto.");
// } else {
//     alert("Você é idoso.");
// }

//7
// let numero1 = Number(prompt("Digite o primeiro número."));
// let numero2 = Number(prompt("Digite o segundo número."));
// let operacao = prompt(
//     "Escolha uma operação. (Soma = 1, Subtração = 2, Multiplicação = 3 e Divisão = 4)"
// );

// switch (Number(operacao)) {
//     case 1: // Soma
//         alert(numero1 + numero2);
//         break;
//     case 2: // Subtração
//         alert(numero1 - numero2);
//         break;
//     case 3: // Multiplicação
//         alert(numero1 * numero2);
//         break;
//     case 4: // Divisão
//         alert(numero1 / numero2);
//         break;
//     default:
//         alert("Operação inválida.");
// }

//8

// let preco = 200;
// let cupom = prompt("Informe um código promocional.");
// let desconto;

// switch (cupom.toUpperCase()) {
//     case "DESC1":
//         desconto = 0.05;
//         break;
//     case "DESC2":
//         desconto = 0.1;
//         break;
//     case "DESC3":
//         desconto = 0.15;
//         break;
//     case "DESC4":
//         desconto = 0.2;
//         break;
//     case "DESC5":
//         desconto = 0.25;
//         break;
//     default:
//         desconto = 0;
//         alert("Cupom promocional inválido");
// }

// let precoFinal = preco - preco * desconto;

// alert(`${desconto * 100}% de desconto`);
// alert(`Preço original: R$${preco}`);
// alert(`Preço final: R$${precoFinal}`);
