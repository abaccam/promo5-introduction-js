
//console.log(document.getElementById('para').textContent);


//let para = document.getElementById('para');

let para = document.querySelector('#para');

console.log(para.textContent);

para.textContent = 'bloup';

para.style.color = 'red';

// let laClasse = document.querySelector('.laClasse').style.fontSize = '55px';
let laClasse = document.querySelectorAll('laClasse');
for (let i of laClasse) {
     i.style.fontSize = "30px";
}

//let span = document.querySelector('p span');
//span.textContent = 'inside para';

let h1 = document.querySelector('h1');
alert(h1.textContent);

let motPrompt = prompt('Ecrivez un mot');
let lastSpan = document.querySelector('section > span');
lastSpan.textContent = motPrompt;

document.querySelector('section').style.border = "thick solid #0000FF";