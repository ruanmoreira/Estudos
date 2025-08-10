// CLASSE: Destructuring (ES6)
// ===========================
// O que é: Extrair dados de objetos/arrays em variáveis.
// Por que usar: Menos verboso, evita acessos repetidos, suporta defaults e renomeação.

const pessoa = {
  nome: "Ruan",
  idade: 24,
  endereco: { cidade: "Santo André", uf: "SP" },
  hobbies: ["programar", "estudar", "treinar"]
};

// Objetos: renomeando e com valor padrão
const { nome: nomePessoa, idade: idadePessoa, endereco: { cidade, uf = "SP" } } = pessoa;
console.log("DS) objeto:", { nomePessoa, idadePessoa, cidade, uf });

// Arrays: pulando itens e defaults
const [a = 0, , c = 3] = [1, , 5];
console.log("DS) array:", { a, c });

// Swap de variáveis
let x = 10, y = 20;
[x, y] = [y, x];
console.log("DS) swap:", { x, y });

// Parâmetros de função com destructuring
const conectar = ({ host = "localhost", porta = 5432, ssl = false }) => {
  console.log(`DS) conectando em ${host}:${porta} (ssl=${ssl})`);
};
conectar({ host: "db.meuapp.com", porta: 3306, ssl: true });
conectar({});
