// let initGame = function () {
//   return {
//     level: 1,
//     score: 0
//   }
// };

let initGame = () => {
  {level: 1, score: 0};
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

// const template = 'I VERB NOUN.';
//
// function sentence(verb, noun) {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// }
//
// console.log(sentence('like', 'birds'));
//
// let sentence = (verb, noun) => template
//   .replace('VERB', verb)
//   .replace('NOUN', noun);

// logs: I like birds.

// function removeLastChar(str) {
//   return str.slice(0, -1);
// }
//
// console.log(removeLastChar('ciao!')); // 'ciao'
// console.log(removeLastChar('hello')); // 'hell'

// function catAge(humanYears) {
//   let catYears = 0;
//   for (let i = 0; i < humanYears; i++) {
//     if (i === 0) {
//       catYears += 15;
//     } else if (i === 1) {
//       catYears += 9;
//     } else if (i > 1) {
//       catYears += 4;
//     }
//   }
//   return catYears;
// }
//
// console.log(catAge(2));
// console.log(catAge(3));
// console.log(catAge(4));

//
// The first human year corresponds to 15 cat years.
// The second human year corresponds to 9 cat years.
// Every subsequent human year corresponds to 4 cat years.

// function calculateBMI(cm, kg) {
//   let weightInKilograms = kg;
//   let heightInMeters = cm/100;
//
//   let bmi = weightInKilograms / (heightInMeters**2);
//   return bmi.toFixed(2);
// }
//
// calculateBMI(180, 80); // "24.69"

//
// function greet() {
//   console.log(greeting() + ' ' + recipient() + '!');
// }
//
// function greeting() {
//   return 'Good morning';
// }
//
// function recipient() {
//   return 'Launch School';
// }
//
// greet();

//
// function greet(greeting = 'Hello', recipient = 'world') {
//   console.log(greeting + ' ' + recipient + '!');
// }
//
// greet('Salutations'); // logs: Salutations, world!
//
// greet();              // logs: undefined, world!
//                       // should log: Hello, world!
