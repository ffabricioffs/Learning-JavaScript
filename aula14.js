let num1 = 100; // number
let num2 = 2.5; // number

// Aqui estou dizendo para a variável se comportar como uma string momentaneamente.
console.log(num1.toString() + num2);

// Observe:
console.log(typeof num1);


// Além disso podemos representar os números em binário da seguinte forma:
console.log(num1.toString(2));

// Para arredondar podemos usar toFixed:
console.log(num2.toFixed(0))

// Para checar se um número é inteiro:
console.log(Number.isInteger(num2));


// Para trabalhar com a imprecisão dos números decimais podemos transformá-los em inteiros para operar e depois voltarmos para os decimais:
let randomNumber = 0.7;
let randomNumber2 = 0.1;

randomNumber = ((randomNumber * 100) + (randomNumber2 * 100)) / 100;
console.log(randomNumber);

