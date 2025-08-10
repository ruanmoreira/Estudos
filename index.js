#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = __dirname;
const TARGET_DIRS = ['Classes', 'Exercises'];

function findFilesRecursively(baseDir) {
  const results = [];
  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        const relative = path.relative(ROOT, fullPath).replace(/\\/g, '/');
        results.push(relative);
      }
    }
  }
  walk(baseDir);
  return results.sort();
}

function listIndex() {
  const index = {};
  for (const dir of TARGET_DIRS) {
    const abs = path.join(ROOT, dir);
    if (fs.existsSync(abs)) {
      index[dir] = findFilesRecursively(abs);
    }
  }

  console.log('Arquivos disponíveis:\n');
  for (const dir of TARGET_DIRS) {
    const files = index[dir] || [];
    console.log(`- ${dir}/`);
    if (files.length === 0) {
      console.log('  (vazio)');
    } else {
      for (const f of files) console.log(`  ${f}`);
    }
    console.log('');
  }
  console.log('Uso:\n  node index.js                 # lista arquivos\n  node index.js run <caminho>   # executa um arquivo');
}

function runFile(relativePath) {
  const resolved = path.join(ROOT, relativePath);
  if (!fs.existsSync(resolved)) {
    console.error(`Arquivo não encontrado: ${relativePath}`);
    process.exit(1);
  }
  const child = spawn(process.execPath, [resolved], { stdio: 'inherit' });
  child.on('exit', (code) => process.exit(code));
}

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
