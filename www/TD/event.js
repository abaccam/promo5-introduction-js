let btn = document.querySelector('button');
let compteur = 0;

btn.addEventListener('click', function(){
  console.log('bloup');
  compteur++;
  console.log(compteur);
});

let compteur2 = 0;

let btnMoins = document.querySelector('#moins');
let btnPlus = document.querySelector('#plus');
affichage = document.querySelector('#affichage');


btnMoins.addEventListener('click', function(){
  compteur2--;
  console.log(compteur2);
  affichage.textContent = compteur2;
});

btnPlus.addEventListener('click', function(){
  compteur2++;
  console.log(compteur2);
  affichage.textContent = compteur2;
});

console.log(compteur2);
