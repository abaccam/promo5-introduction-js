/*
// 1) Ecrire dans la console tous les chiffres de 1 à 10
for (let count = 1; count <= 10; count++) {
  console.log(count);
}

// avec un while
let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}

// 2) Ecrire dans la console tous les chiffres pairs de 1 à 10
for (let count = 2; count <= 10; count += 2) {
  console.log(count);
}

// 3) Ecrire dans la console tous les chiffres avec choix de l'incrémentation de x à y
const step = 5;

for (let count = 1; count <= 10; count += step) {
  console.log(count);
}

// 4) Ecrire dans la console les 100 premiers membres de la suite de Fibonacci

let fibo = [0,1];

for (let count = 2; count < 100; count += 1) {
  fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
}

console.log(fibo);

// bonus : en faire une fonction

function fibonacci(toto = 0) {
  let results = [];

  for (let count = 0; count < toto; count += 1) {
    if (results.length < 2) {
      results.push(count);
    } else {
      results.push(results[results.length - 1] + results[results.length - 2]);
    }
  }

  return results;
}

console.log(fibonacci(50));


//exercice 5

const number = 451;

let guessedNumber = prompt("Entrez un nombre");

console.log(guessedNumber);

while (true){
  if (guessedNumber < number){
      guessedNumber = prompt("C'est plus!");
  }
  if (guessedNumber > number) {
      guessedNumber = prompt("C'est moins");
  }
  if (guessedNumber == number) {
     alert("Bravo");
     break; 
    }
   else{
     guessedNumber = prompt("Veuillez rentrer un nombre.");
   } 
    console.log(guessedNumber);
}


*/

// Exercice pyramide:
let starG="*";
let starD="  "

for(countG=1;countG<10;countG++){
  for(countD=9;countD<1;countD--)
        console.log(starD.repeat(countD) + starG.repeat(countG));
  }






 

