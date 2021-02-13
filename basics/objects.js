function clone(obj) {
  let entries = Object.entries(obj);
  console.log('cloning')
  let newObj = {};

  for (let i = 0; i < entries.length; i++) {
    newObj[entries[i][0]] = entries[i][1];
  }
  return newObj;
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
// let newObj = {};
//
// for (let i = 0; i < nestedArray.length; i++) {
//   obj[nestedArray[i][0]] = nestedArray[i][1];
// }
//
// console.log(obj);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };
//
// let keys = Object.keys(vehicle);

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   // add code here
//   // greet: function(name) {
//   //     console.log(`Hej, ${name}`);
//   // }
//
//
// };
//
//
// jane.greet('Bobby'); // Hej, Bobby!
