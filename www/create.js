/*let para = document.createElement('p');

document.querySelector('body').appendChild(para);

para.textContent = 'Hello';
para.style.color = 'red';
para.style.fontSize = '50px';


let tr = document.createElement('tr');
document.querySelector('table').appendChild(tr);

let x = 0;

for (x = 0; x <= 10; x++) {
  console.log(x);
}


let y = 1

let td = document.createElement('td');
document.querySelector('tr').appendChild(td);

for (y = 1; y <= 10; y++) {
  console.log(y);
  tr.textContent = y;
}
*/ 

/*Methode 1 pour la table multiplication

let table = document.querySelector('table');

for (let i = 0; i<=10; i++) {
  let tr = document.createElement('tr');
    for (let j = 0; j<=10; j++) {
      let td = document.createElement('td');
      tr.appendChild(td);
      if (i===0) {
        tr.textContent = j;
      } else if (j===0) {
        td.textContent = i;
      } else {
        td.textContent = j*i;
        }  
      }  
      table.appendChild(tr);
    };
*/


let table = document.querySelector('table');

for (let i = 1; i<=10; i++) {
  let tr = document.createElement('tr');
    for (let j = 1; j<=10; j++) {
      let td = document.createElement('td');
      tr.appendChild(td); 
      td.textContent = j*i;
    }    
      table.appendChild(tr);
};
