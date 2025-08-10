# Estudos de JavaScript (ES6+)

Repositório público com anotações, exemplos e exercícios de JavaScript moderno.

Este projeto serve como um acervo de estudos pessoais. A ideia é manter o código simples e direto, com foco em praticar conceitos do dia a dia.

## Como usar

- Pré-requisito: Node.js 16+ instalado
- Clone ou baixe o repositório
- No terminal, dentro da pasta do projeto, você pode:

```bash
node index.js                 # Mostra o índice (lista de arquivos)
node index.js run <caminho>   # Executa um arquivo específico

# Exemplo
node index.js run Exercises/exercicio2.js
```

Também é possível executar diretamente qualquer arquivo:

```bash
node Exercises/exercicio2.js
```

## Estrutura

- `Classes/`: Exemplos de conceitos (ES6+)
  - `variables.js`
  - `arrow-functions.js`
  - `destructuring.js`
  - `rest-parameters.js`
  - `spread.js`
- `Exercises/`: Exercícios práticos
  - `exercicio1.js`
  - `exercicio2.js`
- `Context/`: Contexto do estudo (instruções, perfil do aluno)
  - `instructions.md`
  - `perfil-aluno.md`
- `index.js`: Índice do projeto (lista e executa arquivos)

## Índice (CLI)

O arquivo `index.js` lista os arquivos disponíveis em `Classes/` e `Exercises/` e permite rodá-los rapidamente. Exemplos:

```bash
# Listar o índice
node index.js

# Executar um exercício
node index.js run Exercises/exercicio2.js

# Executar uma aula/arquivo de classe
node index.js run Classes/arrow-functions.js
```

## Roadmap (ideias)

- Adicionar mais exercícios por tema
- Criar testes simples (ex.: Jest) para validar respostas
- Adicionar exemplos de `async/await`, `promises`, `modules`, `map/reduce`

## Observações

- O foco é aprendizado. Nem todos os arquivos terão cobertura de testes ou padrões de produção.
- Sugestões são bem-vindas via issues/PRs.

## Licença

Este repositório é disponibilizado para fins de estudo. Use e adapte como quiser.
