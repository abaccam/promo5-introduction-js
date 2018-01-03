/*
let voiture =[];
//On fait une boucle qui fera 3 tours pour récupérer 3 valeur de l'utilisateur
for (let x = 0; x < 3; x++) {
    //On stock le retour du prompt dans la variable valeur
    let valeur = prompt("entrer nom de voiture");
    //On ajoute cette valeur à la fin de notre tableau avec un push
    voiture.push(valeur);
    
}

for (let nom of voiture) {
    //Ici, chaque nom de voiture sera stocké dans
    //la variable nom, qu'on affiche à chaque fois
    console.log(nom);
}

*/





function mytab (){

  function start(){
    for (let x = 0; x < 3; x++) {
      let valeur = prompt("entrer nom de voiture");
      voiture.push(valeur);
    }
  }

  function show(){
    for (let nom of voiture){
    console.log(nom)
    }  
  }

  function length(){
    console.log(voiture.length)
  }

  function reset(){
    
    arr = [];
  }

}

let voiture =[];

while (true) {
  let choice = prompt("Que voulez-vous faire?");

    if (choice == "start") {
      start();
      }
    
    
    else if (choice == "show") {
      show();
      }
    

    else if (choice == "length") {
        lenght();
      }

    else if (choice == "reset") {
         reset();
        }
      
    else if (choice == "stop"){
      break;
    }

    else {
      alert("Choice start, show, length, reset or stop");
    }
  }

  /*

  let check = true, ask = '', arr = [];
  
  while (check) {
      ask = prompt('What?\nYou can: start,show,length,reset,stop')
  
      switch (ask) {
          case 'start':
              for (let x = 0; x < 3; x++) {
                  let valeur = prompt("entrer nom de voiture");
  
                  arr.push(valeur);
  
              }
              break;
          case 'show':
              for (let nom of arr) {
                  console.log(nom);
              }
              break;
          case 'length':
              console.log(arr.length);
              break;
          case 'reset':
              arr = [];
              break;
          case 'stop':
              check = false;
              break;
          default:
              console.log('unknown command');
              break;
      }
  
  }
  
  //autre manière avec des if et else-if
  while(true) {
      let reponse = prompt('enter command');
  
      if(reponse === 'start') {
  
      } else if(reponse === 'show') {
  
      } else if(reponse === 'length') {
  
      } else if(reponse === 'stop') {
          break;
      } else {
          console.log('unknown command');
      }
  }
  */