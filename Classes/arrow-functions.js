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
//Q: Eu poderia definir como somar(a,b) => a + b? 
//R: Não. Arrow é expressão (não declaração). Use: const somar = (a,b) => a + b; ou dentro de um objeto/classe.
// Explicação simples: arrow é um "jeito curto" de escrever função; ela sempre fica ligada a uma variável
// ou a uma chave de objeto, tipo: const somar = (a,b) => a+b ou { somar: (a,b) => a+b }.
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
  valor: 0, // Q: Como esse valor funciona se ele não foi declarado?
  // R: É propriedade do objeto literal 'contador'. Acesse via this.valor (ou contador.valor), não é variável de escopo.
  // Explicação simples: pense em 'contador' como uma caixinha; 'valor' é uma gaveta dentro dela.
  // Q: Entendi, então o mesmo se aplica para as funções que estão sendo iniciadas sem variavel de escopo, como as de baixo; (Nao precisa responder)
  iniciar() {
    setTimeout(() => {
      this.valor += 1; // arrow mantém o this do objeto que chamou iniciar
      //Q: Se eu tivesse usado valor += 1 funcionaria tb ou é pq ele é objeto da const "contador" e por isso usa o this, ou seja, é como se fosse contador.valor? 
      // R: Não. 'valor += 1' buscaria uma variável no escopo e daria ReferenceError. Use this.valor (ou contador.valor).
      // Explicação simples: 'this.valor' diz qual caixinha/gaveta usar; só 'valor' dá erro por não dizer de onde vem.
      console.log("AF) this léxico:", this.valor);
    }, 0);
    //Q: No set timeout ele não retorna valor neh, porem insere valor na variavel "valor", mas não entendi o pq tem o zero no final 
    //e tambem o motivo de vc montar "setTimeout(() /* pq tem a function aq */ => { ... }, 0 /* o que é esse 0 */)", nao entendi esse pareteses pra colocar uma function dentro
    // R: setTimeout retorna um identificador do timer (para cancelar com clearTimeout), não o retorno do callback.
    //    O '0' é o atraso em milissegundos: agenda o callback para rodar "assim que possível" após o stack atual.
    //    O primeiro argumento de setTimeout é uma função (callback). Passamos uma arrow function anônima '() => { ... }'.
    //    Esses parênteses '()' indicam que a arrow não tem parâmetros; estamos passando a função como valor, não executando agora.
    // Explicação simples: setTimeout = "faz depois"; 0 ms = depois que terminar o que está rodando agora, tipo o sleep do genexus;
    // e '() => { ... }' é o que fazer depois.
  }
};

contador.iniciar();

// Cuidado: arrow como método pode não ter o this esperado
const obj = {
  x: 42,
  pegarX: () => this?.x // não aponta para obj
  // R: Arrow não cria seu próprio this; aqui herda do escopo externo. Prefira: pegarX() { return this.x }
  // Explicação simples: se quiser que 'this' seja o próprio objeto, use método normal:
  // pegarX() { return this.x }
};
console.log("AF) método arrow (não recomendado):", obj.pegarX());

// Sem 'arguments': use rest
const somaVariavel = (...numeros) => numeros.reduce((acc, n) => acc + n, 0);
console.log("AF) rest params:", somaVariavel(1, 2, 3, 4));


/* # Extras
Extra: retorno implícito
Só quando o corpo é uma expressão única. Para retornar objeto literal com retorno implícito, envolva em parênteses: ( ) => ({ nome, idade }) (como você fez).
Extra: construtor e prototype
Arrow não tem prototype e não pode ser usada com new. Se precisar de construtor, use function ou class.
Extra: bind
Arrow não precisa de bind; ela captura léxicamente o this. Já funções normais podem precisar de bind/call/apply dependendo do uso.
Extra: setTimeout
O uso de arrow dentro do setTimeout é ideal aqui, pois mantém o this do método iniciar() quando chamado como contador.iniciar().
Extra: optional chaining no this
this?.x evita erro caso this seja undefined/null, mas aqui o problema é o this não ser o obj. O método normal resolve isso.
Extra: performance
Diferenças são negligenciáveis para a maioria dos casos. Escolha pela semântica de this e legibilidade.
Extra: hoisting
Arrow functions atribuídas a const/let não são içadas como function declaration. Você só pode usá-las após a linha onde foram definidas.
Extra: nome da função
Arrow functions são anônimas por natureza; o nome derivado é o da variável/propriedade à qual são atribuídas.
Extra: generator/await
Não podem ser generators (function*) e não podem ter yield. Podem usar async normalmente: const f = async () => {}.
Extra: default params
Funcionam normalmente: const f = (a = 1, b = 2) => a + b.
Extra: object methods
Para métodos de objetos, prefira a sintaxe de método (pegarX() {}) quando precisar de this.
Extra: concise vs block body
Corpo conciso retorna implicitamente; corpo em bloco requer return.
Extra: destru turing com arrow
Ok: const fullName = ({ first, last }) => ${first} ${last};.
Extra: currying
Comum com arrow: const add = a => b => a + b;.
Resumo
Respondi: sintaxe válida para declarar arrow; por que valor existe; por que precisa de this.valor; por que método arrow não tem this do objeto.
Sugestões: use método normal para this; mantenha arrow para callbacks/pequenas funções sem this.

## Pendente: O que é bind, usos de new, class e function 
*/