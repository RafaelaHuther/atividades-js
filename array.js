// 1
// let numeros = [1, 2, 3, 4, 5];
// numeros.pop()
// console.log(numeros);

//2
// let filmes = ["barbie", "aot", "moana"];
// filmes.unshift("shingeki");
// console.log(filmes);

//3
// function calcularMedia(nota1, nota2, nota3) {
//     let media = (nota1 + nota2 + nota3) / 3;

//     if (media < 7) {
//         console.log(`Reprovado com média ${media}`);
//     } else {
//         console.log(`Aprovado com média ${media}`);
//     }
// }

// calcularMedia(7, 8, 9);
// calcularMedia(10, 3, 9);
// calcularMedia(2, 6, 9);
// calcularMedia(3, 7, 9);
// calcularMedia(4, 1, 9);

// 4
// function verificarMaioridade(idade) {
//     if (idade <= 17) {
//         return "Menor de idade";
//     } else {
//         return "Maior de idade";
//     }
// }

// console.log(verificarMaioridade(15));

//5
// function converterEmMinutos(horas) {
//   return horas*60
// }
// console.log(
//     converterEmMinutos(2)
// );

//6
// let livro = {
//     titulo:'Cogumelo',
//     autor: "Eu",
//     paginas: 102
// }
// console.log(`O livro ${livro.titulo} do autor ${livro.autor} possui ${livro.paginas} páginas.`);

//7
// let carro = {
//     modelo:"gol",
//     ano: 2014,
//     ligado: false
// }
// carro.ligado = true
// console.log(carro);

//8
// let frutas = ["maçã", "laranja", "melancia", "uva"];

// for (let indice = 0; indice < frutas.length; indice++) {
//     console.log(`Eu gosto de ${frutas[indice]}`);
// }

//9
// function checarMaiorNumero(numeros) {
//     let maiorNumero;

//     for (let i = 0; i < numeros.length; i++) {
//         let numeroAtual = numeros[i];

//         if (maiorNumero === undefined || maiorNumero < numeroAtual) {
//             maiorNumero = numeroAtual;
//         }
//     }

//     return maiorNumero;
// }

// console.log(checarMaiorNumero([1, 2, 6, 8, 5]));

// Bônus
// let aluno1 = { nome: "Rafaela", nota1: 8, nota2: 10 };
// let aluno2 = { nome: "Ana", nota1: 6, nota2: 9 };
// let aluno3 = { nome: "Davi", nota1: 10, nota2: 5 };

// let turma = [aluno1, aluno2, aluno3];

// for (let i = 0; i < turma.length; i++) {
//   let aluno = turma[i];
//   let media = (aluno.nota1 + aluno.nota2) / 2;
//   console.log(`Aluno: ${aluno.nome} - Média: ${media}`);
// }
