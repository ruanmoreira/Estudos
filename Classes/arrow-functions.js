// CLASSE: Arrow Functions (ES6)
// =============================
// O que é: Sintaxe concisa para funções usando =>
// Por que usar: Código mais curto, this léxico, ideal para callbacks e funções pequenas
// Diferenças para function clássica:
//  - this léxico (não muda conforme chamador)
//  - não tem prototype e não pode ser usada com new
//  - não possui 'arguments' (use rest ...args)
//  - retorno implícito quando corpo é expressão

// Exemplos básicos
const somar = (a, b) => a + b; // retorno implícito
const multiplicar = (a, b) => {
  const resultado = a * b; // corpo em bloco precisa de return
  return resultado;
};
console.log("AF) soma=", somar(5, 3), ", mult=", multiplicar(4, 6));

// Retornando objeto literal
const criarUsuario = (nome, idade) => ({ nome, idade });
console.log("AF) objeto:", criarUsuario("Ana", 30));

// this léxico (útil em callbacks)
const contador = {
  valor: 0,
  iniciar() {
    setTimeout(() => {
      this.valor += 1; // arrow mantém o this do objeto que chamou iniciar
      console.log("AF) this léxico:", this.valor);
    }, 0);
  }
};
contador.iniciar();

// Cuidado: arrow como método pode não ter o this esperado
const obj = {
  x: 42,
  pegarX: () => this?.x // não aponta para obj
};
console.log("AF) método arrow (não recomendado):", obj.pegarX());

// Sem 'arguments': use rest
const somaVariavel = (...numeros) => numeros.reduce((acc, n) => acc + n, 0);
console.log("AF) rest params:", somaVariavel(1, 2, 3, 4));
