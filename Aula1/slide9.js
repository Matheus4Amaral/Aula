console.log("Olá!");

console.warn("Atenção!");




let resultado = 0;

console.time("loop");

for (let i = 0; i <= 1000000; i++) {
    resultado += i;
}
console.log("Resultado: ", resultado);
console.timeEnd("loop");