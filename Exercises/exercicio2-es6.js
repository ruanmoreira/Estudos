// EXERCÍCIO 2: JavaScript Moderno (ES6+)
// ======================================

// 1. TEMPLATE LITERALS (Template Strings)
// =======================================
const nome = "Ruan";
const idade = 24;
const profissao = "Dev Genexus";

// Antes (concatenação tradicional):
// const mensagem = "Meu nome é " + nome + " e tenho " + idade + " anos";

// Agora (template literal):
const mensagem = `Meu nome é ${nome} e tenho ${idade} anos`;
console.log("1. Template Literal:", mensagem);

// 2. ARROW FUNCTIONS
// ==================
// Antes:
// function somar(a, b) {
//     return a + b;
// }

// Agora:
const somar = (a, b) => a + b;
const multiplicar = (a, b) => {
    const resultado = a * b;
    return resultado;
};

console.log("2. Arrow Functions:");
console.log("Soma:", somar(5, 3));
console.log("Multiplicação:", multiplicar(4, 6));

// 3. DESTRUCTURING
// ================
const pessoa = {
    nome: "Ruan",
    idade: 24,
    cidade: "Santo André",
    hobbies: ["programar", "estudar", "música"]
};

// Antes:
// const nomePessoa = pessoa.nome;
// const idadePessoa = pessoa.idade;

// Agora:
const { nome: nomePessoa, idade: idadePessoa, cidade, hobbies } = pessoa;
console.log("3. Destructuring:", { nomePessoa, idadePessoa, cidade, hobbies });

// 4. SPREAD OPERATOR
// ==================
const numeros = [1, 2, 3];
const maisNumeros = [...numeros, 4, 5, 6];
console.log("4. Spread Operator:", maisNumeros);

// 5. REST PARAMETERS
// ==================
const somarTodos = (...numeros) => {
    return numeros.reduce((total, num) => total + num, 0);
};

console.log("5. Rest Parameters:");
console.log("Soma de 1,2,3:", somarTodos(1, 2, 3));
console.log("Soma de 1,2,3,4,5:", somarTodos(1, 2, 3, 4, 5));

// EXERCÍCIO PARA VOCÊ:
// ====================
// Crie uma função que recebe um objeto com informações de um produto
// e retorna uma string formatada usando template literals

const produto = {
    nome: "Notebook",
    preco: 2500,
    marca: "Dell",
    disponivel: true
};

// Sua função aqui:
// const formatarProduto = (produto) => {
//     // Use destructuring e template literals
//     // Retorne: "Produto: [nome] - Marca: [marca] - Preço: R$ [preco] - Disponível: [sim/não]"
// };

// console.log(formatarProduto(produto));

// Execute com: node exercicio2-es6.js
