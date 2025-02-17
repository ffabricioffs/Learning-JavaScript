let umaString = "Um texto";

//Os caracteres da string são basicamente uma lista

console.log(umaString[3]);

// também podemos fazer da seguinte forma:

console.log(umaString.charAt(7));

// para concatenar podemos fazer das seguintes formas:

// função concat
console.log(umaString.concat(' em', ' um', ' lindo dia.'));

// utizando +
console.log(umaString + ' para você.');

// boas práticas
console.log(`${umaString} em um lindo dia.`);


// Já para saber em que índice um termo dentro de uma string começa podemos usar indexOf:

console.log(umaString.indexOf('texto'));

// E podemos determinar que ele ache um termo a partir de um índice:

console.log(umaString.indexOf('o', 3));

// E analisando do final para o início:

console.log(umaString.lastIndexOf('o', 3));

// Dessa forma teremos -1, pois de trás para frente não há um "o" a partir do índice 3

// Já para encontrar termos até mesmo com expressões regulares podemos utilizar:

console.log(umaString.search(/x/));

// Para substituir as palavras:

let textinhoAleatorio = 'O rato';
console.log(textinhoAleatorio.replace('rato', 'pato'));

console.log(textinhoAleatorio.replace(/r/g, 'ch'))

// Já para ver a quantidade de caracteres:
console.log(textinhoAleatorio.length);

// Para mostrar a string "fatiada"
console.log(umaString.slice(2,6));

// A função slice dessa forma mostrará os três últimos índices
console.log(umaString.slice(-3));

// Também podemos excluir uma parte da frente da string dessa forma:
umaString = umaString + '.';
console.log(umaString.slice(-6, umaString.length - 1));


// Para simplificar podemos ver o exemplo abaixo, que ignora os caracteres de trás e da frente:

let maisTexto = 'O rato roeu a roupa do rei de roma.';

console.log(maisTexto.slice(-5, -1));
console.log(maisTexto.substring(maisTexto.length - 5, maisTexto.length - 1));

// Já para dividir o conteúdo podemos usar a função split:

console.log(maisTexto.split(' ', 4))


// Para deixar a string toda em maiúsculo e minúscula:
console.log(maisTexto.toUpperCase());
console.log(maisTexto.toLowerCase());