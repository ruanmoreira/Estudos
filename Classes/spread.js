// CLASSE: Spread Operator (ES6)
// =============================
// O que é: Espalha elementos/propriedades de iteráveis/objetos.
// Por que usar: Clonar e combinar arrays/objetos de forma concisa.
// Difere de Rest: spread "espalha", rest "agrega".

// Arrays: clonar e mesclar
const numeros = [1, 2, 3];
const clone = [...numeros];
const combinado = [...numeros, 4, 5, 6];
console.log("SP) arrays:", { clone, combinado });

// Objetos: clonar e sobrescrever (ordem importa)
const base = { modo: "prod", cache: true, nivel: 1 };
const override = { cache: false, nivel: 2 };
const final = { ...base, ...override }; // override ganha
console.log("SP) objetos:", final);

// Cuidado: cópia rasa (shallow copy)
const arrDeObjs = [{ id: 1, meta: { ok: true } }];
const raso = [...arrDeObjs];
raso[0].meta.ok = false; // afeta original
console.log("SP) shallow copy (original alterado):", arrDeObjs[0].meta.ok === false);
