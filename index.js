#!/usr/bin/env node

/*
O que este arquivo faz?
- Mostra um "índice" com os arquivos de estudo dentro das pastas `Classes/` e `Exercises/`.
- Permite rodar qualquer arquivo da lista com um comando simples.

Como usar:
1) Listar arquivos:  node index.js
2) Rodar um arquivo: node index.js run Exercises/exercicio2.js

Dica: copie o caminho exatamente como aparece na lista.
*/

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Onde o projeto está (mesmo lugar deste arquivo)
const ROOT = __dirname;

// Pastas onde vamos procurar arquivos .js
const TARGET_DIRS = ['Classes', 'Exercises'];

/*
Procura por arquivos .js dentro de uma pasta (e subpastas).
Devolve uma lista com os caminhos no formato: "Pasta/arquivo.js".
*/
function findFilesRecursively(baseDir) {
  const results = [];

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        // Se for pasta, entra nela e continua procurando
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        // Se for arquivo .js, guarda o caminho relativo ao projeto
        const relative = path.relative(ROOT, fullPath).replace(/\\/g, '/');
        results.push(relative);
      }
    }
  }

  walk(baseDir);
  return results.sort(); // Ordena para ficar organizado
}

/*
Monta a lista dos arquivos e mostra na tela, organizada por pasta.
Também mostra uma ajuda de como usar.
*/
function listIndex() {
  const index = {};

  for (const dir of TARGET_DIRS) {
    const absoluteDir = path.join(ROOT, dir);
    if (fs.existsSync(absoluteDir)) {
      index[dir] = findFilesRecursively(absoluteDir);
    } else {
      index[dir] = [];
    }
  }

  console.log('Arquivos disponíveis:\n');

  for (const dir of TARGET_DIRS) {
    const files = index[dir] || [];
    console.log(`- ${dir}/`);

    if (files.length === 0) {
      console.log('  (vazio)');
    } else {
      // Mostra os caminhos prontos para copiar/colar no comando "run"
      for (const filePath of files) {
        console.log(`  ${filePath}`);
      }
    }

    console.log('');
  }

  console.log('Uso:\n  node index.js                 # lista arquivos\n  node index.js run <caminho>   # executa um arquivo');
}

/*
Roda um arquivo .js com o Node.
Se o caminho não existir, mostra um erro e sai.
*/
function runFile(relativePath) {
  const resolved = path.join(ROOT, relativePath);

  if (!fs.existsSync(resolved)) {
    console.error(`Arquivo não encontrado: ${relativePath}`);
    process.exit(1);
  }

  // Executa: node <arquivo>
  const child = spawn(process.execPath, [resolved], { stdio: 'inherit' });
  child.on('exit', (code) => process.exit(code));
}

/*
Lê os comandos que você digitou e decide o que fazer.
- Sem comandos → mostra a lista
- "run <caminho>" → roda o arquivo informado
- Qualquer outra coisa → mostra a ajuda
*/
function main() {
  const [cmd, maybePath] = process.argv.slice(2);

  if (!cmd) {
    listIndex();
    return;
  }

  if (cmd === 'run' && maybePath) {
    runFile(maybePath);
    return;
  }

  console.log('Comando inválido.');
  listIndex();
}

main();
