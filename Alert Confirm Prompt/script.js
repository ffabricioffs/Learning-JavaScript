// alert(`Com a nossa mensagem.`);
// após apertar "ok" temos undefined, o que significa que não aponta para algum lugar na memória e não retorna nada

// window.confirm(`Gostaria de continuar?`); 
// Retorna um valor booleano 

// window.prompt(`Digite sua cor favorita:`);
// Retorna uma string

// Nós podemos capturar o valor dessa varíavel da seguinte forma:
// const confirma = window.confirm(`Gostaria de continuar?`);
// alert(confirma);

let primeiroValor = window.prompt(`Digite um número:`);
let segundoValor = window.prompt(`Digite outro número:`);

primeiroValor = parseFloat(primeiroValor);
segundoValor = parseFloat(segundoValor);

let mediaDosValores = (primeiroValor + segundoValor) / 2;

alert(`A média dos dois números é ${mediaDosValores}`);