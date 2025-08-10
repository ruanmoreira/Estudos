// CLASSE: JavaScript Moderno (ES6+)
// ==================================
// Exemplos executáveis para consulta. Use este arquivo para estudar e tirar dúvidas.

// 1. TEMPLATE LITERALS
// --------------------
const nome = "Ruan";
const idade = 24;
const profissao = "Dev Genexus";
const cidade = "Santo André";
const mensagem = `Meu nome é ${nome}, tenho ${idade} anos, sou ${profissao} e moro em ${cidade}`;
console.log("1) Template Literal:", mensagem);

// 2. ARROW FUNCTIONS
// -------------------
const somar = (a, b) => a + b;
const multiplicar = (a, b) => {
  const resultado = a * b;
  return resultado;
};
console.log("2) Arrow Functions: soma=", somar(5, 3), ", mult=", multiplicar(4, 6));

// 3. DESTRUCTURING
// -----------------
const pessoa = {
  nome: "Ruan",
  idade: 24,
  cidade: "Santo André",
  hobbies: ["programar", "estudar", "treinar"]
};
const { nome: nomePessoa, idade: idadePessoa, cidade: cidadePessoa, hobbies } = pessoa;
console.log("3) Destructuring:", { nomePessoa, idadePessoa, cidadePessoa, hobbies });

// 4. SPREAD OPERATOR
// -------------------
const numeros = [1, 2, 3];
const maisNumeros = [...numeros, 4, 5, 6];
console.log("4) Spread Operator:", maisNumeros);

// 5. REST PARAMETERS
// -------------------
const somarTodos = (...nums) => nums.reduce((total, n) => total + n, 0);
console.log("5) Rest Parameters:", somarTodos(1, 2, 3), somarTodos(1, 2, 3, 4, 5));

// 6. DESAFIO EXEMPLO: formatarProduto
// ------------------------------------
const formatarProduto = (produto) => {
  const { nome, preco, marca, disponivel } = produto;
  const disponibilidade = disponivel ? "sim" : "não";
  return `Produto: ${nome} - Marca: ${marca} - Preço: R$ ${preco} - Disponível: ${disponibilidade}`;
};
console.log(
  "6) Desafio (exemplo):",
  formatarProduto({ nome: "Notebook", preco: 2500, marca: "Dell", disponivel: true })
);
