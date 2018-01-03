let person = {
  name : 'yoyo',
  surname : 'yo',
  age : 18, 
  isDeveloper : false,
  presentation : function() {
    let dev = "I'm a developper";
    if (!this.isDeveloper){
      dev = 'I am no one';
    }
  console.log(`Voici ${this.name}, il a ${this.age} ans, ${dev}`);
  },
  address : {
    num :10,
    nom :'rue cassin',
    city :'Lyon',
    code :69001,
  }
};

person.presentation();
person.name = 'toto';
person.age++;
person.presentation();



console.log(`il habite au ${person.address.num} ${person.address.nom} à ${person.address.city} ${person.address.code}.`);
