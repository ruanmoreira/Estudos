// Meu primeiro arquivo JavaScript
console.log("Olá, mundo! JavaScript está funcionando! 🎉");

// Vamos aprender sobre variáveis
let nome = "Ruan Moreira";
const idade = 24;
var cidade = "Santo Andre"; // var é mais antigo, vamos usar let/const

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Cidade:", cidade);



// # Duvidas 
// Q: Quais as diferenças entre let, const e var?
// A: 
//    - var: mais antigo, escopo de função, pode ser redeclarado
//    - let: moderno, escopo de bloco, pode ser reatribuído mas não redeclarado
//    - const: moderno, escopo de bloco, não pode ser reatribuído nem redeclarado

// Q: Por que var é menos seguro?
// A: var tem escopo de função (não de bloco), pode ser redeclarado, e sofre hoisting

// Q: O que é escopo de bloco? Me dê exemplos:
// A: Escopo de bloco significa que a variável só existe dentro do bloco onde foi declarada

// Exemplo 1: var vaza para fora do bloco (escopo de função)
if (true) {
    var exemploVar = "Estou vazando!";
}
console.log("Var fora do bloco:", exemploVar); // Funciona! var vaza

// Exemplo 2: let/const ficam confinados ao bloco
if (true) {
    let exemploLet = "Fico no bloco";
    const exemploConst = "Eu também!";
    console.log("Dentro do bloco:", exemploLet, exemploConst);
}
// console.log(exemploLet); // Erro! exemploLet não existe aqui
// console.log(exemploConst); // Erro! exemploConst não existe aqui

// Exemplo 3: Redeclaração
var podeRedeclarar = "primeiro";
var podeRedeclarar = "segundo"; // var permite redeclaração

let naoPodeRedeclarar = "primeiro";
// let naoPodeRedeclarar = "segundo"; // Erro! let não permite redeclaração

// Exemplo 4: Reatribuição
let podeReatribuir = "valor inicial";
podeReatribuir = "novo valor"; // let permite reatribuição

const naoPodeReatribuir = "valor fixo";
// naoPodeReatribuir = "tentativa de mudança"; // Erro! const não permite reatribuição 

// Q: O que é hoisting?
// A: Hoisting é quando o JavaScript "levanta" (move para o topo) as declarações de variáveis e funções
//    durante a fase de compilação, antes da execução do código. É como se as declarações fossem
//    movidas para o início do escopo.

// Exemplo 1: Hoisting com var
console.log("Antes da declaração:", minhaVar); // undefined (não dá erro!)
var minhaVar = "Olá!";
console.log("Depois da declaração:", minhaVar); // "Olá!"

// O que acontece internamente (hoisting):
// var minhaVar; // declaração é "levantada" para o topo
// console.log("Antes da declaração:", minhaVar); // undefined
// minhaVar = "Olá!"; // atribuição permanece no lugar
// console.log("Depois da declaração:", minhaVar); // "Olá!"

// Exemplo 2: Hoisting com let/const (Temporal Dead Zone)
// console.log("Antes da declaração:", minhaLet); // Erro! Cannot access before initialization
let minhaLet = "Teste";
console.log("Depois da declaração:", minhaLet); // "Teste"

// Exemplo 3: Hoisting de funções
digaOla(); // Funciona! A função é "levantada"

function digaOla() {
    console.log("Olá! Esta função foi hoisted!");
}

// Exemplo 4: Hoisting de function expression (não funciona)
// digaTchau(); // Erro! Cannot access before initialization

const digaTchau = function() {
    console.log("Tchau! Esta função NÃO foi hoisted!");
};

digaTchau(); // Agora funciona

// Exemplo 5: Problema comum com hoisting (bug!)
var nomeGlobal = "João"; 
function mostrarNome() {
    console.log("Nome dentro da função:", nomeGlobal); // undefined! (não "João")
//    let nomeGlobal = "Maria"; // Esta declaração é "levantada" para o topo da função, fazendo com que fique undefined
}
mostrarNome(); // Mostra "undefined" em vez de "João"

// O que acontece internamente:
// function mostrarNome() {
//     var nomeGlobal; // declaração é "levantada" para o topo da função
//     console.log("Nome dentro da função:", nomeGlobal); // undefined
//     nomeGlobal = "Maria"; // atribuição permanece aqui
// }

// Por isso é melhor usar let/const - eles não sofrem desse problema!


// =============================
// TEMPLATE LITERALS (ES6)
// =============================
// O que é: Sintaxe de string com crases (`) que permite interpolação `${expr}` e multilinhas.
// Por que usar: Deixa mensagens dinâmicas mais legíveis do que concatenação com + e suporta multilinhas.

const tlNome = "Ruan";
const tlIdade = 24;
const tlCidade = "Santo André";

// Antes (concatenação):
const mensagemConcat = "Meu nome é " + tlNome + ", tenho " + tlIdade + " anos e moro em " + tlCidade;

// Agora (template literal):
const mensagemTemplate = `Meu nome é ${tlNome}, tenho ${tlIdade} anos e moro em ${tlCidade}`;

console.log("TL - concat:", mensagemConcat);
console.log("TL - template:", mensagemTemplate);

// Multilinhas e expressões inline
const bloco = `Linha A
Multilinha real
Soma: ${2 + 2}`;
console.log("TL - multilinhas:", bloco);

// Função dentro do template
const pluralizarAno = (anos) => `${anos} ano${anos === 1 ? "" : "s"}`;
console.log(`TL - função inline: tenho ${pluralizarAno(tlIdade)}`);

