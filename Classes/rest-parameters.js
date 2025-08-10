// CLASSE: Rest Parameters (ES6)
// ============================
// O que é: Sintaxe para agregar N argumentos em um array (em funções) ou coletar o resto em destructuring.
// Por que usar: Funções variádicas sem 'arguments'; mais legível e tipável.

// Em funções
const somarTodos = (...nums) => nums.reduce((total, n) => total + n, 0);
console.log("REST) somas:", somarTodos(1, 2, 3), somarTodos(1, 2, 3, 4, 5));

// Em objetos (rest em destructuring)
const config = { modo: "prod", cache: false, nivel: 2 };
const { nivel, ...semNivel } = config;
console.log("REST) objeto:", { nivel, semNivel });

// Em arrays (rest em destructuring)
const [primeiro, ...resto] = [100, 200, 300, 400];
console.log("REST) array:", { primeiro, resto });
